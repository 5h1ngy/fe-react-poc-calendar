import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { 
  WeekViewContainer, 
  TimeColumn, 
  TimeSlot, 
  DaysContainer, 
  DayColumn, 
  TimeCell, 
  Event,
  CurrentTimeLine,
  NoEventsMessage
} from './styles';
import moment from 'moment';
import { FiCalendar } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { selectEvents, selectTimeScale, CalendarEvent } from '@/store/slices/calendarSlice';
import { generateTimeSlots, generateWeekDays, calculateEventPosition } from '@/utils/datetime/dateUtils';
import { RootState } from '@/store';

interface WeekViewProps {
  currentDate: moment.Moment;
  onEventClick: (event: CalendarEvent) => void;
}

const WeekView: React.FC<WeekViewProps> = ({ currentDate, onEventClick }) => {
  const { t } = useTranslation();
  const events = useSelector(selectEvents);
  const timeScale = useSelector(selectTimeScale);
  const timeColumnRef = useRef<HTMLDivElement>(null);
  const daysContainerRef = useRef<HTMLDivElement>(null);
  
  const [currentTimePosition, setCurrentTimePosition] = useState<string>('0');
  const [currentTimeTop, setCurrentTimeTop] = useState<number>(0);
  const weekDays = generateWeekDays(currentDate);
  const timeSlots = generateTimeSlots(timeScale);
  
  // Sincronizza lo scroll tra la colonna dei tempi e la griglia dei giorni
  useEffect(() => {
    const timeColumn = timeColumnRef.current;
    const daysContainer = daysContainerRef.current;
    
    if (!timeColumn || !daysContainer) return;
    
    const handleTimeColumnScroll = () => {
      if (daysContainer) {
        daysContainer.scrollTop = timeColumn.scrollTop;
      }
    };
    
    const handleDaysContainerScroll = () => {
      if (timeColumn) {
        timeColumn.scrollTop = daysContainer.scrollTop;
      }
    };
    
    timeColumn.addEventListener('scroll', handleTimeColumnScroll);
    daysContainer.addEventListener('scroll', handleDaysContainerScroll);
    
    return () => {
      timeColumn.removeEventListener('scroll', handleTimeColumnScroll);
      daysContainer.removeEventListener('scroll', handleDaysContainerScroll);
    };
  }, []);
  
  // Calcola e aggiorna la posizione della linea dell'ora corrente
  useEffect(() => {
    const updateCurrentTime = () => {
      const now = moment();
      const startOfDay = now.clone().startOf('day');
      const minutesSinceMidnight = now.diff(startOfDay, 'minutes');
      const totalMinutesInDay = 24 * 60;
      
      // Calcola la posizione percentuale nella giornata
      const position = (minutesSinceMidnight / totalMinutesInDay) * 100;
      setCurrentTimePosition(`${position}%`);
      
      // Altezza di un'ora in pixel (ogni TimeCell è 60px)
      const hourHeight = 60;
      const minutesPerHour = 60;
      
      // Calcola top in pixel per scorrere alla posizione corrente
      const currentHour = now.hours();
      const currentMinute = now.minutes();
      const topValue = (currentHour * hourHeight) + ((currentMinute / minutesPerHour) * hourHeight);
      setCurrentTimeTop(topValue);
    };
    
    updateCurrentTime();
    const interval = setInterval(updateCurrentTime, 60000); // Aggiorna ogni minuto
    
    return () => clearInterval(interval);
  }, []);
  
  // Scorrere automaticamente alla posizione dell'ora corrente
  useEffect(() => {
    const scrollToCurrentTime = () => {
      if (timeColumnRef.current && currentTimeTop > 0) {
        const scrollPosition = currentTimeTop - 200; // Centro la posizione corrente
        timeColumnRef.current.scrollTop = Math.max(0, scrollPosition);
      }
    };
    
    scrollToCurrentTime();
  }, [currentTimeTop]);
  
  // Gestisce il posizionamento degli eventi sovrapposti
  const calculateEventStyles = (events: CalendarEvent[], dayDate: moment.Moment) => {
    if (!events.length) return [];
    
    // Ordina gli eventi per ora di inizio
    const sortedEvents = [...events].sort((a, b) => 
      moment(a.date).valueOf() - moment(b.date).valueOf()
    );
    
    // Identifica gruppi di eventi sovrapposti
    const overlappingGroups: CalendarEvent[][] = [];
    let currentGroup: CalendarEvent[] = [sortedEvents[0]];
    
    for (let i = 1; i < sortedEvents.length; i++) {
      const currentEvent = sortedEvents[i];
      const previousEvent = sortedEvents[i - 1];
      
      const currentEventStart = moment(currentEvent.date);
      const previousEventEnd = moment(previousEvent.date).add(previousEvent.duration, 'minutes');
      
      if (currentEventStart.isBefore(previousEventEnd)) {
        // Eventi sovrapposti, aggiungili allo stesso gruppo
        currentGroup.push(currentEvent);
      } else {
        // Non sovrapposti, crea un nuovo gruppo
        overlappingGroups.push([...currentGroup]);
        currentGroup = [currentEvent];
      }
    }
    
    // Aggiungi l'ultimo gruppo
    if (currentGroup.length > 0) {
      overlappingGroups.push(currentGroup);
    }
    
    // Calcola gli stili per ogni evento in base al suo gruppo
    return sortedEvents.map(event => {
      // Trova a quale gruppo appartiene l'evento
      const group = overlappingGroups.find(g => g.includes(event));
      if (!group) return null;
      
      // Posizione dell'evento all'interno del gruppo
      const indexInGroup = group.indexOf(event);
      const totalInGroup = group.length;
      
      // Calcola larghezza e posizione laterale
      const width = `${100 / totalInGroup}%`;
      const left = `${(indexInGroup * (100 / totalInGroup))}%`;
      
      // Calcola posizione verticale e altezza
      const { top, height } = calculateEventPosition(event, timeScale);
      
      return {
        $top: top,
        $height: height,
        $left: left,
        $width: width,
        $color: event.color || '#1890ff',
        event
      };
    }).filter(Boolean);
  };
  
  return (
    <WeekViewContainer>
      <TimeColumn ref={timeColumnRef}>
        {timeSlots.map((time, index) => (
          <TimeSlot key={`time-${index}`}>
            {time}
          </TimeSlot>
        ))}
      </TimeColumn>
      
      <DaysContainer ref={daysContainerRef}>
        {weekDays.map((day) => {
          const dayDate = day.date;
          const dayEvents = events.filter(event => 
            moment(event.date).format('YYYY-MM-DD') === dayDate.format('YYYY-MM-DD')
          );
          
          const eventStyles = calculateEventStyles(dayEvents, dayDate);
          const isToday = day.isToday;
          
          return (
            <DayColumn key={dayDate.format('YYYY-MM-DD')} isToday={isToday}>
              {timeSlots.map((time, index) => (
                <TimeCell 
                  key={`cell-${index}`} 
                  isCurrentTime={isToday && time === moment().format('HH:mm')}
                />
              ))}
              
              {/* Visualizza gli eventi */}
              {eventStyles && eventStyles.map(style => {
                if (!style) return null;
                const { event, ...styleProps } = style;
                const eventTime = moment(event.date).format('HH:mm');
                
                return (
                  <Event
                    key={event.id}
                    {...styleProps}
                    onClick={() => onEventClick(event)}
                  >
                    <div className="event-time">{eventTime}</div>
                    <div className="event-title">{event.title}</div>
                  </Event>
                );
              })}
              
              {/* Linea dell'ora corrente */}
              {isToday && (
                <CurrentTimeLine style={{ top: currentTimePosition }} />
              )}
              
              {/* Messaggio quando non ci sono eventi */}
              {dayEvents.length === 0 && (
                <NoEventsMessage>
                  <FiCalendar />
                  <p>{t('calendar.noEvents')}</p>
                </NoEventsMessage>
              )}
            </DayColumn>
          );
        })}
      </DaysContainer>
    </WeekViewContainer>
  );
};

export default WeekView;

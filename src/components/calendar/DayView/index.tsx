import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { 
  DayViewContainer, 
  TimeColumn, 
  TimeSlot, 
  DayContent, 
  TimeCell, 
  Event,
  CurrentTimeLine,
  NoEventsMessage,
  DayHeader
} from './styles';
import moment from 'moment';
import { FiCalendar } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { selectEvents, selectTimeScale, CalendarEvent } from '@/store/slices/calendarSlice';
import { generateTimeSlots, calculateEventPosition } from '@/utils/datetime/dateUtils';
import { RootState } from '@/store';

interface DayViewProps {
  currentDate: moment.Moment;
  onEventClick: (event: CalendarEvent) => void;
}

const DayView: React.FC<DayViewProps> = ({ currentDate, onEventClick }) => {
  const { t } = useTranslation();
  const events = useSelector(selectEvents);
  const timeScale = useSelector(selectTimeScale);
  const timeColumnRef = useRef<HTMLDivElement>(null);
  const dayContentRef = useRef<HTMLDivElement>(null);
  
  const [currentTimePosition, setCurrentTimePosition] = useState<string>('0');
  const [currentTimeTop, setCurrentTimeTop] = useState<number>(0);
  const timeSlots = generateTimeSlots(timeScale);
  
  // Filtra gli eventi per il giorno corrente
  const dayEvents = events.filter(event => 
    moment(event.date).format('YYYY-MM-DD') === currentDate.format('YYYY-MM-DD')
  ).sort((a, b) => moment(a.date).valueOf() - moment(b.date).valueOf());
  
  // Sincronizza lo scroll tra la colonna dei tempi e il contenuto del giorno
  useEffect(() => {
    const timeColumn = timeColumnRef.current;
    const dayContent = dayContentRef.current;
    
    if (!timeColumn || !dayContent) return;
    
    const handleTimeColumnScroll = () => {
      if (dayContent) {
        dayContent.scrollTop = timeColumn.scrollTop;
      }
    };
    
    const handleDayContentScroll = () => {
      if (timeColumn) {
        timeColumn.scrollTop = dayContent.scrollTop;
      }
    };
    
    timeColumn.addEventListener('scroll', handleTimeColumnScroll);
    dayContent.addEventListener('scroll', handleDayContentScroll);
    
    return () => {
      timeColumn.removeEventListener('scroll', handleTimeColumnScroll);
      dayContent.removeEventListener('scroll', handleDayContentScroll);
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
  
  // Verifica se la data visualizzata è oggi
  const isToday = currentDate.format('YYYY-MM-DD') === moment().format('YYYY-MM-DD');
  
  return (
    <DayViewContainer>
      <TimeColumn ref={timeColumnRef}>
        {timeSlots.map((time, index) => (
          <TimeSlot key={`time-${index}`}>
            {time}
          </TimeSlot>
        ))}
      </TimeColumn>
      
      <DayContent ref={dayContentRef}>
        <DayHeader>
          {currentDate.format('dddd, D MMMM YYYY')}
        </DayHeader>
        
        {timeSlots.map((time, index) => (
          <TimeCell 
            key={`cell-${index}`} 
            isCurrentTime={isToday && time === moment().format('HH:mm')}
          />
        ))}
        
        {/* Visualizza gli eventi */}
        {dayEvents.map(event => {
          const { top, height } = calculateEventPosition(event, timeScale);
          const eventTime = moment(event.date).format('HH:mm');
          
          return (
            <Event
              key={event.id}
              $top={top}
              $height={height}
              $color={event.color || '#1890ff'}
              onClick={() => onEventClick(event)}
            >
              <div className="event-time">{eventTime}</div>
              <div className="event-title">{event.title}</div>
              {event.description && (
                <div className="event-description">{event.description}</div>
              )}
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
            <p>{t('calendar.noEventsForDay')}</p>
          </NoEventsMessage>
        )}
      </DayContent>
    </DayViewContainer>
  );
};

export default DayView;

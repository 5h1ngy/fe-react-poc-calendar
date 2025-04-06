import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { 
  MonthViewContainer, 
  MonthGrid, 
  DayCell, 
  DayHeader, 
  DayNumber, 
  AddButton,
  EventsList,
  EventItem,
  MoreEventsButton
} from './styles';
import { FiPlus } from 'react-icons/fi';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { selectEvents, CalendarEvent } from '@/store/slices/calendarSlice';
import { generateDaysOfMonth } from '@/utils/datetime/dateUtils';

interface MonthViewProps {
  currentDate: moment.Moment;
  onEventClick: (event: CalendarEvent) => void;
  onAddEvent: (date?: moment.Moment) => void;
}

const MonthView: React.FC<MonthViewProps> = ({ currentDate, onEventClick, onAddEvent }) => {
  const { t } = useTranslation();
  const events = useSelector(selectEvents);
  const [expandedDay, setExpandedDay] = useState<string | null>(null);
  
  const days = generateDaysOfMonth(currentDate);
  
  // Calcola gli eventi per un giorno specifico
  const getEventsForDay = (date: moment.Moment) => {
    return events.filter(event => 
      moment(event.date).format('YYYY-MM-DD') === date.format('YYYY-MM-DD')
    ).sort((a, b) => moment(a.date).diff(moment(b.date)));
  };
  
  // Limita il numero di eventi mostrati per giorno
  const getVisibleEvents = (dayEvents: CalendarEvent[], dayKey: string) => {
    const isExpanded = expandedDay === dayKey;
    const maxEvents = isExpanded ? Infinity : 3;
    return dayEvents.slice(0, maxEvents);
  };
  
  // Gestisce il click su "Mostra più eventi"
  const handleMoreEventsClick = (dayKey: string) => {
    setExpandedDay(expandedDay === dayKey ? null : dayKey);
  };
  
  return (
    <MonthViewContainer>
      <MonthGrid>
        {days.map((day, index) => {
          const dayKey = day.date.format('YYYY-MM-DD');
          const dayEvents = getEventsForDay(day.date);
          const visibleEvents = getVisibleEvents(dayEvents, dayKey);
          const hasMoreEvents = dayEvents.length > visibleEvents.length;
          
          // Determina se il giorno è un weekend (sabato o domenica)
          const dayOfWeek = day.date.day();
          const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
          
          return (
            <DayCell 
              key={dayKey} 
              isCurrentMonth={day.isCurrentMonth} 
              isToday={day.isToday}
              isWeekend={isWeekend}
            >
              <DayHeader isCurrentMonth={day.isCurrentMonth}>
                <DayNumber isToday={day.isToday} isCurrentMonth={day.isCurrentMonth}>
                  {day.date.format('D')}
                </DayNumber>
                
                {day.isCurrentMonth && (
                  <AddButton 
                    onClick={() => onAddEvent(day.date)}
                    aria-label={t('calendar.addEvent')}
                  >
                    <FiPlus />
                  </AddButton>
                )}
              </DayHeader>
              
              {day.isCurrentMonth && (
                <EventsList>
                  {visibleEvents.map(event => (
                    <EventItem 
                      key={event.id} 
                      $color={event.color || '#1890ff'}
                      onClick={() => onEventClick(event)}
                    >
                      {moment(event.date).format('HH:mm')} {event.title}
                    </EventItem>
                  ))}
                  
                  {hasMoreEvents && (
                    <MoreEventsButton onClick={() => handleMoreEventsClick(dayKey)}>
                      {expandedDay === dayKey 
                        ? t('calendar.showLess') 
                        : t('calendar.showMore', { count: dayEvents.length - visibleEvents.length })}
                    </MoreEventsButton>
                  )}
                </EventsList>
              )}
            </DayCell>
          );
        })}
      </MonthGrid>
    </MonthViewContainer>
  );
};

export default MonthView;

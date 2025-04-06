import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CalendarPageContainer, CalendarContent, LoadingContainer } from './styles';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { FiLoader } from 'react-icons/fi';
import { selectCurrentDate, selectCurrentView, CalendarEvent } from '@/store/slices/calendarSlice';
import { configureLocale } from '@/utils/datetime/dateUtils';

// Componenti del calendario
import CalendarHeader from '@/components/calendar/Header';
import DayView from '@/components/calendar/DayView';
import WeekView from '@/components/calendar/WeekView';
import MonthView from '@/components/calendar/MonthView';
import EventModal from '@/components/calendar/EventModal';

const CalendarPage: React.FC = () => {
  const { t } = useTranslation();
  const currentDateStr = useSelector(selectCurrentDate);
  const currentView = useSelector(selectCurrentView);
  
  const [isLoading, setIsLoading] = useState(true);
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | undefined>(undefined);
  const [selectedDate, setSelectedDate] = useState<moment.Moment | undefined>(undefined);
  
  // Configura il locale di moment.js
  useEffect(() => {
    configureLocale();
    setIsLoading(false);
  }, []);
  
  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setSelectedDate(undefined);
    setShowEventModal(true);
  };
  
  const handleAddEvent = (date?: moment.Moment) => {
    setSelectedEvent(undefined);
    setSelectedDate(date);
    setShowEventModal(true);
  };
  
  const handleCloseModal = () => {
    setShowEventModal(false);
    setSelectedEvent(undefined);
    setSelectedDate(undefined);
  };
  
  // Renderizza la vista corrente del calendario
  const renderCalendarView = () => {
    const currentDate = moment(currentDateStr);
    
    if (isLoading) {
      return (
        <LoadingContainer>
          <FiLoader />
          <span>{t('common.loading')}</span>
        </LoadingContainer>
      );
    }
    
    switch (currentView) {
      case 'day':
        return <DayView currentDate={currentDate} onEventClick={handleEventClick} />;
      case 'week':
        return <WeekView currentDate={currentDate} onEventClick={handleEventClick} />;
      case 'month':
        return <MonthView currentDate={currentDate} onEventClick={handleEventClick} onAddEvent={handleAddEvent} />;
      default:
        return <WeekView currentDate={currentDate} onEventClick={handleEventClick} />;
    }
  };
  
  return (
    <CalendarPageContainer>
      <CalendarHeader onAddEvent={handleAddEvent} />
      
      <CalendarContent>
        {renderCalendarView()}
      </CalendarContent>
      
      {showEventModal && (
        <EventModal 
          event={selectedEvent} 
          initialDate={selectedDate} 
          onClose={handleCloseModal} 
        />
      )}
    </CalendarPageContainer>
  );
};

export default CalendarPage;

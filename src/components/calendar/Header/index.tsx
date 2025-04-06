import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  HeaderContainer, 
  HeaderTop, 
  DateDisplay, 
  ControlsContainer,
  ViewSelectorContainer,
  ScaleSelectorContainer,
  WeekHeaderContainer,
  DayHeaderItem
} from './styles';
import { FiChevronLeft, FiChevronRight, FiPlus, FiCalendar } from 'react-icons/fi';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import Button from '@/components/ui/Button';
import ViewSlider from './ViewSlider';
import { 
  selectCurrentDate, 
  selectCurrentView, 
  selectTimeScale,
  setCurrentDate,
  setCurrentView,
  setTimeScale
} from '@/store/slices/calendarSlice';
import { configureLocale, generateWeekDays } from '@/utils/datetime/dateUtils';
import { RootState } from '@/store';

interface CalendarHeaderProps {
  onAddEvent: (date?: moment.Moment) => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ onAddEvent }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const currentDateStr = useSelector(selectCurrentDate);
  const currentView = useSelector(selectCurrentView);
  const timeScale = useSelector(selectTimeScale);
  
  const currentDate = moment(currentDateStr);
  
  useEffect(() => {
    configureLocale();
  }, []);
  
  const handlePrevious = () => {
    if (currentView === 'month') {
      dispatch(setCurrentDate(moment(currentDate).subtract(1, 'month').format()));
    } else if (currentView === 'week') {
      dispatch(setCurrentDate(moment(currentDate).subtract(1, 'week').format()));
    } else if (currentView === 'day') {
      dispatch(setCurrentDate(moment(currentDate).subtract(1, 'day').format()));
    }
  };
  
  const handleNext = () => {
    if (currentView === 'month') {
      dispatch(setCurrentDate(moment(currentDate).add(1, 'month').format()));
    } else if (currentView === 'week') {
      dispatch(setCurrentDate(moment(currentDate).add(1, 'week').format()));
    } else if (currentView === 'day') {
      dispatch(setCurrentDate(moment(currentDate).add(1, 'day').format()));
    }
  };
  
  const handleTodayClick = () => {
    dispatch(setCurrentDate(moment().format()));
  };
  
  const handleViewChange = (view: 'day' | 'week' | 'month') => {
    dispatch(setCurrentView(view));
  };
  
  const handleTimeScaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTimeScale(Number(e.target.value) as 10 | 30 | 60));
  };
  
  // Format the date based on the current view
  const getFormattedDate = () => {
    if (currentView === 'month') {
      return currentDate.format('MMMM YYYY');
    } else if (currentView === 'week') {
      const weekDays = generateWeekDays(currentDate);
      const startDate = weekDays[0].date;
      const endDate = weekDays[6].date;
      
      if (startDate.month() === endDate.month()) {
        return `${startDate.format('D')} - ${endDate.format('D')} ${startDate.format('MMMM YYYY')}`;
      } else if (startDate.year() === endDate.year()) {
        return `${startDate.format('D MMM')} - ${endDate.format('D MMM YYYY')}`;
      } else {
        return `${startDate.format('D MMM YYYY')} - ${endDate.format('D MMM YYYY')}`;
      }
    } else {
      return currentDate.format('dddd, D MMMM YYYY');
    }
  };
  
  // Render the days of the week header (only for week view)
  const renderWeekDaysHeader = () => {
    if (currentView !== 'week') return null;
    
    const weekDays = generateWeekDays(currentDate);
    
    return (
      <WeekHeaderContainer>
        {weekDays.map((day) => (
          <DayHeaderItem 
            key={day.date.format('YYYY-MM-DD')} 
            isToday={day.isToday}
          >
            <div className="day-name">{day.date.format('ddd')}</div>
            <div className="day-number">{day.date.format('D')}</div>
            <button 
              className="add-event-btn" 
              onClick={() => onAddEvent(day.date)}
              aria-label={t('calendar.addEvent')}
            >
              <FiPlus />
            </button>
          </DayHeaderItem>
        ))}
      </WeekHeaderContainer>
    );
  };
  
  return (
    <HeaderContainer>
      <HeaderTop>
        <ControlsContainer>
          <Button 
            onClick={handlePrevious} 
            variant="secondary" 
            size="small"
            aria-label={t('calendar.previous')}
            icon={<FiChevronLeft />}
          />
          <Button 
            onClick={handleNext} 
            variant="secondary" 
            size="small"
            aria-label={t('calendar.next')}
            icon={<FiChevronRight />}
          />
          <Button 
            onClick={handleTodayClick} 
            variant="primary" 
            size="small"
            icon={<FiCalendar />}
          >
            {t('calendar.today')}
          </Button>
        </ControlsContainer>
        
        <DateDisplay>{getFormattedDate()}</DateDisplay>
        
        <ControlsContainer>
          {currentView === 'week' && (
            <ScaleSelectorContainer>
              <label htmlFor="time-scale">{t('calendar.timeScale')}:</label>
              <select 
                id="time-scale" 
                value={timeScale} 
                onChange={handleTimeScaleChange}
              >
                <option value={60}>60 {t('calendar.minutes')}</option>
                <option value={30}>30 {t('calendar.minutes')}</option>
                <option value={10}>10 {t('calendar.minutes')}</option>
              </select>
            </ScaleSelectorContainer>
          )}
          <Button 
            onClick={() => onAddEvent(currentDate)} 
            variant="primary" 
            size="small"
            icon={<FiPlus />}
          >
            {t('calendar.addEvent')}
          </Button>
        </ControlsContainer>
      </HeaderTop>
      
      <ViewSelectorContainer>
        <ViewSlider currentView={currentView} />
      </ViewSelectorContainer>
      
      {renderWeekDaysHeader()}
    </HeaderContainer>
  );
};

export default CalendarHeader;

import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentView } from '@/store/slices/calendarSlice';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ViewSliderContainer = styled.div`
  background-color: ${({ theme }) => `${theme.colors.background.secondary}40`};
  padding: 4px;
  border-radius: 28px;
  display: flex;
  position: relative;
  width: 300px;
  margin: 0 auto;
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);
`;

const ViewSliderOption = styled.button<{ isActive: boolean }>`
  border: none;
  background: ${({ isActive, theme }) => isActive ? theme.colors.primary : 'transparent'};
  color: ${({ isActive }) => isActive ? 'white' : 'inherit'};
  border-radius: 24px;
  padding: 8px 16px;
  font-size: 0.95rem;
  font-weight: 500;
  flex: 1;
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: all 0.2s ease;
  text-align: center;
  box-shadow: ${({ isActive }) => isActive ? '0 2px 8px rgba(0, 0, 0, 0.15)' : 'none'};
  
  &:focus {
    outline: none;
  }
  
  &:hover:not(:disabled) {
    background: ${({ isActive, theme }) => 
      isActive ? theme.colors.primary : `${theme.colors.background.secondary}80`};
  }
`;

interface ViewSliderProps {
  currentView: 'day' | 'week' | 'month';
}

const ViewSlider: React.FC<ViewSliderProps> = ({ currentView }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleViewChange = (view: 'day' | 'week' | 'month') => {
    dispatch(setCurrentView(view));
    navigate(`/${view}`);
  };
  
  return (
    <ViewSliderContainer>
      <ViewSliderOption 
        isActive={currentView === 'day'} 
        onClick={() => handleViewChange('day')}
      >
        {t('calendar.day')}
      </ViewSliderOption>
      <ViewSliderOption 
        isActive={currentView === 'week'} 
        onClick={() => handleViewChange('week')}
      >
        {t('calendar.week')}
      </ViewSliderOption>
      <ViewSliderOption 
        isActive={currentView === 'month'} 
        onClick={() => handleViewChange('month')}
      >
        {t('calendar.month')}
      </ViewSliderOption>
    </ViewSliderContainer>
  );
};

export default ViewSlider;

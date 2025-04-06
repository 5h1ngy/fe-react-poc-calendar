import styled from 'styled-components';

export const WeekViewContainer = styled.div`
  display: flex;
  height: calc(100vh - 200px);
  min-height: 600px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme }) => 
    theme.mode === 'light' 
      ? '#fffdf7' /* Tono panna/crema per light mode come richiesto */
      : theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  margin: 0.5rem;
  padding: 0.5rem;
  transition: all 0.3s ease;
`;

export const TimeColumn = styled.div`
  width: 70px;
  overflow-y: auto;
  background-color: ${({ theme }) => 
    theme.mode === 'light' 
      ? '#f8f6f1' /* Tono panna più chiaro per light mode */
      : theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  margin-right: 10px;
  padding: 4px 0;
  scrollbar-width: thin;
  border-right: 1px solid ${({ theme }) => theme.colors.border.default};
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.border.default};
    border-radius: ${({ theme }) => theme.borderRadius.xs};
  }
  
  transition: all 0.2s ease;
`;

export const TimeSlot = styled.div<{ visible?: boolean }>`
  height: 60px;
  padding: 4px 10px;
  text-align: right;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  position: relative;
  display: ${({ visible = true }) => (visible ? 'flex' : 'none')};
  align-items: flex-start;
  justify-content: flex-end;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 20%;
    right: 0;
    height: 1px;
    background-color: ${({ theme }) => `${theme.colors.border.primary}15`};
  }
`;

export const DaysContainer = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  gap: 8px;
  padding-right: 6px;
  background-color: ${({ theme }) => 
    theme.mode === 'light' 
      ? '#fcf9f2' /* Tono panna per light mode */
      : theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.border.default};
    border-radius: ${({ theme }) => theme.borderRadius.xs};
  }
  
  transition: all 0.2s ease;
`;

export const DayColumn = styled.div<{ isToday?: boolean }>`
  flex: 1;
  min-width: 120px;
  background-color: ${({ isToday, theme }) => 
    isToday 
      ? theme.mode === 'light'
        ? '#f5f2e8' /* Tono panna più chiaro per il giorno corrente */
        : theme.colors.background.primary + '60'
      : 'transparent'};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  border: ${({ isToday, theme }) => 
    isToday 
      ? `1px solid ${theme.colors.accent.primary}30`
      : 'none'};
  position: relative;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ isToday, theme }) => 
      isToday 
        ? theme.mode === 'light'
          ? '#f0ece0' /* Hover più intenso per il giorno corrente */
          : theme.colors.background.primary + '80'
        : theme.mode === 'light'
          ? '#f8f5eb' /* Hover leggero per altri giorni */
          : theme.colors.background.primary + '20'};
  }
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.mode === 'light' ? 'rgba(149, 157, 165, 0.1) 0px 1px 3px 0px' : 'none'};
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &:last-child {
    margin-right: 0;
  }
`;

export const TimeCell = styled.div<{ isCurrentTime?: boolean }>`
  height: 60px;
  border-bottom: 1px dashed ${({ theme }) => 
    theme.mode === 'light'
      ? 'rgba(149, 157, 165, 0.2)' /* Colore GitHub light */
      : 'rgba(110, 118, 129, 0.4)' /* Colore GitHub dark */
  };
  position: relative;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => 
      theme.mode === 'light'
        ? 'rgba(245, 242, 232, 0.5)' /* Tono panna semitrasparente */
        : 'rgba(22, 27, 34, 0.3)' /* Tono scuro semitrasparente */
    };
  }
  
  ${({ isCurrentTime, theme }) => isCurrentTime && `
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background-color: ${theme.colors.primary};
      z-index: 1;
    }
  `}
`;

export const Event = styled.div<{ 
  $top: string;
  $height: string;
  $left?: string;
  $width?: string;
  $color: string;
}>`
  position: absolute;
  top: ${({ $top }) => $top};
  height: ${({ $height }) => $height};
  left: ${({ $left }) => $left || '10%'};
  width: ${({ $width }) => $width || '80%'};
  background-color: ${({ $color }) => $color};
  color: white;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 0.875rem;
  overflow: hidden;
  cursor: pointer;
  z-index: 5;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
  display: block;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    transform: translateY(-2px) scale(1.02);
  }
  
  .event-time {
    font-size: 0.8rem;
    font-weight: 600;
    opacity: 0.95;
    margin-bottom: 2px;
  }
  
  .event-title {
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: 0.01em;
  }
`;

export const CurrentTimeLine = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 3;
  box-shadow: 0 0 8px ${({ theme }) => `${theme.colors.primary}80`};
  
  &::before {
    content: '';
    position: absolute;
    left: -5px;
    top: -4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 6px ${({ theme }) => `${theme.colors.primary}CC`};
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 ${({ theme }) => `${theme.colors.primary}80`};
    }
    70% {
      box-shadow: 0 0 0 6px ${({ theme }) => `${theme.colors.primary}00`};
    }
    100% {
      box-shadow: 0 0 0 0 ${({ theme }) => `${theme.colors.primary}00`};
    }
  }
`;

export const NoEventsMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.text.muted};
  text-align: center;
  
  svg {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    opacity: 0.5;
  }
  
  p {
    margin: 0;
    font-size: 0.875rem;
  }
`;

import styled from 'styled-components';

export const DayViewContainer = styled.div`
  display: flex;
  height: calc(100vh - 200px);
  min-height: 600px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  margin: 0.5rem;
  padding: 0.75rem;
`;

export const TimeColumn = styled.div`
  width: 70px;
  overflow-y: auto;
  background-color: ${({ theme }) => 
    theme.mode === 'light' 
      ? 'transparent' 
      : theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  margin-right: 12px;
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

export const TimeSlot = styled.div`
  height: 60px;
  padding: 4px 10px;
  text-align: right;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  position: relative;
  display: flex;
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

export const DayContent = styled.div`
  flex: 1;
  overflow-y: auto;
  position: relative;
  background-color: ${({ theme }) => 
    theme.mode === 'light' 
      ? '#fffdf7' /* Tono panna/crema per light mode come richiesto */
      : theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  box-shadow: ${({ theme }) => 
    theme.mode === 'light' 
      ? 'rgba(149, 157, 165, 0.1) 0px 1px 3px 0px' 
      : 'none'};
  transition: all 0.3s ease;
  
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
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => 
      theme.mode === 'light' 
        ? 'rgba(149, 157, 165, 0.15) 0px 3px 6px 0px' 
        : 'rgba(0, 0, 0, 0.2) 0px 2px 5px 0px'};
  }
`;

export const TimeCell = styled.div<{ isCurrentTime?: boolean }>`
  height: 60px;
  border-bottom: 1px dashed ${({ theme }) => 
    theme.mode === 'light'
      ? theme.colors.border.primary + '30'
      : theme.colors.border.default + '70'};
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
  $color: string;
}>`
  position: absolute;
  top: ${({ $top }) => $top};
  height: ${({ $height }) => $height};
  left: 16px;
  right: 16px;
  background-color: ${({ $color }) => `${$color}CC`};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 10px 14px;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  overflow: hidden;
  cursor: pointer;
  z-index: 2;
  box-shadow: ${({ $color, theme }) => 
    theme.mode === 'light'
      ? `0 2px 8px ${$color}40`
      : `0 3px 10px ${$color}60`};
  border-left: 3px solid ${({ $color }) => $color};
  backdrop-filter: blur(4px);
  transition: all 0.25s ease;
  
  &:hover {
    box-shadow: 0 4px 12px ${({ $color }) => `${$color}60`};
    transform: translateY(-2px) scale(1.01);
  }
  
  .event-time {
    font-size: 0.8rem;
    font-weight: 600;
    opacity: 0.95;
    margin-bottom: 6px;
  }
  
  .event-title {
    font-weight: 500;
    margin-bottom: 6px;
    letter-spacing: 0.01em;
  }
  
  .event-description {
    font-size: 0.8rem;
    opacity: 0.9;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.4;
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

export const DayHeader = styled.div`
  padding: 16px 20px;
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  border-bottom: 1px solid ${({ theme }) => `${theme.colors.border.primary}30`};
  background-color: ${({ theme }) => `${theme.colors.background.primary}`};
  backdrop-filter: blur(4px);
  letter-spacing: 0.01em;
  position: sticky;
  top: 0;
  z-index: 4;
`;

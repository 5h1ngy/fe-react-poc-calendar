import styled from 'styled-components';

export const DayViewContainer = styled.div`
  display: flex;
  height: calc(100vh - 200px);
  min-height: 600px;
  overflow: hidden;
`;

export const TimeColumn = styled.div`
  width: 60px;
  border-right: 1px solid ${({ theme }) => theme.colors.border.primary};
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const TimeSlot = styled.div`
  height: 60px;
  padding: 2px 8px;
  text-align: right;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.75rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.border.light};
  }
`;

export const DayContent = styled.div`
  flex: 1;
  overflow-y: auto;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const TimeCell = styled.div<{ isCurrentTime?: boolean }>`
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  position: relative;
  
  ${({ isCurrentTime, theme }) => isCurrentTime && `
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background-color: ${theme.colors.accent.primary};
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
  left: 10px;
  right: 10px;
  background-color: ${({ $color }) => $color || '#1890ff'};
  color: white;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 0.875rem;
  overflow: hidden;
  cursor: pointer;
  z-index: 2;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.2s, transform 0.1s;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-1px);
  }
  
  .event-time {
    font-size: 0.75rem;
    opacity: 0.9;
    margin-bottom: 4px;
  }
  
  .event-title {
    font-weight: 500;
    margin-bottom: 4px;
  }
  
  .event-description {
    font-size: 0.75rem;
    opacity: 0.9;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const CurrentTimeLine = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.accent.primary};
  z-index: 3;
  
  &::before {
    content: '';
    position: absolute;
    left: -5px;
    top: -4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.accent.primary};
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
  padding: 10px 16px;
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

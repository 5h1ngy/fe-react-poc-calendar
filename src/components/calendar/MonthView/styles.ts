import styled from 'styled-components';

export const MonthViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 200px);
  min-height: 600px;
`;

export const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  flex: 1;
  overflow: hidden;
  border-top: 1px solid ${({ theme }) => theme.colors.border.primary};
`;

export const DayCell = styled.div<{ 
  isCurrentMonth?: boolean; 
  isToday?: boolean; 
  isWeekend?: boolean;
}>`
  position: relative;
  border-right: 1px solid ${({ theme }) => theme.colors.border.light};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  padding: 8px;
  overflow: hidden;
  height: 100%;
  background-color: ${({ isCurrentMonth, isToday, isWeekend, theme }) => {
    if (isToday) return theme.colors.background.highlight;
    if (!isCurrentMonth) return theme.colors.background.disabled;
    if (isWeekend) return theme.colors.background.secondary;
    return theme.colors.background.primary;
  }};
  
  &:hover {
    background-color: ${({ theme, isCurrentMonth }) => 
      isCurrentMonth ? theme.colors.background.hover : theme.colors.background.disabled};
  }
`;

export const DayHeader = styled.div<{ isCurrentMonth?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;

export const DayNumber = styled.span<{ isToday?: boolean; isCurrentMonth?: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-weight: ${({ isToday }) => isToday ? 'bold' : 'normal'};
  background-color: ${({ isToday, theme }) => isToday ? theme.colors.accent.primary : 'transparent'};
  color: ${({ isToday, isCurrentMonth, theme }) => {
    if (isToday) return theme.colors.text.inverted;
    if (!isCurrentMonth) return theme.colors.text.muted;
    return theme.colors.text.primary;
  }};
`;

export const AddButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.accent.primary};
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent.primaryLight};
  }
`;

export const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;
`;

export const EventItem = styled.div<{ $color: string }>`
  background-color: ${({ $color }) => $color};
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.75rem;
  margin-bottom: 2px;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const MoreEventsButton = styled.button`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.7rem;
  padding: 2px 4px;
  border-radius: 4px;
  margin-top: 2px;
  cursor: pointer;
  text-align: center;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.background.hover};
  }
`;

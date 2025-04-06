import styled from 'styled-components';

export const MonthViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 200px);
  min-height: 600px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  background: ${({ theme }) => theme.colors.background.secondary};
  margin: 0.5rem;
`;

export const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  flex: 1;
  overflow: hidden;
  border-top: 1px solid ${({ theme }) => `${theme.colors.border.primary}20`};
  background: ${({ theme }) => theme.colors.background.secondary};
`;

export const DayHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-bottom: 1px solid ${({ theme }) => `${theme.colors.border.primary}30`};
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const DayHeaderItem = styled.div<{ isWeekend?: boolean }>`
  padding: 12px 0;
  text-align: center;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({ isWeekend, theme }) => 
    isWeekend ? theme.colors.text.secondary : theme.colors.text.primary
  };
  border-right: 1px solid ${({ theme }) => `${theme.colors.border.primary}20`};
  
  &:last-child {
    border-right: none;
  }
`;

export const DayCell = styled.div<{ 
  isCurrentMonth?: boolean; 
  isToday?: boolean; 
  isWeekend?: boolean;
}>`
  position: relative;
  border-right: 0.5px solid ${({ theme }) => `${theme.colors.border.primary}15`};
  border-bottom: 0.5px solid ${({ theme }) => `${theme.colors.border.primary}15`};
  padding: 8px 10px;
  overflow: hidden;
  height: 100%;
  transition: all 0.15s ease-in-out;
  background-color: ${({ isCurrentMonth, isToday, isWeekend, theme }) => {
    if (isToday) return `${theme.colors.primary}15`;
    if (!isCurrentMonth) return `${theme.colors.background.primary}80`;
    if (isWeekend) return `${theme.colors.background.primary}90`;
    return theme.colors.background.primary;
  }};
  
  &:hover {
    background-color: ${({ theme, isCurrentMonth }) => 
      isCurrentMonth ? `${theme.colors.primary}10` : `${theme.colors.background.primary}60`};
    box-shadow: inset 0 0 0 1px ${({ theme }) => `${theme.colors.border.primary}25`};
    transform: scale(0.98);
  }
  
  &:last-child {
    border-right: none;
  }
`;

export const DayNumber = styled.div<{ isToday?: boolean; isCurrentMonth?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  font-size: 0.875rem;
  font-weight: ${({ isToday }) => (isToday ? '600' : '400')};
  color: ${({ isToday, isCurrentMonth, theme }) => {
    if (isToday) return theme.colors.primary;
    if (!isCurrentMonth) return theme.colors.text.disabled;
    return theme.colors.text.primary;
  }};
  border-radius: 50%;
  background-color: ${({ isToday, theme }) => 
    isToday ? `${theme.colors.primary}20` : 'transparent'
  };
  margin-bottom: 4px;
`;

export const AddButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-size: 1rem;
  padding: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  opacity: 0.7;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}15`};
    transform: scale(1.1);
    opacity: 1;
  }
`;

export const EventsList = styled.div`
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

export const EventItem = styled.div<{ $color?: string }>`
  background-color: ${({ $color }) => $color || '#1890ff'};
  color: white;
  font-size: 0.75rem;
  padding: 3px 8px;
  margin-bottom: 3px;
  border-radius: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
  display: block;
  width: 100%;
  z-index: 1;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
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
    background-color: ${({ theme }) => `${theme.colors.primary}08`};
  }
`;

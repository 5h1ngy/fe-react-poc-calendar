import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DateDisplay = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ViewSelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const ScaleSelectorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 1rem;

  select {
    border: 1px solid ${({ theme }) => theme.colors.border.primary};
    border-radius: 4px;
    padding: 0.25rem 0.5rem;
    background-color: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  label {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 0.875rem;
  }
`;

export const WeekHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
`;

export const DayHeaderItem = styled.div<{ isToday?: boolean }>`
  padding: 0.5rem;
  text-align: center;
  border-right: 1px solid ${({ theme }) => theme.colors.border.light};
  
  ${({ isToday, theme }) => isToday && `
    background-color: ${theme.colors.accent.primaryLight};
    font-weight: bold;
  `}

  .day-name {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  .day-number {
    font-size: 1.25rem;
    font-weight: 500;
    margin-top: 0.25rem;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  .add-event-btn {
    margin-top: 0.25rem;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.accent.primary};
    cursor: pointer;
    font-size: 1.25rem;
    
    &:hover {
      color: ${({ theme }) => theme.colors.accent.hover};
    }
  }
`;

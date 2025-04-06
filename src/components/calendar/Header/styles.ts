import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  margin: 0.5rem 0.5rem 0;
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DateDisplay = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  letter-spacing: -0.5px; /* Tipico stile GitHub per i titoli */
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
  margin: 0.5rem 0 0.75rem;
  position: relative;
`;

export const ScaleSelectorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 1rem;

  select {
    border: 1px solid ${({ theme }) => theme.colors.border.default};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    padding: 0.25rem 0.5rem;
    background-color: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    transition: all 0.2s ease;
    
    &:hover {
      border-color: ${({ theme }) => theme.colors.border.primary};
    }
    
    &:focus {
      border-color: ${({ theme }) => theme.colors.accent.primary};
      outline: none;
      box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.accent.primary}30`};
    }
  }

  label {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
`;

export const WeekHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  margin-top: 1rem;
  padding: 0 0.25rem;
`;

export const DayHeaderItem = styled.div<{ isToday?: boolean }>`
  padding: 0.75rem 0.5rem;
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  box-shadow: ${({ theme }) => theme.shadows.xs};
  transition: all 0.2s ease;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  
  ${({ isToday, theme }) => isToday && `
    background-color: ${theme.colors.accent.primary}15;
    border-color: ${theme.colors.accent.primary};
    font-weight: ${theme.typography.fontWeight.semibold};
    color: ${theme.colors.accent.primary};
  `}

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.primary};
    background-color: ${({ theme }) => theme.colors.backgroundHover};
  }

  .day-name {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: 4px;
    font-weight: 500;
  }

  .day-number {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 6px 0;
    color: ${({ theme, isToday }) => isToday ? theme.colors.primary : theme.colors.text.primary};
  }

  .add-event-btn {
    margin-top: 0.5rem;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    font-size: 1.2rem;
    padding: 4px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    
    &:hover {
      background-color: ${({ theme }) => `${theme.colors.primary}15`};
      transform: scale(1.1);
    }
  }
`;

import styled from 'styled-components';

export const MonthViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 200px);
  min-height: 600px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  background: ${({ theme }) => theme.colors.surface};
  margin: 0.5rem;
  transition: all 0.3s ease;
`;

export const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  flex: 1;
  overflow: hidden;
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
  background: ${({ theme }) => theme.mode === 'light' ? '#f8f6f1' : theme.colors.background.secondary}; /* Toni panna per light mode come richiesto */
  gap: 1px; /* Spazio sottile tra le celle, stile Ant Design */
`;

export const DayHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: ${({ theme }) => 
    theme.mode === 'light'
      ? '#fffdf7' /* Tono panna/crema per light mode come richiesto */
      : theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.sm};
  border-top-right-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 8px 0; /* Spaziatura in stile Ant Design */
`;

export const DayHeaderItem = styled.div<{ isWeekend?: boolean }>`
  padding: 8px 0;
  text-align: center;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ isWeekend, theme }) => 
    isWeekend ? theme.colors.accent.primary : theme.colors.text.primary
  }; /* Accento colorato per i weekend, stile Ant Design */
  transition: all 0.3s ease;
  
  &:last-child {
    border-right: none;
  }
  
  /* Effetto hover in stile Ant Design */
  &:hover {
    color: ${({ theme }) => theme.colors.accent.primary};
  }
`;

export const DayCell = styled.div<{ 
  isCurrentMonth?: boolean; 
  isToday?: boolean; 
  isWeekend?: boolean;
}>`
  position: relative;
  border-right: 1px solid ${({ theme }) => theme.colors.border.default};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
  padding: 8px 10px;
  overflow: hidden;
  height: 100%;
  transition: all 0.2s ease;
  background-color: ${({ isCurrentMonth, isToday, isWeekend, theme }) => {
    // Colori in base alla modalità (crema/panna per light, molto scuri per dark)
    if (isToday) return theme.mode === 'light' 
      ? `${theme.colors.accent.primary}15` 
      : `${theme.colors.accent.primary}20`;
    if (!isCurrentMonth) return theme.mode === 'light' 
      ? '#f5f2e8' /* Tono panna più chiaro per mesi non correnti */ 
      : '#121418' /* Molto scuro per dark mode */;
    if (isWeekend) return theme.mode === 'light' 
      ? '#f8f5eb' /* Tono panna leggermente diverso per weekend */ 
      : '#141619' /* Variazione scura per weekend */;
    return theme.mode === 'light' 
      ? '#fffdf7' /* Tono panna/crema di base */ 
      : '#161b22' /* Tono scuro base (GitHub dark) */;
  }};
  
  &:hover {
    background-color: ${({ theme, isCurrentMonth }) => 
      isCurrentMonth 
        ? theme.mode === 'light' 
          ? '#f0ece0' /* Hover panna più intenso */ 
          : '#1d2128' /* Hover scuro più intenso */
        : theme.mode === 'light' 
          ? '#f0ece080' /* Hover più leggero per mesi non correnti */ 
          : '#1a1e2480' /* Hover più leggero per dark */};
    box-shadow: ${({ theme }) => theme.mode === 'light' 
      ? 'rgba(149, 157, 165, 0.1) 0px 1px 3px 0px'
      : 'none'};
  }
  
  &:last-child {
    border-right: none;
  }
`;

export const DayNumber = styled.div<{ isToday?: boolean; isCurrentMonth?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ isToday, theme }) => 
    isToday 
      ? theme.typography.fontWeight.semibold 
      : theme.typography.fontWeight.regular
  };
  color: ${({ isToday, isCurrentMonth, theme }) => {
    if (isToday) return theme.colors.accent.primary; /* Colore d'accento per today */
    if (!isCurrentMonth) return theme.colors.text.muted; /* Colore attenuato per mesi non correnti */
    return theme.colors.text.primary; /* Colore standard */
  }};
  border-radius: 50%;
  margin-bottom: 4px;
  transition: all 0.2s ease;
  
  /* Stile Ant Design per il numero del giorno corrente */
  ${({ isToday, theme }) => isToday && `
    background-color: ${theme.mode === 'light' 
      ? theme.colors.accent.primary + '15'
      : theme.colors.accent.primary + '25'
    };
    border: 1px solid ${theme.colors.accent.primary};
    transform: scale(1.05);
  `}
  
  /* Hover in stile Ant Design */
  &:hover {
    background-color: ${({ theme, isToday }) => 
      isToday
        ? 'transparent'
        : theme.mode === 'light'
          ? theme.colors.accent.primary + '10'
          : theme.colors.accent.primary + '15'
    };
  }
`;

export const AddButton = styled.button`
  background: transparent;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.accent.primary};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  opacity: 0.8;
  transition: all 0.2s ease;
  position: absolute;
  top: 5px;
  right: 5px;
  
  &:hover {
    background-color: ${({ theme }) => 
      theme.mode === 'light' 
        ? theme.colors.accent.primary + '15' 
        : theme.colors.accent.primary + '25'};
    border-color: ${({ theme }) => theme.colors.accent.primary + '50'};
    opacity: 1;
    transform: rotate(90deg); /* Effetto di rotazione in stile Ant Design */
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent.primary + '30'};
  }
`;

export const EventsList = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  transition: all 0.2s ease;
`;

export const EventItem = styled.div<{ $color?: string }>`
  background-color: ${({ $color, theme }) => $color || theme.colors.accent.primary};
  color: white;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  padding: 4px 10px;
  margin-bottom: 3px;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  box-shadow: ${({ theme }) => theme.mode === 'light' ? '0 1px 3px rgba(0, 0, 0, 0.12)' : 'none'};
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  width: calc(100% - 4px);
  z-index: 1;
  position: relative;
  border-left: 3px solid ${({ $color, theme }) => $color || theme.colors.accent.primary};
  opacity: 0.92;
  
  /* Stile GitHub con tocco Ant Design */
  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: white;
    margin-right: 5px;
    display: inline-block;
    opacity: 0.8;
  }
  
  &:hover {
    transform: translateY(-1px) scale(1.01);
    box-shadow: ${({ theme }) => theme.mode === 'light' ? '0 3px 6px rgba(0, 0, 0, 0.16)' : '0 2px 5px rgba(0, 0, 0, 0.25)'};
    opacity: 1;
  }
  
  &:active {
    transform: translateY(0) scale(0.99);
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

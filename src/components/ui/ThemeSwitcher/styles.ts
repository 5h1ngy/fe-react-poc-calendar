import styled from 'styled-components';

export const StyledThemeSwitcher = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  display: inline-block;
`;

export const SwitchTrack = styled.div<{ $isDark: boolean }>`
  width: 56px;
  height: 28px;
  background-color: ${({ theme, $isDark }) => 
    $isDark ? theme.colors.surface : theme.colors.background.secondary};
  border-radius: 14px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  transition: all 0.3s ease;
`;

export const SwitchThumb = styled.div<{ $isDark: boolean }>`
  position: absolute;
  left: ${({ $isDark }) => $isDark ? '30px' : '4px'};
  width: 20px;
  height: 20px;
  background-color: ${({ theme, $isDark }) => 
    $isDark ? theme.colors.text.primary : theme.colors.accent.primary};
  border-radius: 50%;
  transition: left 0.3s, background-color 0.3s;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const IconContainer = styled.div<{ $position: 'left' | 'right' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, $position }) => 
    $position === 'left' 
      ? theme.colors.accent.primary
      : theme.mode === 'dark' 
        ? theme.colors.text.primary
        : theme.colors.text.secondary};
  z-index: 1;
  transition: color 0.3s ease;
`;

import styled, { css } from 'styled-components';
import { CardShadow } from './types';

export const StyledCard = styled.div<{
  $hoverable: boolean;
  $bordered: boolean;
  $shadow: CardShadow;
}>`
  background-color: ${({ theme }) => 
    theme.mode === 'light' 
      ? '#fffdf7' /* Tono panna/crema per light mode come richiesto */
      : theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.sm}; /* GitHub usa bordi più arrotondati */
  overflow: hidden;
  transition: all 0.2s ease;
  
  ${({ $bordered, theme }) => $bordered && css`
    border: 1px solid ${theme.colors.border.default};
  `}
  
  ${({ $shadow, theme }) => {
    switch ($shadow) {
      case 'sm':
        return css`box-shadow: ${theme.shadows.sm};`;
      case 'md':
        return css`box-shadow: ${theme.shadows.md};`;
      case 'lg':
        return css`box-shadow: ${theme.shadows.lg};`;
      case 'none':
      default:
        return css``;
    }
  }}
  
  ${({ $hoverable }) => $hoverable && css`
    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.md};
      border-color: ${({ theme }) => theme.mode === 'dark' ? 
        'rgba(255,255,255,0.1)' : 
        theme.colors.accent.primary + '30'};
      transform: translateY(-2px); /* Movimento più sottile come in GitHub */
      background-color: ${({ theme }) => 
        theme.mode === 'light' 
          ? '#f8f6f1' /* Tono panna più chiaro all'hover */
          : theme.colors.background.secondary};
    }
  `}
`;

export const StyledCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
`;

export const StyledCardTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin: 0;
`;

export const StyledCardExtra = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledCardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
`;

export const StyledCardFooter = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
`;

import styled, { css } from 'styled-components';
import type { InputSize } from './types';

export const StyledInputWrapper = styled.div<{ $fullWidth: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ $fullWidth }) => $fullWidth ? '100%' : 'auto'};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

// Get size styles for the input container
const getInputSizeStyles = (size: InputSize) => {
  switch (size) {
    case 'small':
      return css`
        height: 32px;
      `;
    case 'large':
      return css`
        height: 48px;
      `;
    case 'medium':
    default:
      return css`
        height: 40px;
      `;
  }
};

export const StyledInputContainer = styled.div<{
  $size: InputSize;
  $hasError: boolean;
  $disabled: boolean;
}>`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => 
    theme.mode === 'light' 
      ? '#f8f6f1' /* Tono panna più chiaro per light mode */
      : theme.colors.background.secondary};
  border: 1px solid ${({ theme, $hasError }) => 
    $hasError ? theme.colors.error : theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.sm}; /* In linea con lo stile GitHub */
  width: 100%;
  transition: all 0.2s ease;
  box-shadow: ${({ theme }) => 
    theme.mode === 'light' 
      ? 'inset 0 1px 2px rgba(27, 31, 35, 0.05)' /* Ombra interna GitHub-style */
      : 'none'};
  
  ${({ $size }) => getInputSizeStyles($size)}
  
  &:hover:not(:focus-within):not([disabled]) {
    border-color: ${({ theme, $hasError }) => 
      $hasError ? theme.colors.error : theme.colors.border.primary};
    background-color: ${({ theme }) => 
      theme.mode === 'light' 
        ? '#fffdf7' /* Tono panna/crema più chiaro all'hover */
        : theme.colors.background.primary};
  }
  
  &:focus-within {
    border-color: ${({ theme, $hasError }) => 
      $hasError ? theme.colors.error : theme.colors.accent.primary};
    box-shadow: 0 0 0 2px ${({ theme, $hasError }) => 
      $hasError ? `${theme.colors.error}33` : `${theme.colors.accent.primary}30`};
    background-color: ${({ theme }) => 
      theme.mode === 'light' 
        ? '#ffffff' /* Bianco quando in focus */
        : theme.colors.background.secondary};
  }
  
  ${({ $disabled, theme }) =>
    $disabled &&
    css`
      background-color: ${theme.mode === 'light' ? '#f2f2f2' : '#22272e'};
      border-color: ${theme.colors.border.default};
      cursor: not-allowed;
      opacity: 0.6;
      
      &:focus-within {
        border-color: ${theme.colors.border.default};
        box-shadow: none;
      }
      
      /* Stile Ant Design per elementi disabilitati */
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${theme.mode === 'light' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.1)'};
        pointer-events: none;
      }
    `}
`;

export const StyledInput = styled.input<{
  $hasPrefix: boolean;
  $hasSuffix: boolean;
}>`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  padding-left: ${({ theme, $hasPrefix }) => $hasPrefix ? '0' : theme.spacing.sm};
  padding-right: ${({ theme, $hasSuffix }) => $hasSuffix ? '0' : theme.spacing.sm};
  outline: none;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.components.input.placeholder};
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`;

export const StyledPrefixIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: ${({ theme }) => theme.spacing.sm};
  padding-right: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const StyledSuffixIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: ${({ theme }) => theme.spacing.xs};
  padding-right: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const StyledError = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.error};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.85)' : 'rgba(0, 0, 0, 0.7)'};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
  padding: 0 1rem;
  isolation: isolate;
  contain: layout;
  will-change: transform;
  -webkit-transform: translate3d(0, 0, 0);
`;

export const ModalContainer = styled.div`
  background-color: ${({ theme }) => 
    theme.mode === 'light'
      ? '#fffdf7' /* Tono panna/crema per light mode come richiesto */
      : theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => 
    theme.mode === 'dark' 
      ? '0 12px 40px rgba(0, 0, 0, 0.5)' 
      : '0 12px 40px rgba(0, 0, 0, 0.25)'};
  width: 100%;
  max-width: 550px;
  overflow: hidden;
  animation: modalFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  isolation: isolate;
  backface-visibility: hidden;
  transform: translateZ(0);
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  opacity: 1 !important;
  -webkit-transform: translate3d(0, 0, 0);
  will-change: transform;
  contain: content;
  
  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(10px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;

export const ModalHeader = styled.div`
  padding: 1.5rem 1.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.primary};
  position: relative;
  z-index: 10;
  contain: content;
  -webkit-transform: translate3d(0, 0, 0);
  opacity: 1 !important;
  
  h2 {
    margin: 0;
    font-size: 1.375rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text.primary};
    letter-spacing: -0.01em;
  }
  
  button {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.text.secondary};
    cursor: pointer;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 50%;
    transition: all 0.2s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.text.primary};
      background-color: ${({ theme }) => theme.colors.background.secondary};
    }
  }
`;

export const ModalBody = styled.div`
  padding: 1.75rem;
  background-color: ${({ theme }) => theme.colors.background.primary};
  max-height: calc(85vh - 180px);
  overflow-y: auto;
  position: relative;
  z-index: 5;
  contain: content;
  -webkit-transform: translate3d(0, 0, 0);
  opacity: 1 !important;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.border.primary};
    border-radius: 6px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const ErrorMessage = styled.span`
  color: #f5222d;
  font-size: 0.75rem;
  margin-top: 0.375rem;
  display: block;
  font-weight: 500;
`;

export const FormGroup = styled.div`
  margin-bottom: 0;
  position: relative;
  
  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.625rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.primary};
    
    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  
  input, textarea, select {
    width: 100%;
    padding: 0.875rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.border.primary};
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1rem;
    transition: all 0.2s ease;
    
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 3px rgba(24, 144, 255, 0.1);
    }
    
    &::placeholder {
      color: ${({ theme }) => theme.colors.text.secondary};
      opacity: 0.7;
    }
  }
  
  textarea {
    min-height: 120px;
    resize: vertical;
    line-height: 1.5;
  }
`;

export const FormRow = styled.div`
  display: flex;
  gap: 1rem;
  
  ${FormGroup} {
    flex: 1;
  }
`;

export const ColorOptions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const ColorOption = styled.button<{ $color: string; $selected: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
  border: 2px solid ${({ $selected, $color, theme }) => 
    $selected ? theme.colors.text.primary : 'transparent'};
  cursor: pointer;
  padding: 0;
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    transform: scale(1.15);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    box-shadow: ${({ $selected }) => $selected ? '0 0 0 2px white inset' : 'none'};
    opacity: ${({ $selected }) => $selected ? 1 : 0};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(24, 144, 255, 0.15);
  }
`;

export const ModalFooter = styled.div`
  padding: 1.25rem 1.75rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.primary};
  position: relative;
  z-index: 10;
  contain: content;
  -webkit-transform: translate3d(0, 0, 0);
  opacity: 1 !important;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const DurationSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  input {
    width: 80px;
  }
  
  span {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

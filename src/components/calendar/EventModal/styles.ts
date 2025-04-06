import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(2px);
`;

export const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 8px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  width: 100%;
  max-width: 500px;
  overflow: hidden;
  animation: modalFadeIn 0.3s ease-out;
  
  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ModalHeader = styled.div`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h2 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.primary};
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
    padding: 4px;
    
    &:hover {
      color: ${({ theme }) => theme.colors.text.primary};
    }
  }
`;

export const ModalBody = styled.div`
  padding: 1.5rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.25rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
  
  input, textarea, select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid ${({ theme }) => theme.colors.border.primary};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.accent.primary};
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent.primaryLight};
    }
  }
  
  textarea {
    min-height: 100px;
    resize: vertical;
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
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
  border: 2px solid ${({ $selected, $color, theme }) => 
    $selected ? theme.colors.text.primary : $color};
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const ModalFooter = styled.div`
  padding: 1rem 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const DurationSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  input {
    width: 70px;
  }
  
  span {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 0.875rem;
  }
`;

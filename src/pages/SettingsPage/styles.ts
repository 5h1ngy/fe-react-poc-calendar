import styled from 'styled-components';

export const SettingsPageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

export const SettingsHeader = styled.div`
  margin-bottom: 2rem;
  
  h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.text.primary};
  }
  
  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 1rem;
  }
`;

export const SettingsSection = styled.section`
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const SettingItem = styled.div`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SettingLabel = styled.div`
  margin-bottom: 0.5rem;
  
  h3 {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
    color: ${({ theme }) => theme.colors.text.primary};
  }
  
  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ImportInput = styled.input`
  display: none;
`;

export const ImportLabel = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.accent.primary};
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent.primary};
  }
  
  svg {
    margin-right: 0.5rem;
  }
`;

export const NotificationContainer = styled.div`
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  font-size: 0.875rem;
  
  &.success {
    background-color: rgba(82, 196, 26, 0.1);
    color: #52c41a;
    border: 1px solid rgba(82, 196, 26, 0.2);
  }
  
  &.error {
    background-color: rgba(245, 34, 45, 0.1);
    color: #f5222d;
    border: 1px solid rgba(245, 34, 45, 0.2);
  }
`;

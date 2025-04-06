import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => 
    theme.mode === 'light' 
      ? '#f8f6f1' /* Tono panna per light mode */
      : theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
  padding: ${({ theme }) => theme.spacing.xl} 0 ${({ theme }) => theme.spacing.md};
  transition: all 0.3s ease;
  margin-top: auto; /* Push footer to bottom */
  box-shadow: ${({ theme }) => 
    theme.mode === 'light' 
      ? '0 -1px 5px rgba(149, 157, 165, 0.1)' 
      : 'none'};
`;

export const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.sm};
    flex-direction: column;
  }
`;

export const FooterSection = styled.div`
  flex: 1;
  min-width: 250px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    max-width: 300px;
  }
`;

export const FooterLogo = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  a {
    color: ${({ theme }) => theme.colors.accent.primary};
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${({ theme }) => 
        theme.mode === 'light' 
          ? theme.colors.accent.secondary
          : theme.colors.accent.primary + '90'};
      text-decoration: none;
    }
  }
`;

export const FooterSectionTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  transition: color 0.2s;
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
  }
`;

export const ColorThemeSection = styled(FooterSection)`
  min-width: 280px;
`;

export const FooterCopyright = styled.div`
  text-align: center;
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  max-width: 1200px;
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.spacing.md};
  padding-right: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: ${({ theme }) => theme.spacing.sm};
    padding-right: ${({ theme }) => theme.spacing.sm};
  }
`;

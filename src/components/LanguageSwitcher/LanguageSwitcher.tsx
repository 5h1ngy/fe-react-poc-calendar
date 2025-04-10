import React, { useState, useRef, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaLanguage, FaChevronDown } from 'react-icons/fa';

const LanguageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.primary}; /* Riferimento corretto al colore del testo primario */
  cursor: pointer;
  padding: 8px;
  font-size: 1rem;
  gap: 6px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundHover};
  }

  svg {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text.primary}; /* Colore dell'icona che segue il tema */
  }
`;

const LanguageDropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  box-shadow: ${({ theme }) => theme.shadows.md};
  min-width: 150px;
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  margin-top: 8px;
`;

const LanguageOption = styled.button<{ isActive: boolean }>`
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px 15px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme, isActive }) => (isActive ? theme.colors.primary : theme.colors.text.primary)};
  font-weight: ${({ theme, isActive }) => (isActive ? theme.typography.fontWeight.semibold : theme.typography.fontWeight.regular)};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundHover};
  }
`;

const languages = [
  { code: 'en', name: 'English' },
  { code: 'it', name: 'Italiano' }
];

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  const handleOutsideClick = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, handleOutsideClick]);

  const getCurrentLanguageName = () => {
    const currentLang = languages.find(lang => lang.code === i18n.language);
    return currentLang ? currentLang.name : 'English';
  };

  return (
    <LanguageContainer ref={dropdownRef}>
      <LanguageButton onClick={toggleDropdown} aria-label={t('common.language')}>
        <FaLanguage />
        <span>{getCurrentLanguageName()}</span>
        <FaChevronDown style={{ fontSize: '0.8rem' }} />
      </LanguageButton>
      <LanguageDropdown isOpen={isOpen}>
        {languages.map((lang) => (
          <LanguageOption
            key={lang.code}
            isActive={i18n.language === lang.code}
            onClick={() => changeLanguage(lang.code)}
          >
            {lang.name}
          </LanguageOption>
        ))}
      </LanguageDropdown>
    </LanguageContainer>
  );
};

export default LanguageSwitcher;

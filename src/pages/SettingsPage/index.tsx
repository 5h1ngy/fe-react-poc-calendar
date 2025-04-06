import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SettingsPageContainer,
  SettingsHeader,
  SettingsSection,
  SectionTitle,
  SettingItem,
  SettingLabel,
  ButtonGroup,
  ImportInput,
  ImportLabel,
  NotificationContainer
} from './styles';
import { useTranslation } from 'react-i18next';
import Button from '@/components/ui/Button';
import { FiDownload, FiUpload, FiTrash2 } from 'react-icons/fi';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';
import ColorPaletteSelector from '@/components/ui/ColorPaletteSelector';
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';
import { selectEvents, importEvents, clearEvents } from '@/store/slices/calendarSlice';
import { exportEventsToJson, importEventsFromJson } from '@/utils/export/exportUtils';
import { RootState } from '@/store';

const SettingsPage: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [importStatus, setImportStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  
  const handleExport = () => {
    try {
      exportEventsToJson(events);
      setImportStatus({
        type: 'success',
        message: t('settings.exportSuccess')
      });
      
      // Reset notification after 5 seconds
      setTimeout(() => {
        setImportStatus({ type: null, message: '' });
      }, 5000);
    } catch (error) {
      setImportStatus({
        type: 'error',
        message: t('settings.exportError')
      });
    }
  };
  
  const handleImportClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  const handleImportFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    try {
      const importedEvents = await importEventsFromJson(file);
      dispatch(importEvents(importedEvents));
      
      setImportStatus({
        type: 'success',
        message: t('settings.importSuccess', { count: importedEvents.length })
      });
      
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      
      // Reset notification after 5 seconds
      setTimeout(() => {
        setImportStatus({ type: null, message: '' });
      }, 5000);
    } catch (error) {
      setImportStatus({
        type: 'error',
        message: t('settings.importError')
      });
    }
  };
  
  const handleClearEvents = () => {
    if (window.confirm(t('settings.confirmClear'))) {
      dispatch(clearEvents());
      setImportStatus({
        type: 'success',
        message: t('settings.clearSuccess')
      });
      
      // Reset notification after 5 seconds
      setTimeout(() => {
        setImportStatus({ type: null, message: '' });
      }, 5000);
    }
  };
  
  return (
    <SettingsPageContainer>
      <SettingsHeader>
        <h1>{t('settings.title')}</h1>
        <p>{t('settings.description')}</p>
      </SettingsHeader>
      
      <SettingsSection>
        <SectionTitle>{t('settings.appearance')}</SectionTitle>
        
        <SettingItem>
          <SettingLabel>
            <h3>{t('settings.theme')}</h3>
            <p>{t('settings.themeDescription')}</p>
          </SettingLabel>
          <ThemeSwitcher />
        </SettingItem>
        
        <SettingItem>
          <SettingLabel>
            <h3>{t('settings.colorPalette')}</h3>
            <p>{t('settings.colorPaletteDescription')}</p>
          </SettingLabel>
          <ColorPaletteSelector />
        </SettingItem>
        
        <SettingItem>
          <SettingLabel>
            <h3>{t('settings.language')}</h3>
            <p>{t('settings.languageDescription')}</p>
          </SettingLabel>
          <LanguageSwitcher />
        </SettingItem>
      </SettingsSection>
      
      <SettingsSection>
        <SectionTitle>{t('settings.dataManagement')}</SectionTitle>
        
        <SettingItem>
          <SettingLabel>
            <h3>{t('settings.importExport')}</h3>
            <p>{t('settings.importExportDescription')}</p>
          </SettingLabel>
          
          <ButtonGroup>
            <Button 
              onClick={handleExport} 
              icon={<FiDownload />}
              disabled={events.length === 0}
            >
              {t('settings.exportData')}
            </Button>
            
            <Button 
              onClick={handleImportClick} 
              icon={<FiUpload />}
              variant="secondary"
            >
              {t('settings.importData')}
            </Button>
            
            <ImportInput
              ref={fileInputRef}
              type="file"
              accept=".json"
              onChange={handleImportFile}
            />
            
            <Button 
              onClick={handleClearEvents} 
              icon={<FiTrash2 />}
              variant="primary"
              disabled={events.length === 0}
            >
              {t('settings.clearData')}
            </Button>
          </ButtonGroup>
          
          {importStatus.type && (
            <NotificationContainer className={importStatus.type}>
              {importStatus.message}
            </NotificationContainer>
          )}
        </SettingItem>
      </SettingsSection>
    </SettingsPageContainer>
  );
};

export default SettingsPage;

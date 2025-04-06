import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '@/components/ui/Button';
import { 
  NotFoundContainer, 
  NotFoundContent,
  NotFoundTitle,
  NotFoundDescription,
  NotFoundActions
} from './styles';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>{t('pages.notFound.title')} | {t('common.appName')}</title>
        <meta name="description" content={t('pages.notFound.message')} />
      </Helmet>
      
      <NotFoundContainer>
        <NotFoundContent>
          <NotFoundTitle>404</NotFoundTitle>
          <NotFoundDescription>
            {t('pages.notFound.message')}
          </NotFoundDescription>
          <NotFoundActions>
            <Button 
              variant="primary" 
              size="large" 
              onClick={() => navigate('/')}
            >
              {t('pages.notFound.backToHome')}
            </Button>
            <Button 
              variant="secondary" 
              size="large" 
              onClick={() => navigate(-1)}
            >
              {t('common.goBack', 'Go Back')}
            </Button>
          </NotFoundActions>
        </NotFoundContent>
      </NotFoundContainer>
    </>
  );
};

export default NotFoundPage;

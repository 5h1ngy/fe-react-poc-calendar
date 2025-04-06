import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { FiGithub, FiCalendar, FiCode, FiExternalLink } from 'react-icons/fi';
import { 
  AboutContainer, 
  AboutHeader, 
  AboutContent,
  AboutSection,
  TechStackGrid,
  TechItem,
  TechIcon,
  TechName,
  TeamSection,
  TeamGrid,
  TeamMember,
  MemberImage,
  MemberInfo,
  MemberName,
  MemberRole,
  MemberBio,
  SocialLinks,
  SocialLink,
  ProjectFeatures,
  FeatureItem
} from './styles';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  const techStack = [
    { name: 'React 18', icon: '⚛️' },
    { name: 'TypeScript', icon: '📝' },
    { name: 'Redux Toolkit', icon: '🔄' },
    { name: 'styled-components', icon: '💅' },
    { name: 'React Router DOM', icon: '🛣️' },
    { name: 'Vite', icon: '⚡' },
    { name: 'React Hook Form', icon: '📋' },
    { name: 'Zod', icon: '✓' },
    { name: 'Moment.js', icon: '🕒' },
    { name: 'Redux Persist', icon: '💾' },
  ];

  const features = [
    { name: 'Viste multiple (giorno, settimana, mese)', icon: <FiCalendar /> },
    { name: 'Tema chiaro e scuro personalizzabile', icon: <FiCode /> },
    { name: 'Persistenza dati', icon: <FiCode /> },
    { name: 'Import/Export eventi', icon: <FiCode /> },
    { name: 'UI moderna e responsive', icon: <FiCode /> },
    { name: 'Supporto multilingua', icon: <FiCode /> },
  ];

  const team = [
    {
      name: '5h1ngy',
      role: 'Autore Principale',
      bio: 'Sviluppatore frontend con particolare attenzione all\'architettura, performance e UX avanzata. Specializzato nell\'ecosistema React e nell\'implementazione di design system scalabili.',
      github: 'https://github.com/5h1ngy',
      avatar: 'https://avatars.githubusercontent.com/u/avatar1'
    },
    {
      name: 'Davide1786',
      role: 'Collaboratore & Fork Maintainer',
      bio: 'Frontend developer con focus su UI/UX e architettura moderna delle applicazioni web. Passione per le applicazioni React ottimizzate e responsive che offrono esperienze utente eccellenti.',
      github: 'https://github.com/Davide1786',
      avatar: 'https://avatars.githubusercontent.com/u/avatar2'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('pages.about.title')} | {t('common.appName')}</title>
        <meta name="description" content={t('meta.description')} />
      </Helmet>
      
      <AboutContainer>
        <AboutHeader>
          <h1>{t('common.appName')}</h1>
          <p>{t('pages.about.subtitle', 'Una moderna applicazione calendario con design 2025')}</p>
        </AboutHeader>
        
        <AboutContent>
          <AboutSection>
            <h2>{t('pages.about.projectOverview', 'Panoramica del Progetto')}</h2>
            <Card shadow="md">
              <p>
                fe-react-poc-calendar è un'applicazione moderna per la gestione degli eventi e degli appuntamenti con un'interfaccia utente ispirata agli standard UI/UX del 2025.
              </p>
              <p>
                Questo progetto è un refactoring profondo del progetto originale "Claendar", ricostruito completamente utilizzando il boilerplate bl-custom-fe-react come base, ma con significativi miglioramenti nell'architettura, UI/UX e funzionalità.
              </p>
              <p>
                L'applicazione offre multiple viste calendario (giorno, settimana, mese), gestione completa degli eventi, persistenza dei dati e funzionalità di import/export per il backup dei dati.
              </p>
            </Card>
          </AboutSection>
          
          <AboutSection>
            <h2>{t('pages.about.techStack', 'Tech Stack')}</h2>
            <Card shadow="sm">
              <TechStackGrid>
                {techStack.map((tech, index) => (
                  <TechItem key={index}>
                    <TechIcon>{tech.icon}</TechIcon>
                    <TechName>{tech.name}</TechName>
                  </TechItem>
                ))}
              </TechStackGrid>
            </Card>
          </AboutSection>
          
          <TeamSection>
            <h2>{t('pages.about.meetTheTeam', 'Contributors')}</h2>
            <TeamGrid>
              {team.map((member, index) => (
                <TeamMember key={index}>
                  <Card hoverable shadow="md">
                    <MemberImage src={member.avatar || `https://ui-avatars.com/api/?name=${member.name}&background=random`} alt={member.name} />
                    <MemberInfo>
                      <MemberName>{member.name}</MemberName>
                      <MemberRole>{member.role}</MemberRole>
                      <MemberBio>{member.bio}</MemberBio>
                      <SocialLinks>
                        <SocialLink href={member.github} target="_blank" rel="noopener noreferrer">
                          <FiGithub /> GitHub
                        </SocialLink>
                      </SocialLinks>
                    </MemberInfo>
                  </Card>
                </TeamMember>
              ))}
            </TeamGrid>
          </TeamSection>
          
          <AboutSection>
            <h2>{t('pages.about.features', 'Funzionalità')}</h2>
            <Card shadow="md">
              <ProjectFeatures>
                {features.map((feature, index) => (
                  <FeatureItem key={index}>
                    {feature.icon}
                    <span>{feature.name}</span>
                  </FeatureItem>
                ))}
              </ProjectFeatures>
            </Card>
          </AboutSection>
          
          <AboutSection>
            <h2>{t('pages.about.gettingStarted', 'Come Iniziare')}</h2>
            <Card shadow="md">
              <p>
                Pronto a utilizzare questa applicazione? Esplora le varie visualizzazioni (giorno, settimana, mese) e inizia ad aggiungere i tuoi eventi!
              </p>
              <p>
                Puoi personalizzare l'interfaccia nelle impostazioni, scegliendo tra tema chiaro e scuro, e selezionando la tua palette di colori preferita.
              </p>
              <Button 
                variant="primary" 
                icon={<FiCalendar />}
                onClick={() => window.location.href = '/'}
              >
                {t('pages.notFound.backToHome')}
              </Button>
            </Card>
          </AboutSection>
        </AboutContent>
      </AboutContainer>
    </>
  );
};

export default AboutPage;

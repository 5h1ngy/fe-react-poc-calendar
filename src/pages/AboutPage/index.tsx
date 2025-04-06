import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
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
  MemberRole
} from './styles';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Redux Toolkit', icon: '🔄' },
    { name: 'styled-components', icon: '💅' },
    { name: 'React Router', icon: '🔀' },
    { name: 'Vite', icon: '⚡' },
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Lead Developer',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'UI/UX Designer',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Sophia Rodriguez',
      role: 'Frontend Engineer',
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
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
          <h1>{t('pages.about.title')} {t('common.appName')}</h1>
          <p>{t('pages.home.description')}</p>
        </AboutHeader>
        
        <AboutContent>
          <AboutSection>
            <h2>{t('pages.about.projectOverview', 'Project Overview')}</h2>
            <Card shadow="sm">
              <p>
                bl-custom-fe-react is a comprehensive frontend boilerplate designed to accelerate React application development.
                It provides a solid foundation with a modern tech stack, emphasizing scalability, modularity, and developer experience.
              </p>
              <p>
                This boilerplate follows best practices for project structure, state management, styling, and component design.
                It includes a mock mode for development, theming support with dark and light modes, and a suite of pre-built UI components.
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
            <h2>{t('pages.about.meetTheTeam', 'Meet the Team')}</h2>
            <TeamGrid>
              {team.map((member, index) => (
                <TeamMember key={index}>
                  <Card hoverable shadow="sm">
                    <MemberImage src={member.image} alt={member.name} />
                    <MemberInfo>
                      <MemberName>{member.name}</MemberName>
                      <MemberRole>{member.role}</MemberRole>
                    </MemberInfo>
                  </Card>
                </TeamMember>
              ))}
            </TeamGrid>
          </TeamSection>
          
          <AboutSection>
            <h2>{t('pages.about.gettingStarted', 'Getting Started')}</h2>
            <Card shadow="sm">
              <p>
                Ready to use this boilerplate for your next project? Check out the documentation for installation 
                instructions and usage examples.
              </p>
              <Button 
                variant="primary" 
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

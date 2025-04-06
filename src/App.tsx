import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/store';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from '@/layouts/MainLayout';
import CalendarPage from '@/pages/CalendarPage';
import SettingsPage from '@/pages/SettingsPage';
import NotFoundPage from '@/pages/NotFoundPage';

// Import mock service only in development/mock mode
const isMockMode = import.meta.env.VITE_APP_MOCK_ENABLED === 'true';

const App: React.FC = () => {
  const appTitle = import.meta.env.VITE_APP_TITLE || 'fe-react-poc-calendar';
  
  useEffect(() => {
    // Initialize mock API in development mode
    if (isMockMode) {
      import('@/services/mock').then(({ initializeMockApi }) => {
        initializeMockApi();
      });
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <HelmetProvider>
            <Helmet>
              <title>{appTitle}</title>
              <meta name="description" content="A modern React calendar application with multiple views and event management" />
            </Helmet>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<CalendarPage />} />
                <Route path="settings" element={<SettingsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </HelmetProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

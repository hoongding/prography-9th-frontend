import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles.style';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <div>
          <h2>Let's get started!</h2>
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;

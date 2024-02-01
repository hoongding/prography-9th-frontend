import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles.style';

import Main from '@pages/Main';
import { FilterProvider } from '@context/filterContext';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <FilterProvider>
          <Container>
            <Main />
          </Container>
        </FilterProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  padding: 0px 20px;
`;

export default App;

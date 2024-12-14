import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { Button } from './components/Button';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { Router } from './Router';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      {/* <Button variant="primary" />
       <Button variant="secondary" />
       <Button variant="danger" />
       <Button variant="success" /> */}
      <GlobalStyle />
    </ThemeProvider>
  );
}

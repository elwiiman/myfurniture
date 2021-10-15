import React from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme } from '../theme_config';

const Theme = ({ children }: any) => (
    <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
);

export default Theme;

import React from 'react';
import { ThemeProvider } from 'styled-components';

export interface ThemeProps {
    children: React.ReactNode;
    theme: object;
}

const Theme = ({ children, theme }: any) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

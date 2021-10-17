import { useState } from 'react';
import { GlobalStyles } from './config/global.styles';
import Home from './pages/Home';
import Theme from './config/Theme';
import MainLayout from './Layouts/MainLayout/MainLayout';
import { lightTheme, darkTheme } from './config/theme_config';

function App() {
    const [theme, setTheme] = useState('light');
    const isDarkTheme = theme === 'dark';
    const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

    return (
        <>
            <Theme theme={isDarkTheme ? darkTheme : lightTheme}>
                <GlobalStyles />
                <MainLayout toggleTheme={toggleTheme} theme={theme}>
                    <Home />
                </MainLayout>
            </Theme>
        </>
    );
}

export default App;

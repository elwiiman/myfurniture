import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { ReactNode } from 'react';

export interface MainLayoutProps {
    children: ReactNode;
    toggleTheme: () => void;
    theme: string;
}

const MainLayout = ({ children, toggleTheme, theme }: MainLayoutProps) => {
    return (
        <>
            <NavBar
                doSearch={() => {}}
                toggleTheme={toggleTheme}
                theme={theme}
            />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;

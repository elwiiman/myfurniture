import { GlobalStyles } from './config/global.styles';
import Home from './pages/Home';
import Theme from './config/Theme';

function App() {
    return (
        <>
            <Theme>
                <GlobalStyles />
                <Home />
            </Theme>
        </>
    );
}

export default App;

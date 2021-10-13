// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        primary: {
            main: string;
            contrastText: string;
        };
        secondary: {
            main: string;
            contrastText: string;
        };
        error: {
            main: string;
            contrastText: string;
        };
        text: {
            primary: string;
            secondary: string;
            disabled: string;
            hint: string;
        };
        background: {
            main: string;
            contrast: string;
        };
    }
}

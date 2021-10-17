import { FunctionComponent } from 'react';
import Logo from '../Logo';
import Input from '../Common/Input';
import CartIcon from '../Icons/Cart';
import SearchIcon from '../Icons/Search';
import Sun from '../Icons/Sun';
import Moon from '../Icons/Moon';
import SimpleButton from '../SimpleButton';
import useInput from '../../hooks/useInput';

import {
    StyledNav,
    StyledForm,
    LogoContainer,
    MainContainer,
    CartContainer,
    CartContainerMobile,
} from './styled';

interface NavBarProps {
    doSearch: Function;
    toggleTheme: () => void;
    theme: string;
}

const NavBar: FunctionComponent<NavBarProps> = ({
    doSearch,
    toggleTheme,
    theme,
}) => {
    const search = useInput('');

    const submitSearch = (e: React.SyntheticEvent) => {
        e.preventDefault();
        doSearch(search.value);
        search.setValue('');
    };

    return (
        <StyledNav>
            <MainContainer>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <CartContainerMobile>
                    {theme === 'dark' ? (
                        <SimpleButton
                            label={<Sun />}
                            onClick={() => {
                                toggleTheme();
                            }}
                        />
                    ) : (
                        <SimpleButton
                            label={<Moon />}
                            onClick={() => {
                                toggleTheme();
                            }}
                        />
                    )}

                    <SimpleButton label={<CartIcon />} onClick={() => {}} />
                </CartContainerMobile>
            </MainContainer>

            <StyledForm onSubmit={submitSearch}>
                <Input {...search} />
                <SimpleButton
                    label={<SearchIcon />}
                    onClick={submitSearch}
                    enablePaperBackground
                />
            </StyledForm>

            <CartContainer>
                {theme === 'dark' ? (
                    <SimpleButton
                        label={<Sun />}
                        onClick={() => {
                            toggleTheme();
                        }}
                    />
                ) : (
                    <SimpleButton
                        label={<Moon />}
                        onClick={() => {
                            toggleTheme();
                        }}
                    />
                )}
                <SimpleButton label={<CartIcon />} onClick={() => {}} />
            </CartContainer>
        </StyledNav>
    );
};

export default NavBar;

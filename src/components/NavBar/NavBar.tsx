import { FunctionComponent } from 'react';
import Logo from '../Logo';
import Input from '../Common/Input';
import CartIcon from '../Icons/Cart';
import SearchIcon from '../Icons/Search';
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
}

const NavBar: FunctionComponent<NavBarProps> = ({ doSearch }) => {
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
                <SimpleButton label={<CartIcon />} onClick={() => {}} />
            </CartContainer>
        </StyledNav>
    );
};

export default NavBar;

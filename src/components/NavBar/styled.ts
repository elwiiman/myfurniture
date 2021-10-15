import styled from 'styled-components';
import { device } from '../../config/breakpoints';

export const StyledNav = styled.nav`
    background-color: ${(props) => props.theme.background.main};
    padding: 1em;
    display: block;

    @media ${device.laptop} {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const StyledForm = styled.form`
    width: 100%;
    margin-left: 0;
    margin-top: 0.25em;
    position: relative;

    & button {
        position: absolute;
        top: 10px;
        right: 10px;
    }

    @media ${device.laptop} {
        margin-left: 1em;
        margin-top: 0;
        width: 70%;
    }
`;

export const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media ${device.laptop} {
        display: block;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    background: ${(props) => props.theme.background.main};
    width: 10em;
`;

export const CartContainer = styled.div`
    display: none;
    padding: 1em;
    @media ${device.laptop} {
        display: block;
    }
`;

export const CartContainerMobile = styled.div`
    display: block;
    padding: 1em;
    @media ${device.laptop} {
        display: none;
    }
`;

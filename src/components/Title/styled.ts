import styled from 'styled-components';
import { fontTypes } from '../../config/baseFont';
import { device } from '../../config/breakpoints';

interface IStyledTitle {
    textColorType?: 'primary' | 'secondary';
}

export const StyledTitle = styled.h1<IStyledTitle>`
    color: ${(props) => {
        const textColorType = props.textColorType
            ? props.textColorType
            : 'primary';
        return props.theme.text[`${textColorType}`];
    }};

    ${fontTypes.titleMobile}
    @media ${device.tablet} {
        ${fontTypes.titleDesktop}
    }
`;

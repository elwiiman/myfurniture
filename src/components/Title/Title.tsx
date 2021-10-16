import { StyledTitle } from './styled';
interface TitleProps {
    text: string;
    textColorType?: 'primary' | 'secondary';
}

const Title = ({ text, textColorType }: TitleProps) => {
    return <StyledTitle textColorType={textColorType}>{text}</StyledTitle>;
};

export default Title;

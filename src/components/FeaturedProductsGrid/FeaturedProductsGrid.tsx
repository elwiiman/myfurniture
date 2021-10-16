import { ResultsEntity } from '../../types/featuredProducts';
import FeaturedProduct from '../FeaturedProduct';
import { OverallGridContainer, GridContainer, GridItem } from './styled';

interface FeaturedProductsProps {
    products: ResultsEntity[];
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
    return (
        <OverallGridContainer>
            <GridContainer>
                {products.map((product) => (
                    <GridItem>
                        <FeaturedProduct product={product} />
                    </GridItem>
                ))}
            </GridContainer>
        </OverallGridContainer>
    );
};

export default FeaturedProducts;

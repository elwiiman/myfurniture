import NavBar from '../../components/NavBar';
import Slider from '../../components/Slider';
import CategoriesGrid from '../../components/CategoriesGrid';
import Title from '../../components/Title';
import Footer from '../../components/Footer';
import Container from '../../components/Common/Container';

import { featuredBanners } from '../../components/Slider/__mocks__/featuredBannersData';
import { productCategories } from '../../mocks/productCategories';

const Home = () => {
    return (
        <>
            <NavBar
                doSearch={
                    // TODO: put aciton here
                    () => {}
                }
            />
            {/* TODO: subsititue by results from the API */}
            <Slider slides={featuredBanners.results} />

            <Container colorType="paper">
                <Title text="Product Categories" />
                <CategoriesGrid categories={productCategories.results} />
            </Container>

            <Footer />
        </>
    );
};

export default Home;

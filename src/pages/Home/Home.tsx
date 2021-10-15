import NavBar from '../../components/NavBar';
import Slider from '../../components/Slider';
import Footer from '../../components/Footer';

import { featuredBanners } from '../../components/Slider/__mocks__/featuredBannersData';

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
            <Footer />
        </>
    );
};

export default Home;

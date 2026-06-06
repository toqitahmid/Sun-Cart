import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Mainlayout = ({children}) => {
    return (
        <>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </>
    );
};

export default Mainlayout;
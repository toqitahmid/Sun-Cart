import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Mainlayout = ({children}) => {
    return (
        <div className='min-h-screen flex flex-col'>
        <Navbar></Navbar>
        <main className='flex-1'>
        {children}
        </main>
        <Footer></Footer>
        </div>
    );
};

export default Mainlayout;
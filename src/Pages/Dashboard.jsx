import '../App';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Navbar2 from '../components/navbar2';
import Topnav from '../components/topnav';
import Footer from '../components/footer';


function Dashboard() {
  return (
    <div className='App bg-[#FBFBFB]'>
      <Navbar />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default Dashboard;

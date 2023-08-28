import './Dashboard.css';
import myImage from './maze-logo-removebg-preview.png'; 
import { FaTimes} from "react-icons/fa";
import { MdDashboard ,MdOutlineReceiptLong} from 'react-icons/md';
import {BsFillPersonFill} from 'react-icons/bs'
const Dashboard = () => {
  return (
    <div className="container">
        <aside>
            <div className='toggle'>
                <div className='logo'>
                    <img src={myImage} alt="My-img" />
                    <h2>MaZe</h2>
                </div>
                <div className='close' id='close-btn'>
                    <FaTimes/>
                    
                </div>
            </div>

            <div className='sidebar'>
                
                <div className='material-icon-sharp'>
                    <a href='#'>
                        <MdDashboard/>
                        <h3>Dashboard</h3>
                    </a>
                </div>

               <div className='material-icon-sharp'>
                    <a href='#'>
                        <BsFillPersonFill/>
                        <h3>Users</h3>
                     </a>
                </div>

                <div className='material-icon-sharp'>
                    <a href='#'>
                        <MdOutlineReceiptLong/>
                        <h3>History</h3>
                     </a>
                </div>

            </div>
            
        </aside>
    </div> 
  );
}

export default Dashboard;
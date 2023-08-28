import './Dashboard.css';
import myImage from './maze-logo-removebg-preview.png'; 
import {FaTimes} from "react-icons/fa";
import {MdDashboard ,MdOutlineReceiptLong,MdPlaylistAddCheck,MdReport,MdLogout} from 'react-icons/md';
import {BsFillPersonFill} from 'react-icons/bs'
import {IoAnalytics} from 'react-icons/io5'
import {AiOutlineMail,AiFillSetting,AiOutlineUserAdd} from 'react-icons/ai'
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
                
                    <a href='#'>
                        <MdDashboard/>
                        <h3>Dashboard</h3>
                    </a>

                    <a href='#'>
                        <BsFillPersonFill/>
                        <h3>Users</h3>
                     </a>

                    <a href='#'>
                        <MdOutlineReceiptLong/>
                        <h3>History</h3>
                    </a>
                    <a href='#' className='active'>
                        <IoAnalytics/>
                        <h3>Analytics</h3>
                    </a>
                    <a href='#'>
                        <AiOutlineMail/>
                        <h3>Tickets</h3>
                    </a>
                    <a href='#'>
                        <MdPlaylistAddCheck/>
                        <h3>Sale list</h3>
                    </a>
                    <a href='#'>
                        <MdReport/>
                        <h3>Reports</h3>
                    </a>
                    <a href='#'>
                        <AiFillSetting/>
                        <h3>Settings</h3>
                    </a>
                    <a href='#'>
                        <AiOutlineUserAdd/>
                        <h3>New Login</h3>
                    </a>
                    <a href='#'>
                        <MdLogout/>
                        <h3>Logout</h3>
                    </a>
            </div>
            
        </aside>
        
    </div> 
  );
}

export default Dashboard;
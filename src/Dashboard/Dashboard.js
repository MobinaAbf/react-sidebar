import './Dashboard.css';
import myImage from './maze-logo_1_-removebg-preview.png'; 
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
                    <h2> <span className='danger'>prog</span></h2>
                </div>
                <div className='close' id='close-btn'>
                    <FaTimes className='material-icons-sharp'/>
                    
                </div>
            </div>
            

                            {/* sidebar */}
            <div className='sidebar'>
                
                    <a href='#'>
                        <span className='material-icons-sharp'>
                            <MdDashboard />
                        </span>
                        <h3>Dashboard</h3>
                    </a>

                    <a href='#'>
                        <span className='material-icons-sharp'>
                        <BsFillPersonFill />
                        </span>
                        <h3>Users</h3>
                     </a>

                    <a href='#'>
                        <span className='material-icons-sharp'>
                        <MdOutlineReceiptLong />
                        </span>
                        <h3>History</h3>
                    </a>
                    <a href='#' className='active'>
                        <span className='material-icons-sharp'>
                        <IoAnalytics />
                        </span>
                        <h3>Analytics</h3>
                    </a>
                    <a href='#'>
                        <span className='material-icons-sharp'>
                        <AiOutlineMail />
                        </span>
                        <h3>Tickets</h3>
                        <span class="message-count">6</span>
                    </a>
                    <a href='#'>
                        <span className='material-icons-sharp'>
                        <MdPlaylistAddCheck />
                        </span>
                        <h3>Sale list</h3>
                    </a>
                    <a href='#'>
                        <span className='material-icons-sharp'>
                        <MdReport />
                        </span>
                        <h3>Reports</h3>
                    </a>
                    <a href='#'>
                        <span className='material-icons-sharp'>                    
                        <AiFillSetting />
                        </span>
                        <h3>Settings</h3>
                    </a>
                    <a href='#'>
                        <span className='material-icons-sharp'>
                        <AiOutlineUserAdd />
                        </span>
                        <h3>New Login</h3>
                    </a>
                    <a href='#'>
                        <span className='material-icons-sharp'>
                         <MdLogout />
                        </span>
                        <h3>Logout</h3>
                    </a>
            </div>
            
        </aside>

                     {/* sidebar */}

         <main>
            <h1>Analytics</h1>
            <div className='analyse'>
                <div className='sales'>
                    <div className='status'>
                        <div className='info'>
                            <h3>Total Sales</h3>
                            <h1>$12,560</h1>
                        </div>
                        <div className='progress'>
                            <svg>
                                <circle></circle>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
         </main>

    </div> 
  );
}

export default Dashboard;
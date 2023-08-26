import './Dashboard.css';
import myImage from './maze-logo-removebg-preview.png'; // Import your image file


const Dashboard = () => {
  return (
    <div className="container">
        <aside>
            <div className='toggle'>
                <div className='logo'>
                <img src={myImage} alt="My-img" />
                <h2>Dashboard</h2>
                </div>
                <div className='close' id='close-btn'>

                </div>
            </div>
        </aside>
    </div> 
  );
}

export default Dashboard;
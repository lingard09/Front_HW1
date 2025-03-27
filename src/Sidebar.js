import { useState } from "react";
import "./Sidebar.css";
import avatar1 from './assets/avatar1.png';
import avatar2 from './assets/avatar2.png';
import avatar3 from './assets/avatar3.png';
import avatar5 from './assets/avatar5.png';
import avatar6 from './assets/avatar6.png';
import region from './assets/region.jpg';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className='profile-box'>
          <div className='profile-left-box'>
            <div className='profile-avatar-box'>
              <img className='profile-avatar' src={avatar2} width={45}/>
            </div>

          </div>
          <div className='profile-right-box'>
            <div className='welcoming'> welcome, <span>Mike</span></div>
            <div className='profile-btn-box'>
              <div className='profile-btn'>
                <i className='fa fa-envelope'></i>
              </div>
              <div className='profile-btn'>
                <i className='fa fa-user'></i>
              </div>
              <div className='profile-btn'>
                <i className='fa fa-cog'></i>
              </div>
            </div>
          </div>

        </div>
        <div className='banner'>
          <div className='banner-title'>
            Dashboard
          </div>
          <div className='banner-menus'>
            <div className='banner-menu' id='active-menu'>
              <a href='htm#'>
                <div className='banner-content'>
                <i class="fa-solid fa-users"></i>
                Overview
                </div>
              </a>
            </div>
            <div className='banner-menu'>
              <a href='htm#'>
                <div className='banner-content'>
                  <i class="fa-solid fa-eye"></i>
                  Views
                </div>          
              </a>    
            </div>
            <div className='banner-menu'>
              <a href='htm#'>
                <div className='banner-content'>
                  <i class="fa-solid fa-users"></i>
                  Traffic
                </div>
              </a>
            </div>
            <div className='banner-menu'>
              <a href='htm#'>
                <div className='banner-content'>
                  <i class="fa fa-bullseye"></i>
                  Geo
                </div>
              </a>
            </div>
            <div className='banner-menu'>
              <a href='htm#'>
                <div className='banner-content'>
                  <i class="fa fa-diamond"></i>
                  Orders
                </div>
              </a>
            </div>
            <div className='banner-menu'>
              <a href='htm#'>
                <div className='banner-content'>
                  <i class="fa fa-bell"></i>
                  News
                </div>
              </a>
            </div>
            <div className='banner-menu'>
              <a href='htm#'>
                <div className='banner-content'>
                  <i class="fa fa-bank"></i>
                  General
                </div>
              </a>
            </div>
            <div className='banner-menu'>
              <a href='htm#'>
                <div className='banner-content'>
                  <i class="fa fa-history"></i>
                  History
                </div>
              </a>
            </div>
          </div>
          <div className='banner-menu'>
              <a href='htm#'>
                <div className='banner-content'>
                  <i class="fa fa-cog"></i>
                  Settings
                </div>
              </a>
            </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

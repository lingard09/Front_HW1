import './App.css';
import avatar from './assets/avatar1.png'

function App() {
  return (
    <>
      <div className='header'>
        Logo
      </div>
      <div className='main'>
        <div className='sidebar'>
          <div className='profile-box'>
            <div className='profile-left-box'>
              <div className='profile-avatar-box'>
                <img className='profile-avatar' src={avatar} width={45}/>
              </div>

            </div>
            <div className='profile-right-box'>

              welcome, Mike
            </div>

          </div>
          <div className='banner'>
            <div className='banner-title'>
              Dashboard
            </div>
            <div className='banner-menus'>
              <div className='banner-menu' id='active-menu'>
                <div className='banner-content'>
                  Overview
                </div>
              </div>
              <div className='banner-menu'>
                <div className='banner-content'>
                  Views
                </div>              
              </div>
              <div className='banner-menu'>
                <div className='banner-content'>
                  Traffic
                </div>
              </div>
              <div className='banner-menu'>
                <div className='banner-content'>
                  Geo
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className='body'>
          My Dashboard
      <div className='footer'>
        <div className='footer-title'>
          FOOTER
        </div>
        <div className='footer-content'>
          powered by <a className='w3-css-link' href='https://www.w3schools.com/w3css/default.asp'>w3.css</a>
        </div>
      </div>    
        </div>
      </div>
    </>
  );
}

export default App;

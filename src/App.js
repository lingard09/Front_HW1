import './App.css';
import avatar from './assets/avatar1.png';
import region from './assets/region.jpg';

function App() {
  return (
    <div className='app'>
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
            </div>

          </div>
        </div>
        <div className='main-body'>
          <div className='body-title'>
            <i class="fa fa-dashboard"></i>
            My Dashboard
          </div>
          <div className='dashboard'>
            <div className='dash-icon' id='messages-box'>
              <i class="fa-solid fa-comment"></i>              
              Messages
            </div>
            <div className='dash-icon' id='views-box'>
              <i class="fa-solid fa-eye"></i>
              Views
            </div>
            <div className='dash-icon' id='shares-box'>
              <i class="fa-solid fa-share-nodes"></i>
              Shares
            </div>
            <div className='dash-icon' id='users-box'>
              <i class="fa-solid fa-users"></i>
              Users
            </div>
          </div>
          <div className='body-infos'>
            <div className='body-info'>
              <div className='body-info-title'>
                Regions
              </div>
              <div className='body-info-content'>
                <img src={region} width='90%'/>
              </div>
            </div>
            <div className='body-info'>
              <div className='body-info-title'>
                Feeds
              </div>   
              <div className='body-info-content'>
                <div className='body-feeds'>
                  <div className='body-feed white-cell'>
1
                  </div>
                  <div className='body-feed'>
                    2
                  </div>
                  <div className='body-feed white-cell'>
                    3
                  </div>
                  <div className='body-feed'>
4
                  </div>
                  <div className='body-feed white-cell'>
5
                  </div>
                  <div className='body-feed'>
                    6
                  </div>
                  <div className='body-feed white-cell'>
                    7
                  </div>
                </div>
              </div>         
            </div>
          </div>
          <div className='body-stats'>
            <div className='body-stats-title'>
              General Stats
            </div>
            <div className='body-stats-content'>
              <div className='body-stat'>
                <div className='body-stat-subtitle'>
                  New Visitors
                </div>
                <div className='body-stat-graph'>
                  <div className='body-stat-graph-active' id='visitors-graph'>
                    +25%
                  </div>
                </div>
              </div>
              <div className='body-stat'>
                <div className='body-stat-subtitle'>
                  New Users
                </div>
                <div className='body-stat-graph'>
                  <div className='body-stat-graph-active' id='users-graph'>
                    50%
                  </div>
                </div>
              </div>
              <div className='body-stat'>
                <div className='body-stat-subtitle'>
                  Bounce Rate
                </div>
                <div className='body-stat-graph'>
                  <div className='body-stat-graph-active' id='bounce-graph'>
                    75%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='body-countries'>
            <div className='body-countries-title'>
              Countries
            </div>
            <table className='body-countries-table'>
              <tr className='body-country white-cell'>
                <td>United States</td>
              </tr>
              <tr className='body-country'>
                <td>UK</td>
              </tr>
              <tr className='body-country white-cell'>
                <td>Russia</td>
              </tr>
              <tr className='body-country'>
                <td>Spain</td>
              </tr>
              <tr className='body-country white-cell'>
                <td>India</td>
              </tr>
              <tr className='body-country'>
                <td>France</td>
              </tr>
            </table>
            <button className='more-countries-btn'>
              More Countries
            </button>
          </div>
          <div className='recent-users'>
            <div className='recent-users-title'>
              Recent Users
            </div>
            <table className='recent-users-table'>
              <tr className='recent-user'>
                <td className='recent-user-name'>Mike</td>
              </tr>
              <tr className='recent-user'>
                <td className='recent-user-name'>Jill</td>
              </tr>
              <tr className='recent-user'>
                <td className='recent-user-name'>Jane</td>
              </tr>
            </table>
          </div>
          <div className='recent-comments'>
            <div className='recent-comments-title'>
              Recent Comments
            </div>
            <div className='recent-comment'>
              <div className='comment-avatar-box'>
                <img className='comment-avatar' src={avatar} width='40%' />
              </div>
              <div className='recent-comment-content'>
                <div className='comment-content-header'>
                  <div className='comment-author-name'>
                    John
                  </div>
                  <div className='comment-write-time'>
                    Sep 29, 2014, 9:12 PM
                  </div>
                </div>
                <div className='comment-content-body'>
                  Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
            <div className='recent-comment'>
              <div className='comment-avatar-box'>
                <img className='comment-avatar' src={avatar} width='40%' />
              </div>
              <div className='recent-comment-content'>
                <div className='comment-content-header'>
                  <div className='comment-author-name'>
                    Bo
                  </div>
                  <div className='comment-write-time'>
                    Sep 28, 2014, 10:15 PM
                  </div>
                </div>
                <div className='comment-content-body'>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
          </div>
          <div className='body-details'>
            <div className='details-content'>
              <div className='details-content-title'>
                Demographic
              </div>
              <div className='details-content-colorbar' id='green-bar'>
              </div>
              <div className='details-content-body'>
                <div className='details-content-list'>
                  Language
                </div>
                <div className='details-content-list'>
                  Country
                </div>
                <div className='details-content-list'>
                  City
                </div>
              </div>
            </div>
            <div className='details-content'>
              <div className='details-content-title'>
                System
              </div>
              <div className='details-content-colorbar' id='red-bar'>
              </div>
              <div className='details-content-body'>
                <div className='details-content-list'>
                  Browser
                </div>
                <div className='details-content-list'>
                  OS
                </div>
                <div className='details-content-list'>
                  More
                </div>
              </div>
            </div>
            <div className='details-content'>
              <div className='details-content-title'>
                Target
              </div>
              <div className='details-content-colorbar' id='orange-bar'>
              </div>
              <div className='details-content-body'>
                <div className='details-content-list'>
                  User
                </div>
                <div className='details-content-list'>
                  Active
                </div>
                <div className='details-content-list'>
                  Geo
                </div>
                <div className='details-content-list'>
                  Interests
                </div>
              </div>
            </div>
          </div>
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
    </div>
  );
}

export default App;

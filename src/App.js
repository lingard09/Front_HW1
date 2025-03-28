import './App.css';
import avatar1 from './assets/avatar1.png';
import avatar2 from './assets/avatar2.png';
import avatar3 from './assets/avatar3.png';
import avatar5 from './assets/avatar5.png';
import avatar6 from './assets/avatar6.png';
import region from './assets/region.jpg';

import Sidebar from './Sidebar';

function toggleSidebar() {
  document.querySelector(".sidebar").classList.toggle("active");
}

function App() {
  return (
    <div className='app'>
      <div className='header'>
        <span>Logo</span>
      </div>
      <div className='main'>
        <Sidebar />
        <div className='main-body'>
          <div className='body-title'>
            <i class="fa fa-dashboard"></i>
            My Dashboard
          </div>
          <div className='dashboard'>
            <div className='dash-icon' id='messages-box'>
              <span style={{paddingBottom: '14px'}}><i class="fa-solid fa-comment"></i><span style={{fontSize: '1.5rem'}}>52</span></span>
              <span style={{fontSize: '1.3rem'}}>Messages</span>
            </div>
            <div className='dash-icon' id='views-box'>
              <span style={{paddingBottom: '14px'}}><i class="fa-solid fa-eye"></i><span style={{fontSize: '1.5rem'}}>99</span></span>
              <span style={{fontSize: '1.3rem'}}>Views</span>
            </div>
            <div className='dash-icon' id='shares-box'>
              <span style={{paddingBottom: '14px'}}><i class="fa-solid fa-share-alt"></i><span style={{fontSize: '1.5rem'}}>23</span></span>
              <span style={{fontSize: '1.3rem'}}>Shares</span>
            </div>
            <div className='dash-icon' id='users-box'>
              <span style={{paddingBottom: '14px'}}><i class="fa-solid fa-users"></i><span style={{fontSize: '1.5rem'}}>50</span></span>
              <span style={{fontSize: '1.3rem'}}>Users</span>
            </div>
          </div>
          <div className='body-infos'>
            <div className='body-info' id='regions-box'>
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
              <table className='body-info-content'>
                <tbody className='body-feeds'>
                  <tr className='body-feed white-cell'>
                    <td><i className='fa fa-user' style={{color: 'rgb(32,148,239)'}}></i></td>
                    <td><span>New record, over 90 views.</span></td>
                    <td><em>10 mins</em></td>               
                  </tr>
                  <div className='body-feed'>
                    <i className='fa fa-bell' style={{color: 'rgb(244,67,54)'}}></i>
                    <span>Database error.</span>
                    <em>15 mins</em>
                  </div>
                  <div className='body-feed white-cell'>
                    <i className='fa fa-users' style={{color: 'rgb(210,190,14)'}}></i>
                    <span>New record, over 40 users.</span>
                    <em>17 mins</em>
                  </div>
                  <div className='body-feed'>
                    <i className='fa fa-comment' style={{color: 'rgb(244,67,54)'}}></i>
                    <span>New comments.</span>
                    <em>25 mins</em>
                  </div>
                  <div className='body-feed white-cell'>
                    <i className='fa fa-bookmark' style={{color: 'rgb(32,148,239)'}}></i>
                    <span>Check transactions.</span>
                    <em>28 mins</em>
                  </div>
                  <div className='body-feed'>
                    <i className='fa fa-laptop' style={{color: 'rgb(244,80,67)'}}></i>
                    <span>CPU overload.</span>
                    <em>35 mins</em>
                  </div>
                  <div className='body-feed white-cell'>
                    <i className='fa fa-share-alt' style={{color: 'rgb(75,173,79)'}}></i>
                    <span>New shares.</span>
                    <em>39 mins</em>
                  </div>
                </tbody>
              </table>         
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
              More Countries <i class="fa fa-arrow-right"></i>
            </button>
          </div>
          <div className='recent-users'>
            <div className='recent-users-title'>
              Recent Users
            </div>
            <table className='recent-users-table'>
              <tr className='recent-user'>
                <img className='profile-avatar' src={avatar2} width={45}/>
                <td className='recent-user-name'>Mike</td>
              </tr>
              <tr className='recent-user'>
                <img className='profile-avatar' src={avatar5} width={45}/>
                <td className='recent-user-name'>Jill</td>
              </tr>
              <tr className='recent-user'>
                <img className='profile-avatar' src={avatar6} width={45}/>
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
                <img className='comment-avatar' src={avatar3} width='100px' />
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
                <img className='comment-avatar' src={avatar1} width='100px' />
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

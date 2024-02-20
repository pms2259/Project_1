import "./sidebar.css"

export default function SideBar() {
  return (
        <div className="sidebar">
          <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img 
              src="https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p>
              flowers
            </p>
          </div>
          <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
              <li className="siderbarlistItem">Life</li>
              <li className="siderbarlistItem">Music</li>
              <li className="siderbarlistItem">Style</li>
              <li className="siderbarlistItem">Sport</li>
              <li className="siderbarlistItem">Tech</li>
              <li className="siderbarlistItem">cinema</li>
            </ul>
          </div>
          <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>            
            <div className="sidebarSocial">
              <i className="sidebarIcon fa-brands fa-square-facebook"></i>
              <i className="sidebarIcon fa-brands fa-square-twitter"></i>
              <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
              <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
          </div>
        </div>
  )
}

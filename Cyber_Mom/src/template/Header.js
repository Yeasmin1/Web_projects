
import { Link } from "react-router-dom";
import { useState } from "react";
function Header(){
  const [openedDrawer, setOpenedDrawer] = useState(false)
  function changeNav(event) {
    if (openedDrawer) {
      setOpenedDrawer(false)
    }
  }
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
           <Link className="navbar-brand" to="/" onClick={changeNav}> 
            Cyber Mom
            </Link>
          
        </div>
        
        <div className='navbar-header'>
          <Link to="/" className="navbar-brand"  > 
              Security Awareness
              </Link> 
        </div>
        
      </div>
    </nav>
  ) 
  }  
  export default Header;
import { useState } from 'react'
import "../styles/pages/navbar/_navbar.scss" 
import Logo from '../../src/assets/logo.png'
import { CgShoppingBag } from 'react-icons/cg'
import { GoThreeBars } from 'react-icons/go'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [ShowMenu, setShowMenu] = useState(true)
    const toggleMenu = () => {
        setShowMenu((ShowMenu) => !ShowMenu)
    }
    return (
        <div className="Container" >
            <div className= "logo">
                <img src={Logo} alt="" />
                <span>E-Commerce</span>
            </div>


            <div className= "right">
                <div className= "bars" onClick={toggleMenu}>
                    <GoThreeBars />
                </div>


                <ul className= "menu" style={{display:ShowMenu?"inherit":"none"}}>
                    <li><Link to="/" className="navbar-link">Collections</Link></li>                   
                    <li><Link to="/registration" className="navbar-link">Registration</Link></li>                     
                    <li><Link to="/login" className="navbar-link">Login</Link></li>
                </ul>


                <input type="text" className= "search" placeholder='Search' />
                <CgShoppingBag className= "cart" />
            </div>
        </div>
    )
}

export default Navbar

import { Link } from "react-router-dom";
import { IMAGES } from "../constant/theme";
import { menudata } from "../constant/alldata";
import { useEffect, useState } from "react";

function Header({ columnstand }) {
    const [scroll, setScroll] = useState(false);
    const [show, setShow] = useState(false);
    const handleclick = () => {
        setShow(!show)
    };
    const [isActive, setIsActive] = useState(null);
    function menuHandler(index) {
        if (isActive == index) {
            setIsActive(null)
        } else {
            setIsActive(index)
        }
    }

    function scrollHandler() {
        if (window.scrollY >= 90) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    return (
        <>
            <header className={`site-header header box-header style-1 ${columnstand}`}>
                <div className="top-bar">
                    <div className="container">
                        <div className="dz-topbar-inner d-flex justify-content-between align-items-center">
                            <div className="dz-topbar-left">
                                <ul>
                                    <li><Link to="tel:+11234567890"><i className="feather icon-phone-call text-primary" /> +11234567890</Link></li>
                                    <li><Link to="mailto:info@example.com"><i className="feather icon-mail text-primary" /> info@example.com</Link></li>
                                </ul>
                            </div>
                            <div className="dz-topbar-right">
                                <ul className="text-secondary">
                                    <li> <Link to="https://www.linkedin.com/showcase/dexignzone" target="_blank"> <i className="fa-brands fa-linkedin" /> </Link> </li>
                                    <li> <Link to="https://www.instagram.com/dexignzone" target="_blank"> <i className="fa-brands fa-instagram" /> </Link>  </li>
                                    <li> <Link to="https://www.facebook.com/dexignzone" target="_blank"> <i className="fa-brands fa-facebook-f" /> </Link>  </li>
                                    <li> <Link to="https://www.x.com/dexignzone" target="_blank"> <i className="fa-brands fa-x-twitter" /> </Link>  </li>
                                    <li> <Link to="https://www.linkedin.com/@dexignzone" target="_blank"> <i className="fa-brands fa-youtube" /> </Link>  </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`sticky-header main-bar-wraper ${scroll ? 'is-fixed' : ''}`}>
                    <div className="main-bar clearfix">
                        <div className="container clearfix inner-bar text-white">
                            <div className="logo-header logo-dark">
                                <Link to="/"><img src={IMAGES.logowhite} alt="logo" /></Link>
                            </div>
                            <button onClick={() => handleclick(show)} className={`w3menu-toggler navicon ${show ? 'open' : ''}`} type="button" data-target="#W3Menu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <div onClick={() => setShow(false)} className="menu-close fade-overlay"></div>
                            <div className={`header-nav w3menu w3menu-end mo-left ${show ? 'show' : ''}`} id="W3Menu">
                                <div className="logo-header logo-dark">
                                    <Link to="/"><img src={IMAGES.logo} alt="" /></Link>
                                </div>
                                <ul className="nav navbar-nav">
                                    {menudata.map((data, i) => {
                                        let menuClass = data.classChange;
                                        if (menuClass === 'has-mega-menu') {
                                            return (
                                                <li key={i} className={`has-mega-menu sub-menu-down auto-width menu-left ${i == isActive ? 'open' : ''}`} >
                                                    <Link onClick={() => menuHandler(i)} to={data.to}> 
                                                        <span>{data.title}</span> 
                                                        <i className="fas fa-chevron-down tabIndex" /> 
                                                    </Link>
                                                    <div className="mega-menu">
                                                        <ul className="demo-menu">
                                                            {data.content.map((item, index) => (
                                                                <li key={index}>
                                                                    <Link to={item.to}> 
                                                                        <img src={item.image} alt={item.title} /> 
                                                                        <span className="menu-title">{item.title}</span>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </li>
                                            )
                                        }
                                        else if (menuClass === 'sub-menu-down') {
                                            return (
                                                <li key={i} className={`sub-menu-down ${i == isActive ? 'open' : ''}`}>
                                                    <Link onClick={() => menuHandler(i)} to={"#"}>  <span>{data.title}</span> <i className="fas fa-chevron-down tabIndex" />  </Link>
                                                    <ul className="sub-menu">
                                                        {data.content.map((item, index) => (
                                                            <li key={index}> <Link to={item.to}>{item.title}</Link> </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            )
                                        }
                                        else {
                                            return (
                                                <li key={i}><Link to={data.to}><span>{data.title}</span></Link></li>
                                            )
                                        }
                                    })}
                                </ul>
                                <div className="dz-social-icon">
                                    <ul>
                                        <li> <Link to="https://www.facebook.com/dexignzone" target="_blank"> <i className="fa-brands fa-facebook-f" /> </Link> </li>
                                        <li> <Link to="https://www.x.com/dexignzone" target="_blank"> <i className="fa-brands fa-x-twitter" /> </Link> </li>
                                        <li> <Link to="https://www.linkedin.com/showcase/dexignzone" target="_blank"> <i className="fa-brands fa-linkedin" /> </Link> </li>
                                        <li> <Link to="https://www.instagram.com/dexignzone" target="_blank"> <i className="fa-brands fa-instagram" /> </Link> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`extra-nav ${scroll ? 'active' : ''}`}>
                                <div className="extra-cell">
                                    <ul className="header-right">
                                        <li className="nav-item">
                                            <Link to="/appointment" className="btn btn-primary btn-hover1">
                                                Appointment
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;
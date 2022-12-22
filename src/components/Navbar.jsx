import { Link } from "react-router-dom";
import bgImage from '../assets/images/headers/shadow2.png'
import myImage from '../assets/images/headers/header-1-woman.jpg'
import logo from '../logo.svg'
import logoDark from '../logo-dark.svg'


function Navbar() {
  return (
    <section className="pb-20 position-relative overflow-hidden bg-dark">
        <nav className="position-relative navbar py-10 navbar-expand-lg navbar-dark bg-transparent" style={{zIndex: 1}}>
          <div className="container">
            <Link className="d-none d-xl-block navbar-brand" to="#">
              <img src={logoDark} alt="" width="116"></img>
            </Link>
            <Link className="d-xl-none navbar-brand" to="#">
              <img src={logo} alt="" width="116"></img>
            </Link>
            <button className="btn p-0 d-lg-none navbar-burger">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.5 7C3.22386 7 3 6.77614 3 6.5C3 6.22386 3.22386 6 3.5 6H20.5C20.7761 6 21 6.22386 21 6.5C21 6.77614 20.7761 7 20.5 7H3.5ZM3.5 12C3.22386 12 3 11.7761 3 11.5C3 11.2239 3.22386 11 3.5 11H20.5C20.7761 11 21 11.2239 21 11.5C21 11.7761 20.7761 12 20.5 12H3.5ZM3 16.5C3 16.7761 3.22386 17 3.5 17H20.5C20.7761 17 21 16.7761 21 16.5C21 16.2239 20.7761 16 20.5 16H3.5C3.22386 16 3 16.2239 3 16.5Z" fill="#fff"></path>
              </svg>
            </button>
            <div className="collapse navbar-collapse">
              <div className="ms-auto">
                <ul className="navbar-nav ms-32 mb-2 mb-lg-0">
                  <li className="nav-item"><Link className="nav-link text-white" aria-current="page" to="#">Home</Link></li>
                  <li className="nav-item"><Link className="nav-link text-white" to="#">About Me</Link></li>
                  <li className="nav-item"><Link className="nav-link text-white" to="#">Portfolio</Link></li>
                  <li className="nav-item"><Link className="nav-link text-white" to="#">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="position-relative container" style={{zIndex: 1}}>
          <div className="row d-lg-flex flex-lg-row justify-content-lg-between">
            <div className="position-relative top-0 start-0 ms-n32 pe-32 col-12 d-none d-lg-flex align-items-lg-center col-lg-auto">
              <div className="position-absolute d-flex" style={{ transform: `rotate(-90deg)` }}>
                <Link className="me-14 small fw-bold text-decoration-none text-dark" to="#">Instagram</Link>
                <Link className="me-14 small fw-bold text-decoration-none text-dark" to="#">Twitter</Link>
                <Link className="small fw-bold text-decoration-none text-dark" to="#">LinkdIn</Link></div>
            </div>
            <div className="col-12 col-md-6 col-lg-5 d-md-flex align-items-md-center d-lg-none">
              <ul className="mw-lg mx-auto list-unstyled mb-0 mt-md-0 text-center d-flex justify-content-center justify-content-md-between gap-6 flex-md-column">
                <li><Link className="text-decoration-none small text-white fw-bold" to="#">Twitter</Link></li>
                <li className="my-md-8"><Link className="text-decoration-none small text-white fw-bold" to="#">Instagram</Link></li>
                <li><Link className="text-decoration-none small text-white fw-bold" to="#">LinkdIn</Link></li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-5 mb-6 mb-lg-0">
              <figure className="mb-0 mt-6 mt-md-0 d-flex flex-column align-items-center">
                <div style={{ zIndex: 1 }}>
                  <img className="img-fluid" src={myImage} alt=""></img>
                </div>
              </figure>
            </div>
            <div className="col-12 col-md-12 col-lg-5 d-lg-flex flex-lg-row align-items-lg-center">
              <div className="mw-lg mx-auto mw-md-none">
                <h1 className="mb-6 lh-sm text-light">
                  <span>Blessing</span>
                  <br />
                  <span className="text-primary-dark">Freelance</span>
                  <br />
                  <span>Developer.</span>
                </h1>
                <p className="mb-6 lh-lg mw-md-md mw-xl-sm text-light">I specialize in full-stack application development and websites for small-medium enterprises. With over 4 years’ Freelance experience delivering applications in the
web services space</p>
                <Link className="btn btn-light d-block d-md-inline-block" to="#">Details</Link>
              </div>
            </div>
          </div>
        </div>
        <div 
        className="d-none d-xl-block h-100 position-absolute top-0 start-0 bg-warning-light mw-sm w-100 mx-xl-n10" 
        style={{ 
          backgroundImage: `url(${bgImage})`, 
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover` 
          }}></div>
        <div className="navbar-menu d-none position-fixed top-0 start-0 bottom-0 w-75 mw-sm" style={{ zIndex: 9999 }}>
          <div className="navbar-close position-fixed top-0 start-0 end-0 bottom-0 bg-dark" style={{ opacity: `75%` }}></div>
          <nav className="position-relative h-100 w-100 d-flex flex-column w-75 mw-sm py-10 px-6 bg-dark overflow-auto">
            <div className="d-flex align-items-center mb-12">
              <Link className="me-auto h4 mb-0 text-decoration-none" to="#">
                <img src="pstls-assets/logos/logo-purple-white.svg" alt="" width="102"></img>
              </Link>
              <button className="btn navbar-close" type="button" aria-label="Close">
                <img src="pstls-assets/images/navigations/x.svg" alt=""></img>
              </button>
            </div>
            <div>
              <ul className="nav flex-column">
                <li className="nav-item py-3"><Link className="nav-link text-white" to="#">Home</Link></li>
                <li className="nav-item py-3"><Link className="nav-link text-white" to="#">Products</Link></li>
                <li className="nav-item py-3"><Link className="nav-link text-white" to="#">Resources</Link></li>
                <li className="nav-item py-3"><Link className="nav-link text-white" to="#">Pricing</Link></li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="py-6"><Link className="btn w-100 mb-4 text-white" to="#">Log In</Link><Link className="btn btn-light w-100" to="#">Sign Up</Link></div>
            </div>
          </nav>
        </div>
      </section>
  )
}

export default Navbar
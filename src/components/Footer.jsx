import { Link } from "react-router-dom";
import logo from '../logo.svg'

function Footer() {
  return (
    <section className="py-24 bg-dark">
        <div className="container">
          <div className="row align-items-start mb-12">
            <div className="col-12 col-sm-3 col-lg-3 col-xl-4 mb-12 mb-sm-0">
              <Link to="#">
                <img className="img-fluid" src={logo} alt="" width="87"></img>
              </Link>
            </div>
            <div className="col-12 col-sm-9 col-lg-5 col-xl-4 mb-12 mb-lg-0">
              <ul className="list-unstyled d-sm-flex justify-content-sm-end justify-content-lg-center mb-0">
                <li className="mb-6 mb-sm-0">
                    <Link className="text-decoration-none link-light fw-bold" to="#" style={{ fontSize: `14px` }}>Hello</Link>
                    </li>
                <li className="mb-6 mb-sm-0 ms-sm-12">
                    <Link className="text-decoration-none link-light fw-bold" to="#" style={{ fontSize: `14px` }}>Story</Link>
                    </li>
                <li className="mb-6 mb-sm-0 ms-sm-12">
                    <Link className="text-decoration-none link-light fw-bold" to="#" style={{ fontSize: `14px` }}>About us</Link>
                    </li>
                <li className="ms-sm-12">
                    <Link className="text-decoration-none link-light fw-bold" to="#" style={{ fontSize: `14px` }}>Services</Link>
                    </li>
              </ul>
            </div>
            <div className="col-12 col-sm-12 col-lg-4">
              <div className="d-flex flex-row justify-content-sm-center justify-content-lg-end flex-wrap">
                <Link className="text-decoration-none" to="#">
                  <img className="img-fluid" src="pstls-assets/logos/twitter.svg" alt=""></img>
                </Link>
                <Link className="mx-7 text-decoration-none" to="#">
                  <img className="img-fluid" src="pstls-assets/logos/google.svg" alt=""></img>
                </Link>
                <Link className="text-decoration-none" to="#">
                  <img className="img-fluid" src="pstls-assets/logos/facebook.svg" alt=""></img>
                </Link>
              </div>
            </div>
          </div>
          <p className="text-muted small lh-sm d-sm-flex justify-content-sm-center">© Pstls. 2021 All right reserved.</p>
        </div>
      </section>

  )
}

export default Footer

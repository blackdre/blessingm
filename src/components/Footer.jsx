import { Link } from "react-router-dom";
import logo from '../logo.svg'

function Footer() {
  return (
    <section class="py-24 bg-dark">
        <div class="container">
          <div class="row align-items-start mb-12">
            <div class="col-12 col-sm-3 col-lg-3 col-xl-4 mb-12 mb-sm-0">
              <Link to="#">
                <img class="img-fluid" src={logo} alt="" width="87"></img>
              </Link>
            </div>
            <div class="col-12 col-sm-9 col-lg-5 col-xl-4 mb-12 mb-lg-0">
              <ul class="list-unstyled d-sm-flex justify-content-sm-end justify-content-lg-center mb-0">
                <li class="mb-6 mb-sm-0">
                    <Link class="text-decoration-none link-light fw-bold" to="#" style={{ fontSize: `14px` }}>Hello</Link>
                    </li>
                <li class="mb-6 mb-sm-0 ms-sm-12">
                    <Link class="text-decoration-none link-light fw-bold" to="#" style={{ fontSize: `14px` }}>Story</Link>
                    </li>
                <li class="mb-6 mb-sm-0 ms-sm-12">
                    <Link class="text-decoration-none link-light fw-bold" to="#" style={{ fontSize: `14px` }}>About us</Link>
                    </li>
                <li class="ms-sm-12">
                    <Link class="text-decoration-none link-light fw-bold" to="#" style={{ fontSize: `14px` }}>Services</Link>
                    </li>
              </ul>
            </div>
            <div class="col-12 col-sm-12 col-lg-4">
              <div class="d-flex flex-row justify-content-sm-center justify-content-lg-end flex-wrap">
                <Link class="text-decoration-none" to="#">
                  <img class="img-fluid" src="pstls-assets/logos/twitter.svg" alt=""></img>
                </Link>
                <Link class="mx-7 text-decoration-none" to="#">
                  <img class="img-fluid" src="pstls-assets/logos/google.svg" alt=""></img>
                </Link>
                <Link class="text-decoration-none" to="#">
                  <img class="img-fluid" src="pstls-assets/logos/facebook.svg" alt=""></img>
                </Link>
              </div>
            </div>
          </div>
          <p class="text-muted small lh-sm d-sm-flex justify-content-sm-center">© Pstls. 2021 All right reserved.</p>
        </div>
      </section>

  )
}

export default Footer

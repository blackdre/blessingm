import { Link } from "react-router-dom";


function Portfolio() {
  return (
    <section class="py-24 position-relative bg-dark overflow-hidden">
        <img class="position-absolute top-0 end-0 ms-xl-64 h-100" src="pstls-assets/images/portfolio/shadow2.png" alt=""></img>
        <img class="position-absolute top-0 start-0 ms-xl-n64 h-100" src="pstls-assets/images/portfolio/shadow2.png" alt=""></img>
        <div class="position-relative container" style={{ zIndex: 1 }}>
          <div class="row align-items-center">
            <div class="col-12 col-sm-6 mx-auto col-lg-4 mb-20 mb-lg-0">
              <ul class="list-unstyled mb-0">
                <li class="d-flex mb-6 mb-xl-10 align-items-center">
                  <Link class="text-white h2 text-decoration-none lh-sm" to="#">All</Link>
                  <span class="d-flex align-items-center justify-content-center ms-4 mb-0 bg-primary-light fw-bold p-1 rounded-circle" style={{ width: `24px`, height:`24px`, fontSize: `12px` }}>41</span>
                </li>
                <li class="d-flex mb-6 mb-xl-10 align-items-center">
                  <Link class="text-primary h2 text-decoration-none lh-sm" to="#">Art Direction</Link>
                  <span class="d-flex align-items-center justify-content-center ms-4 mb-0 bg-primary fw-bold p-1 rounded-circle" style={{ width: `24px`, height:`24px`, fontSize: `12px` }}>6</span>
                </li>
                <li class="d-flex mb-6 mb-xl-10 align-items-center">
                  <Link class="text-white h2 text-decoration-none lh-sm" to="#">Branding</Link>
                  <span class="d-flex align-items-center justify-content-center ms-4 mb-0 bg-primary-light fw-bold p-1 rounded-circle" style={{ width: `24px`, height:`24px`, fontSize: `12px` }}>4</span>
                </li>
              </ul>
            </div>
            <div class="col-12 col-lg-8">
              <div class="d-md-flex flex-md-row justify-content-md-between justify-content-xl-end mw-md-xl mw-xl-none mx-auto me-lg-0" style={{ zIndex: 1 }}>
                <div class="d-flex flex-column align-items-center mt-xl-16 me-xl-32">
                  <div>
                    <img class="img-fluid" src="pstls-assets/images/portfolio/portfolio-1-room.jpg" alt=""></img>
                    <h5 class="mb-2 mt-6 lh-lg text-white">Lorem Ipsum Random Name</h5>
                    <p class="mb-0 text-uppercase text-muted" style={{ fontSize: `12px` }}>Art direction</p>
                  </div>
                  <div class="mt-16">
                    <img class="img-fluid" src="pstls-assets/images/portfolio/portfolio-1-forest.jpg" alt=""></img>
                    <h5 class="mb-2 mt-6 lh-lg text-white">Lorem Ipsum Random Name</h5>
                    <p class="mb-0 text-uppercase text-muted" style={{ fontSize: `12px` }}>Art direction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-none d-xl-block p-40 position-absolute top-0 start-0 bg-dark"></div>
        <div class="d-none d-xl-block p-40 position-absolute bottom-0 start-0 bg-dark"></div>
        <div class="d-none d-xl-block p-40 position-absolute top-0 end-0 bg-dark"></div>
      </section>
  )
}

export default Portfolio
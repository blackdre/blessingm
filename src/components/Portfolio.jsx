import { Link } from "react-router-dom";


function Portfolio() {
  return (
    <section className="py-24 position-relative bg-dark overflow-hidden">
        <img className="position-absolute top-0 end-0 ms-xl-64 h-100" src="pstls-assets/images/portfolio/shadow2.png" alt=""></img>
        <img className="position-absolute top-0 start-0 ms-xl-n64 h-100" src="pstls-assets/images/portfolio/shadow2.png" alt=""></img>
        <div className="position-relative container" style={{ zIndex: 1 }}>
          <div className="row align-items-center">
            <div className="col-12 col-sm-6 mx-auto col-lg-4 mb-20 mb-lg-0">
              <ul className="list-unstyled mb-0">
                <li className="d-flex mb-6 mb-xl-10 align-items-center">
                  <Link className="text-white h2 text-decoration-none lh-sm" to="#">All</Link>
                  <span className="d-flex align-items-center justify-content-center ms-4 mb-0 bg-primary-light fw-bold p-1 rounded-circle" style={{ width: `24px`, height:`24px`, fontSize: `12px` }}>41</span>
                </li>
                <li className="d-flex mb-6 mb-xl-10 align-items-center">
                  <Link className="text-primary h2 text-decoration-none lh-sm" to="#">Art Direction</Link>
                  <span className="d-flex align-items-center justify-content-center ms-4 mb-0 bg-primary fw-bold p-1 rounded-circle" style={{ width: `24px`, height:`24px`, fontSize: `12px` }}>6</span>
                </li>
                <li className="d-flex mb-6 mb-xl-10 align-items-center">
                  <Link className="text-white h2 text-decoration-none lh-sm" to="#">Branding</Link>
                  <span className="d-flex align-items-center justify-content-center ms-4 mb-0 bg-primary-light fw-bold p-1 rounded-circle" style={{ width: `24px`, height:`24px`, fontSize: `12px` }}>4</span>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-8">
              <div className="d-md-flex flex-md-row justify-content-md-between justify-content-xl-end mw-md-xl mw-xl-none mx-auto me-lg-0" style={{ zIndex: 1 }}>
                <div className="d-flex flex-column align-items-center mt-xl-16 me-xl-32">
                  <div>
                    <img className="img-fluid" src="pstls-assets/images/portfolio/portfolio-1-room.jpg" alt=""></img>
                    <h5 className="mb-2 mt-6 lh-lg text-white">Lorem Ipsum Random Name</h5>
                    <p className="mb-0 text-uppercase text-muted" style={{ fontSize: `12px` }}>Art direction</p>
                  </div>
                  <div className="mt-16">
                    <img className="img-fluid" src="pstls-assets/images/portfolio/portfolio-1-forest.jpg" alt=""></img>
                    <h5 className="mb-2 mt-6 lh-lg text-white">Lorem Ipsum Random Name</h5>
                    <p className="mb-0 text-uppercase text-muted" style={{ fontSize: `12px` }}>Art direction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-none d-xl-block p-40 position-absolute top-0 start-0 bg-dark"></div>
        <div className="d-none d-xl-block p-40 position-absolute bottom-0 start-0 bg-dark"></div>
        <div className="d-none d-xl-block p-40 position-absolute top-0 end-0 bg-dark"></div>
      </section>
  )
}

export default Portfolio
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="py-24 position-relative overflow-hidden">
        <div className="container">
          <div className="py-20 px-4">
            <div className="mw-2xl mx-auto mb-8 text-center">
              <span className="text-uppercase fw-bold text-muted">New feature</span>
              <h1 className="mt-2 mb-6 lh-sm font-heading">
                <span>Take</span>
                <span className="text-primary">quick action</span>
                <span>that increases your brand's regular profit.</span>
              </h1>
              <p className="lh-lg">If you have ever wondered how to develop your brand, this is the place for you. Take Link big step forward in growing your business with this great tool.</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-md-auto mb-3 mb-md-0"><Link className="btn btn-primary w-100" to="#">Activate Demo</Link></div>
              <div className="col-12 col-md-auto"><Link className="btn btn-outline-primary w-100 text-dark" to="#">Share with friends</Link></div>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom-0 start-0" style={{ zIndex: -1 }}>
          <div className="d-none d-xl-block p-32 bg-success-light"></div>
          <div className="d-none d-xl-block mt-8 p-32 bg-warning-light"></div>
          <div className="mt-16 mt-md-8 p-20 p-xl-32 bg-danger-light"></div>
        </div>
        <div className="position-absolute top-0 end-0"  style={{ zIndex: -1 }}>
          <div className="mt-md-8 p-20 p-xl-32 bg-secondary-light"></div>
          <div className="d-none d-xl-block mt-8 p-32 bg-primary-light"></div>
          <div className="d-none d-xl-block mt-8 p-32 bg-info-light"></div>
        </div>
      </section>
  )
}

export default About;

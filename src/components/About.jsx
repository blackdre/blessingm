import { Link } from "react-router-dom";

function About() {
  return (
    <section class="py-24 position-relative overflow-hidden">
        <div class="container">
          <div class="py-20 px-4">
            <div class="mw-2xl mx-auto mb-8 text-center">
              <span class="text-uppercase fw-bold text-muted">New feature</span>
              <h1 class="mt-2 mb-6 lh-sm font-heading">
                <span>Take</span>
                <span class="text-primary">quick action</span>
                <span>that increases your brand's regular profit.</span>
              </h1>
              <p class="lh-lg">If you have ever wondered how to develop your brand, this is the place for you. Take Link big step forward in growing your business with this great tool.</p>
            </div>
            <div class="row justify-content-center">
              <div class="col-12 col-md-auto mb-3 mb-md-0"><Link class="btn btn-primary w-100" to="#">Activate Demo</Link></div>
              <div class="col-12 col-md-auto"><Link class="btn btn-outline-primary w-100 text-dark" to="#">Share with friends</Link></div>
            </div>
          </div>
        </div>
        <div class="position-absolute bottom-0 start-0" style={{ zIndex: -1 }}>
          <div class="d-none d-xl-block p-32 bg-success-light"></div>
          <div class="d-none d-xl-block mt-8 p-32 bg-warning-light"></div>
          <div class="mt-16 mt-md-8 p-20 p-xl-32 bg-danger-light"></div>
        </div>
        <div class="position-absolute top-0 end-0"  style={{ zIndex: -1 }}>
          <div class="mt-md-8 p-20 p-xl-32 bg-secondary-light"></div>
          <div class="d-none d-xl-block mt-8 p-32 bg-primary-light"></div>
          <div class="d-none d-xl-block mt-8 p-32 bg-info-light"></div>
        </div>
      </section>
  )
}

export default About;

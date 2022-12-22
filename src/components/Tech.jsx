import React from 'react'

import pythonIcon from '../assets/images/logo-clouds/icons8-python.svg'

function Tech() {
  return (
    <section className="py-28 bg-white">
        <div className="container">
          <div className="row d-flex flex-lg-row align-items-md-center">
            <div className="col-12 col-lg-5 mb-20 mb-lg-0">
              <div className="mw-sm">
                <h2 className="display-5 lh-sm mb-8 font-heading">Trusted by brands all over the world</h2>
                <p className="mb-0 lh-lg">This UI Kit uses attractive colors and modern typography to make you look good, no matter what business you’re in.</p>
              </div>
            </div>
            <div className="col-12 col-lg-7 ms-auto">
              <div className="row">
                <div className="col-md-3 mb-8 mb-lg-0">
                  <div className="mb-8">
                    <div className="d-flex align-items-center justify-content-center bg-primary-light" style={{ height: `166px` }}>
                      <img className="img-fluid" src={{ pythonIcon }} alt=""></img>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center justify-content-center bg-danger-light" style={{ height: `166px` }}>
                      <img className="img-fluid" src="pstls-assets/logos/champion-b-xs.svg" alt=""></img>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 align-self-center">
                  <div>
                    <div className="d-flex align-items-center justify-content-center bg-danger-light" style={{ height: `264px` }}>
                      <img className="img-fluid" src="pstls-assets/logos/apple-b-xs.svg" alt=""></img>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mt-8 mt-md-28 mb-8">
                    <div className="d-flex align-items-center justify-content-center bg-primary-light" style={{ height: `166px` }}>
                      <img className="img-fluid" src="pstls-assets/logos/facebook-b-xs.svg" alt=""></img>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="d-flex align-items-center justify-content-center bg-success2-light" style={{ height: `166px` }}>
                        <img className="img-fluid" src="pstls-assets/logos/google-b-xs.svg" alt=""></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Tech

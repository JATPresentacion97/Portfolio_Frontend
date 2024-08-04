import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServicesPage: React.FC = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Our Services</h1>
      <div className="row">
        {/* Service 1 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Service 1" />
            <div className="card-body">
              <h5 className="card-title">Service One</h5>
              <p className="card-text">Detailed description of the first service goes here. Explain what this service entails and why it's beneficial.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Service 2" />
            <div className="card-body">
              <h5 className="card-title">Service Two</h5>
              <p className="card-text">Detailed description of the second service goes here. Explain what this service entails and why it's beneficial.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Service 3" />
            <div className="card-body">
              <h5 className="card-title">Service Three</h5>
              <p className="card-text">Detailed description of the third service goes here. Explain what this service entails and why it's beneficial.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

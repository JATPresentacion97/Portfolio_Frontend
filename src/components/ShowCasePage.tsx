import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShowCasePage: React.FC = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Featured Projects</h1>
      <div className="row">
        {/* Project 1 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Project 1" />
            <div className="card-body">
              <h5 className="card-title">Project One</h5>
              <p className="card-text">Brief description of the first project. Highlight key features or benefits of this project.</p>
              <a href="#" className="btn btn-primary">View Details</a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Project 2" />
            <div className="card-body">
              <h5 className="card-title">Project Two</h5>
              <p className="card-text">Brief description of the second project. Highlight key features or benefits of this project.</p>
              <a href="#" className="btn btn-primary">View Details</a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Project 3" />
            <div className="card-body">
              <h5 className="card-title">Project Three</h5>
              <p className="card-text">Brief description of the third project. Highlight key features or benefits of this project.</p>
              <a href="#" className="btn btn-primary">View Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCasePage;

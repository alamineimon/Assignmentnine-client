import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = (props) => {
    return (
      <div>
        <section className="d-flex items-center h-screen p-16 bg-gray-100 text-gray-900">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
              <h2 className="mb-8 fw-bold fs-1 ">
                <span className="">404</span>
              </h2>
              <p className="fs-3 font-semibold md:text-xl mb-8">
                Sorry, we couldn't find this page. Go Homepage
              </p>
              <Link to="/" className="px-5 mb-5 py-4 fs-semibold rounded  ">
                Back to homepage
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
}

export default ErrorPage;
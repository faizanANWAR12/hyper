import React, { useState } from 'react';

function App() {
  const brands = [
    {
      id: 1, name: 'Ferrari', image: '/logos/Cover-Pixart_Ferrari.jpg', horsepower: 710, price: 300000
    }



  ];



  const [filter, setFilter] = useState('All');

  const filteredBrands = brands.filter((brand) =>
    filter === 'All'
      ? true
      : filter === 'Horsepower'
        ? brand.horsepower > 800
        : brand.price > 1000000
  );

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Supercar Showcase</a>
        </div>
      </nav>

      {/* Filter Buttons */}
      <div className="container mt-3">
        <div className="d-flex justify-content-center mb-4">
          <button className="btn btn-outline-primary mx-2" onClick={() => setFilter('All')}>All</button>
          <button className="btn btn-outline-success mx-2" onClick={() => setFilter('Horsepower')}>Horsepower</button>
          <button className="btn btn-outline-warning mx-2" onClick={() => setFilter('Price')}>Price</button>
        </div>
      </div>

      {/* Brand Cards */}
      <div className="container">
        <div className="row">
          {filteredBrands.map((brand) => (
            <div className="col-md-4 mb-4" key={brand.id}>
              <div className="card shadow-sm brand-card">
                {/* Top Part for Logo */}
                <div
                  className="card-img-container"
                  style={{
                    backgroundImage: `url(${brand.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '150px',
                  }}
                ></div>
                {/* Bottom Part for Name */}
                <div className="card-body text-center">
                  <h5 className="card-title">{brand.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

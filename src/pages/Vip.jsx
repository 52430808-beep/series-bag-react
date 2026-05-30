import React from 'react';

function Vip() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for joining VIP!");
  };

  return (
    <div className="container py-5">
      <div className="vip-card shadow-lg mx-auto">
        <h2>Join VIP Now</h2>
        <p className="text-center text-muted mb-4">Fill the form to unlock exclusive features</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Full Name</label>
            <input type="text" className="form-control border-danger" placeholder="Enter your full name" required />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Email Address</label>
            <input type="email" className="form-control border-danger" placeholder="name@example.com" required />
          </div>
          <div className="mb-4">
            <label className="form-label fw-bold">Select Payment Plan</label>
            <select className="form-select border-danger">
              <option value="1">Monthly Plan - $9.99</option>
              <option value="2">Annual Plan - $89.99 (Save 20%)</option>
            </select>
          </div>
          <button type="submit" className="btn btn-red w-100 py-3 rounded-pill fs-5">Start Membership</button>
        </form>
      </div>
    </div>
  );
}

export default Vip;
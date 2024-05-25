import './style.css'
import React, { useState } from 'react';

function ForgotPasswordComponent() {
  const [email, setEmail] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Thêm logic xử lý quên mật khẩu ở đây
    console.log('Quên mật khẩu với:', { email });
  };

  return (
    <div className="forgot-password-container">
      <h2>Quên Mật Khẩu</h2>
      <form onSubmit={handleForgotPassword}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Gửi Yêu Cầu</button>
      </form>
    </div>
  );
}

export default ForgotPasswordComponent;

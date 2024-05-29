import React, { useState } from 'react';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Thêm logic xử lý quên mật khẩu ở đây
    console.log('Yêu cầu quên mật khẩu cho:', email);
  };

  return (
    <div className="forgot-password-container bg-gray-300 max-w-md mx-auto p-6 border border-gray-400 rounded shadow my-auto mt-6">
      <h2 className="text-center text-2xl font-bold mb-4">Quên Mật Khẩu</h2>
      <form onSubmit={handleForgotPassword}>
        <div className="form-group mb-4">
          <label htmlFor="email" className="font-bold">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-400 rounded"
            required
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded" type="submit">Gửi Yêu Cầu</button>
        </div>
      </form>
    </div>
  );
}

export default ForgotPasswordPage;

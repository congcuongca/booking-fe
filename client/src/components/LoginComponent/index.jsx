import React, { useState } from 'react';

function LoginComponent({ onForgotPassword }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Thêm logic đăng nhập ở đây
    console.log('Đăng nhập với:', { email, password });
  };

  const handleForgotPassword = () => {
    // Gọi hàm điều hướng đến trang quên mật khẩu
    onForgotPassword();
  };

  return (
    <div className="login-container bg-gray-300 max-w-md mx-auto p-6 border border-gray-400 rounded shadow my-auto mt-6">
      <h2 className="text-center text-2xl font-bold mb-4">Đăng Nhập</h2>
      <form onSubmit={handleLogin}>
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
        <div className="form-group mb-4">
          <label htmlFor="password" className="font-bold">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-400 rounded"
            required
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded" type="submit">Đăng Nhập</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded" type="button" onClick={handleForgotPassword}>Quên Mật Khẩu</button>
        </div>
      </form>
    </div>
  );
}

export default LoginComponent;

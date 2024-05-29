import React, { useState } from 'react';

function SignupComponent() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Thêm logic đăng ký ở đây
    console.log('Đăng ký với:', { username, email, password });
  };

  return (
    <div className="signup-container bg-gray-300 max-w-md mx-auto p-6 border border-gray-400 rounded shadow my-auto mt-6">
      <h2 className="text-center text-2xl font-bold mb-4">Đăng Ký</h2>
      <form onSubmit={handleSignup}>
        <div className="form-group mb-4">
          <label htmlFor="username" className="font-bold">Tên:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-400 rounded"
            required
          />
        </div>
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
        <button className='bg-red-500 text-white px-4 py-2 rounded' type="submit">Đăng Ký</button>
      </form>
    </div>
  );
}

export default SignupComponent;

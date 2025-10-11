import React, { useState } from 'react';
import { FaGraduationCap, FaUserCircle, FaLock, FaSignInAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api'; // axios helper that points to your backend

const LMSLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Navigation hook

  // call backend and map network/5xx to "server down" message
  const handleLogin = async () => {
    setError('');
    try {
      const resp = await api.post('/auth/login', { email, password });
      const { token, user } = resp.data;
      if (token) localStorage.setItem('accessToken', token);
      sessionStorage.setItem('authUserEmail', user.email);
      sessionStorage.setItem('authUserName', user.name || user.email);
      if (user.role === 'admin') navigate('/admin');
      else navigate('/lms-dashboard');
    } catch (err) {
      // Network / DNS / server not reachable
      if (err.request && !err.response) {
        // browser couldn't reach the backend (DNS / connection refused / CORS preflight failed)
        setError('Server is down for now. Please try again later.');
        return;
      }

      // Server responded with a status
      const status = err.response?.status;
      if (status >= 500) {
        // server-side error / overload -> "page down" behaviour
        setError('Server is experiencing heavy load (page down). Please try again later.');
        return;
      }

      if (status === 401 || status === 403) {
        setError('Invalid email or password. Please try again.');
        return;
      }

      // fallback to server message or generic
      const msg = err.response?.data?.message || err.message || 'Login failed. Please try again.';
      setError(msg);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3">
        {/* Title */}
        <div className="flex items-center justify-center mb-6">
          <FaGraduationCap size={30} className="text-blue-700 mr-2" />
          <h1 className="text-2xl font-bold text-blue-700">V-EDU Learning Portal</h1>
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <div className="flex items-center border rounded-lg p-2">
            <FaUserCircle size={20} className="text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <div className="flex items-center border rounded-lg p-2">
            <FaLock size={20} className="text-gray-500 mr-2" />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="bg-blue-700 text-white w-full py-3 rounded-lg flex items-center justify-center hover:bg-blue-800 transition"
        >
          <FaSignInAlt size={20} className="mr-2" />
          Login
        </button>

        {/* Forgot Password */}
        <p className="text-sm text-gray-500 mt-4 text-center">
          Use your registered student email ID and LMS password. Contact support for access issues.
        </p>
      </div>
    </div>
  );
};

export default LMSLoginPage;
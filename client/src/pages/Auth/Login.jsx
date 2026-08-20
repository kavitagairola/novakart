import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import PasswordInput from "../../components/auth/PasswordInput";
import Button from "../../components/ui/Button";

import api from "../../services/api";

function Login() {
  const navigate = useNavigate();
const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await api.post("/auth/login", {
      email,
      password,
    });

    const { token, user } = response.data;

    // AuthContext handles user + token
    login(user, token);

    console.log("Login successful:", user);

    navigate("/");
  } catch (error) {
    console.error("Login failed:", error);

    console.error(
      "Server message:",
      error.response?.data?.message
    );
  }
};
  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Login to continue shopping."
    >
      <form onSubmit={handleSubmit}>

        <AuthInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="mb-6 flex justify-end">

          <Link
            to="/forgot-password"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>

        </div>

        <Button
          type="submit"
          className="w-full"
        >
          Login
        </Button>

      </form>

      <p className="mt-8 text-center text-sm text-slate-600">

        Don't have an account?{" "}

        <Link
          to="/register"
          className="font-semibold text-blue-600 hover:underline"
        >
          Register
        </Link>

      </p>

    </AuthLayout>
  );
}

export default Login;
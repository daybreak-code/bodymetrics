import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

function AuthCallbackPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">
          Verifying your email...
        </h1>
        <p className="mt-2 text-gray-600">Please wait, you will be redirected shortly.</p>
      </div>
    </div>
  );
}

export default AuthCallbackPage; 
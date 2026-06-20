import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const logado = localStorage.getItem("logado");

    if (!logado) {
    return <Navigate to="/" replace />;
    }

  return children;
}

export default ProtectedRoute;
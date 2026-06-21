import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Preferencias from "./pages/Preferencias/Preferencias";
import ProtectedRoute from "./routes/ProtectedRoute/ProtectedRoute";
import Feed from "../src/pages/Feed/Feed"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/preferencias"
          element={
            <ProtectedRoute>
              <Preferencias />
            </ProtectedRoute>
          }
        />
        <Route
          path="/feed"
          element={
            <ProtectedRoute>
              <Feed />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
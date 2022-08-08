import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/common/header/Header";
import { Home } from "./components/home/Home";
import { Footer } from "./components/common/footer/Footer";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/auth/login/Login";
import { Register } from "./components/auth/register/Register";

function App() {
  return (
    <main role="main">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;

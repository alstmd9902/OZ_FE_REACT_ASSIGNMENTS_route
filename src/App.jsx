import { BrowserRouter, Link, Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import headerStyle from "./assets/styles/header.module.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";

/* Layout 컴포넌트 */
function Layout() {
  // const randomPath = `/random-${Math.floor(Math.random() * 1000)}`;

  return (
    <>
      <header className={headerStyle.header}>
        <div>Router Practice</div>
        <div className={headerStyle.headerLinks}>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          {/* <Link to={randomPath}>Random</Link> */}
        </div>
      </header>

      {/* 모든 페이지가 이 아래에 렌더링됨 */}
      <Outlet />
    </>
  );
}

/* App 컴포넌트 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

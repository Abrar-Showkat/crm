import "./App.css";
import ReactDOM from "react-dom/client";
import "./components/loginForm/LoginForm.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/loginForm/LoginForm.js";
import SelectRole from "./components/pages/selectRole/SelectRole.js";
import Navbar from "./components/navigation/navbar";
import MainPage from "./components/pages/homepage/main";
import Delegates from "./components/pages/delegates/delegates";
import MediaPartners from "./components/pages/media-partners/MediaPartners";
import Exhibitors from "./components/pages/Exhibitor/Exhibitor";
import Sponsors from "./components/pages/sponsors/Sponsors";
import Partners from "./components/pages/partners/Partners";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginForm />} />
          <Route path="selectRole" element={<SelectRole />} />
          <Route path="/" element={<Navbar />}>
            <Route path="dashboard" element={<MainPage />} />

            <Route path="delegates" element={<Delegates />} />
            <Route path="media-partners" element={<MediaPartners />} />
            <Route path="exhibitors" element={<Exhibitors />} />
            <Route path="sponsors" element={<Sponsors />} />
            <Route path="partners" element={<Partners />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

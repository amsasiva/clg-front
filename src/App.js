// import RegForm from './page2/listApi.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./login_form/loginsr.jsx";
import RegForm from "./Register_form/reg.jsx";
import ApiTable from "./List_form/listApi.jsx";
import Homescreen from "./homescreen.jsx";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/reg" element={<RegForm />} />
          <Route path="/scheme_list" element={<ApiTable />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

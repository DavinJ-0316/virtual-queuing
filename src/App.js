import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Authentication from "./apps/Authentication";
import QueueListPage from "./apps/QueueListPage";
import SignUpPage from "./apps/SignUpPage";

const App = () => (
  <BrowserRouter>
    <Authentication>
      <Routes>
        <Route path="/auth/sign-up" element={<SignUpPage />} />
        <Route path="/" element={<QueueListPage />} />
      </Routes>
    </Authentication>
  </BrowserRouter>
)

export default App;

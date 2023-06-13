import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateUser from "./assets/register";
import Login from "./assets/login";
import ManageAwards from "./assets/manage-awards";
import AssignAward from "./assets/assign-award";
import UserAwards from "./assets/user-awards";
import TotalPoints from "./assets/total-points";
import PrivateRoute from "./private-route";
import { ProvideAuth, useAuth } from "./auth-context";

function App() {
  const auth = useAuth();
  return (
    <ProvideAuth>
      <Router>
        <div>
          <nav>
            <ul>
              {!auth?.user && (
                <li>
                  <Link to="/create-user">Criar Usuário</Link>
                </li>
              )}
              {!auth?.user && (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
              {auth?.user && (
                <li>
                  <Link to="/manage-awards">Gerenciar Prêmios</Link>
                </li>
              )}
              {auth?.user && (
                <li>
                  <Link to="/assign-award">Atribuir Prêmio</Link>
                </li>
              )}
              {auth?.user && (
                <li>
                  <Link to="/user-awards">Prêmios do Usuário</Link>
                </li>
              )}
              {auth?.user && (
                <li>
                  <Link to="/total-points">Total de Pontos</Link>
                </li>
              )}
            </ul>
          </nav>

          <Routes>
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/manage-awards" element={<ManageAwards />} />
              <Route path="/assign-award" element={<AssignAward />} />
              <Route path="/user-awards" element={<UserAwards />} />
              <Route path="/total-points" element={<TotalPoints />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;

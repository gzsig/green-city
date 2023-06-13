import PropTypes from "prop-types";
import { useContext, createContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function ProvideAuth({ children }) {
  const [user, setUser] = useState(null);

  const signin = (user) => {
    setUser(user);
  };

  const signout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}

ProvideAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

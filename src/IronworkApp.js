import { useEffect, useReducer } from "react";
import { AppRouter } from "./routers/AppRouter";
import { AuthContext } from './authorize/authContext';
import { authReducer } from "./authorize/authReducer";

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

function IronworkApp() {

  const [ user, dispatch] = useReducer( authReducer, {}, init);

  useEffect(() => {
    if (!user) return;

    localStorage.setItem('user', JSON.stringify(user));
  }, [user])

  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default IronworkApp;

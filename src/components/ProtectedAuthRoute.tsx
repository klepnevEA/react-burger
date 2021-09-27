import { Redirect, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { getAuthUser } from "../services/actions";
import { useSelector } from "react-redux";
import { RootState } from "../services/reducers";

export function ProtectedAuthRoute({ children, ...rest }) {
  const [isUserLoaded, setUserLoaded] = useState(false);
  const { user } = useSelector((state: RootState) => state.loginReducer);
  const authToken = localStorage.getItem("authToken");

  const init = async () => {
    await getAuthUser();
    setUserLoaded(true);
  };

  useEffect(() => {
    init();
  }, []);

  if (!isUserLoaded) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !user.name && !authToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

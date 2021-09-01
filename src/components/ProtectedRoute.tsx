import { Redirect, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { authUser, getAuthUser } from "../services/actions";

export function ProtectedRoute({ children, ...rest }) {
  const [isUserLoaded, setUserLoaded] = useState(false);

  const init = async () => {
    await getAuthUser();
    setUserLoaded(true);
  };

  useEffect(() => {
    console.log(authUser);
    init();
  }, []);

  if (!isUserLoaded) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authUser?.user?.name ? (
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

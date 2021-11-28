import { Card, Tab, Tabs } from "@blueprintjs/core";
import { useState, useContext, useCallback, useEffect } from "react";
import { UserContext } from "./context/UserContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pesutupapp from "./pages/Pesutupapp";
import Loader from "./pages/Loader";

const App = () => {
  const [currentTab, setCurrentTab] = useState("login");
  const [userContext, setUserContext] = useContext(UserContext);
  const url = "http://localhost:8081/";

  const verifyUser = useCallback(() => {
    fetch(url + "users/refreshToken", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        setUserContext((oldValues) => {
          return { ...oldValues, token: data.token };
        });
      } else {
        setUserContext((oldValues) => {
          return { ...oldValues, token: null };
        });
      }
      // call refreshToken every 5 minutes to renew the authentication token.
      setTimeout(verifyUser, 5 * 60 * 1000);
    });
  }, [setUserContext]);

  useEffect(() => {
    verifyUser();
  }, [verifyUser]);

  /**
   * Sync logout across tabs
   */
  const syncLogout = useCallback((event) => {
    if (event.key === "logout") {
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("storage", syncLogout);
    return () => {
      window.removeEventListener("storage", syncLogout);
    };
  }, [syncLogout]);

  return userContext.token === null ? (
    <Card
      elevation="1"
      style={{
        maxWidth: "400px",
        float: "none",
        margin: "0 auto",
        marginTop: "300px",
      }}
    >
      <Tabs id="Tabs" onChange={setCurrentTab} selectedTabId={currentTab}>
        <Tab id="login" title="Login" panel={<Login />} />
        <Tab id="register" title="Register" panel={<Register />} />
        <Tabs.Expander />
      </Tabs>
    </Card>
  ) : userContext.token ? (
    <Pesutupapp />
  ) : (
    <Loader />
  );
};

export default App;

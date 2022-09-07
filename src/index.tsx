import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-bs-vry15.us.auth0.com"
        clientId="0YRJNxe0ShOWNGVXD1vyfFuAAE1ywaci"
        redirectUri={window.location.origin}
      >
        <Provider store={store}>
          <App />
        </Provider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);

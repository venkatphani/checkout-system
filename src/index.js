import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import routes from "./routes";
import { store, persistor } from "./store";
import * as serviceWorker from "./serviceWorker";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";

ReactDOM.render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <Router>
        <App>
          <Header />
          {routes}
          <GlobalStyle />
        </App>
      </Router>
    </Provider>
  </PersistGate>,
  document.getElementById("root")
);

serviceWorker.unregister();

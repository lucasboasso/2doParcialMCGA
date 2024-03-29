import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Routes from "./routes";
import rootReducer from "./redux/reducers/rootReducer";
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "./components/Auth/AuthProvider";

const configureStore = () => {
  const enhancer = composeWithDevTools(
    applyMiddleware(thunk)
  );
  return createStore(rootReducer, enhancer);
};

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <Routes />
        </Router>
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

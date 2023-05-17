import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { getAllcourses } from "./actions/courses";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";


const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    ,
  </StrictMode>,
);

store.dispatch(getAllcourses());

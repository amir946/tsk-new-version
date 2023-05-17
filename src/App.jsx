import { useEffect } from "react";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { theme } from "./Components/MUI/theme";
import { Routes, Route } from "react-router-dom";
import {
  MainLayout,
  Login,
  Register,
  Courses,
  Course,
  Logout,
  Userprofile,
  LayoutDashboard,
  Displayresults,
  CountTodayWorks,
  CountDoWorks,
  CountDoNotWorks,
  ResultsWorks,
  Coursedash,
  Coursesdashboard,
} from "./Components/index";
import { useDispatch } from "react-redux";
import jwt from "jsonwebtoken";
import { addUser, clearUser } from "./actions/user";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
// const UnaffectedText = styled("div")`
//   /* @noflip */
//   text-align: left;
// `;

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwt.decode(token, { complete: true });
      const datNow = Math.floor(Date.now() / 1000);
      if (decodedToken.payload.exp < datNow) {
        localStorage.removeItem("token");
        dispatch(clearUser());
      } else {
        dispatch(addUser(decodedToken.payload.user));
      }
    }
  }, []);

  
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <>
          <Routes>
            <Route path="/layoutDashboard" element={<LayoutDashboard />}>
              <Route index path="/layoutDashboard" element={<Coursedash />} />
              <Route
                path="/layoutDashboard/coursedash"
                element={<Coursedash />}
              />
              <Route
                path="/layoutDashboard/coursesdashboard"
                element={<Coursesdashboard />}
              />
            </Route>
            <Route path="/course/:id" element={<Course />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/displayresults" element={<Displayresults />}>
              <Route
                index
                path="/displayresults"
                element={<CountTodayWorks />}
              />
              <Route
                path="/displayresults/counttodayworks"
                element={<CountTodayWorks />}
              />
              <Route
                path="/displayresults/countdoworks"
                element={<CountDoWorks />}
              />
              <Route
                path="/displayresults/countdonotworks"
                element={<CountDoNotWorks />}
              />
              <Route
                path="/displayresults/resultsworks"
                element={<ResultsWorks />}
              />
            </Route>
            <Route path="/userprofile" element={<Userprofile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<MainLayout />} />
          </Routes>
        </>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;

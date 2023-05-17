import { NavLink, Outlet, useLocation } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { EmptyListWorks } from "../../../actions/emptyListWorks";

const Displayresults = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div id="DivparentDisplayresults">
        <div
          style={{ position: "relative", top: "50px" }}
          className="container z-depth-5 displayresultwork"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "70px",
              backgroundColor: "#4e9dfb",
              border: "3px solid white",
              borderRadius: "10px",
              fontFamily: "BYekan",
              position: "relative",
              bottom: "0px",
            }}
          >
            <div>
              <p style={{ fontSize: "20px", bottom: "15px", color: "white" }}>
                لیست نتایج کارهای امروزتون
              </p>
            </div>
          </div>
        </div>
        <div id="DivBtnsNavbar" className="container">
          <div>
            <NavLink
              to={"/displayresults/counttodayworks"}
              className={({ isActive }) =>
                isActive
                  ? "Activelink btn-small z-depth-3"
                  : "Disiblelink btn-small z-depth-3"
              }
              id="BtnDisplayresults"
            >
              {" "}
              کل کارهای امروز شما
            </NavLink>
          </div>

          <div>
            <NavLink
              to={"/displayresults/countdoworks"}
              className={({ isActive }) =>
                isActive
                  ? "Activelink btn-small z-depth-3"
                  : "Disiblelink btn-small z-depth-3"
              }
              id="BtnDisplayresults"
            >
              {" "}
              کارهای انجام شده
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/displayresults/countdonotworks"
              className={({ isActive }) =>
                isActive
                  ? "Activelink btn-small z-depth-3"
                  : "Disiblelink btn-small z-depth-3"
              }
              id="BtnDisplayresults"
            >
              کارهای انجام نشده
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/displayresults/resultsworks"
              className={({ isActive }) =>
                isActive
                  ? "Activelink btn-small z-depth-3"
                  : "Disiblelink btn-small z-depth-3"
              }
              id="BtnDisplayresults"
            >
              امتیازهای شما
            </NavLink>
          </div>
        </div>
        <Outlet />
        <div style={{ position: "relative", top: "110px" }}>
          <NavLink
            to="/"
            className="waves-effect waves-light btn-small z-depth-3"
            id="BtnDisplayresults3"
            onClick={() => dispatch(EmptyListWorks())}
          >
            ساخت لیست جدید
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Displayresults;

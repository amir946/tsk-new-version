import { useContext } from "react";
import marc from "./marc.jpg";
import { NavLink, Outlet } from "react-router-dom";
import Context from "./Context";
import { useSelector } from "react-redux";

const Slidenav = ({
  setBlur4,
  setBlur5,
  setdisplaydashboard,
  setDisplaycourse,
}) => {
  const context = useContext(Context);
  const { dispslidenav } = context;
  const user = useSelector((state) => state.user);

  const HandleChangeBlur4 = () => {
    setBlur4(false);
    setdisplaydashboard(true);
    setDisplaycourse(false);
  };
  const HandleChangeBlur5 = () => {
    setdisplaydashboard(false);
    setDisplaycourse(true);
    setBlur5(false);
  };

  return (
    <>
      <div className="layoutdashboard ">
        <div
          className={
            dispslidenav
              ? "z-depth-3 displayslidenav"
              : "z-depth-3 slidenavdashboard"
          }
        >
          <div id="slidenavdashboard2">
            <div>
              <img src={marc} alt="" />
            </div>
            <div>
              <p style={{ color: "white" }}>{user.fullname}</p>
              <p>ادمین</p>
            </div>
          </div>
          <div id="ulnavdashboard">
            <ul>
              <NavLink
                onClick={HandleChangeBlur4}
                to="/layoutDashboard/coursedash"
                className={({ isActive }) =>
                  isActive
                    ? "waves-effect waves-light bgActive"
                    : "waves-effect waves-light bgdisibled"
                }
              >
                داشبورد <i className="fa fa-id-card fa-lg"></i>
              </NavLink>
              <NavLink
                onClick={HandleChangeBlur5}
                to="/layoutDashboard/coursesdashboard"
                className={({ isActive }) =>
                  isActive
                    ? "waves-effect waves-light bgActive"
                    : "waves-effect waves-light bgdisibled"
                }
              >
                {" "}
                نمایش دوره ها<i className="fa fa fa-clone fa-lg"></i>
              </NavLink>
              <NavLink
                to="/userprofile"
                className={({ isActive }) =>
                  isActive
                    ? "waves-effect waves-light bgActive"
                    : "waves-effect waves-light bgdisibled"
                }
              >
                پروفایل <i className="a fa fa-clone fa-lg"></i>
              </NavLink>
              <NavLink
                to="/layoutDashboard"
                className="waves-effect waves-light bgdisibled"
              >
                {" "}
                دور های حدف شده <i className="fa fa-trash fa-lg"></i>
              </NavLink>
              <NavLink
                to="/layoutDashboard"
                className="waves-effect waves-light bgdisibled"
              >
                درباره ما <i className="fa fa-question-circle fa-lg"></i>
              </NavLink>
              <NavLink
                to="/logout"
                className={({ isActive }) =>
                  isActive
                    ? "waves-effect waves-light bgActive"
                    : "waves-effect waves-light bgdisibled"
                }
              >
                خروج <i className="fa fa-window-close fa-lg"></i>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Slidenav;

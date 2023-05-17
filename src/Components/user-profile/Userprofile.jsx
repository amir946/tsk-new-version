import img2 from "./img2.jpg";
import { useSelector, useDispatch } from 'react-redux';
import { NavLink,useLocation } from 'react-router-dom';
import { clearUser } from '../../actions/user';
import { isEmpty } from 'lodash';
import { Typography } from "@mui/material";


const Userprofile = () => {
    const location = useLocation();
    const user = useSelector(state=>state.user);
    const dispatch = useDispatch();

    if (isEmpty(user)) return (location.pathname = "/");
    return (
      <>
        <div id="DivMainUserprofile">
          <div className="z-depth-5">
            <div>
              <img src={img2} alt="" style={{ width: "100%" }} />
              <h6 style={{ textAlign: "center" }}>{user.fullname} خوش آمدید</h6>
              <p style={{ textAlign: "center" }}>{user.fullname} خوش آمدید</p>
              <div className="divBtnexitanddashboard">
                <div>
                  <NavLink
                    to="/logout"
                    onClick={() => dispatch(clearUser())}
                    className="btn waves-effect z-depth-3"
                    id="Btnlogin"
                    style={{ backgroundColor: "#04ac04", direction: "ltr" }}
                  >
                    <i
                      className="fa fa-vcard fa-lg"
                      id="SvgLogin"
                      aria-hidden="true"
                    ></i>
                    خروج
                  </NavLink>
                  {user.isAdmin ? (
                    <NavLink
                      to="/layoutDashboard"
                      className="btn  waves-effect z-depth-3"
                      id="Btnlogin2"
                      style={{ backgroundColor: "#04ac04", direction: "ltr" }}
                    >
                      <i
                        className="fa fa-tasks fa-lg"
                        id="SvgLogin"
                        aria-hidden="true"
                      ></i>
                      داشبورد
                    </NavLink>
                  ) : null}
                </div>
              </div>
            </div>
            <div>
              <div>
                <h5>اطلاعات کاربر</h5>
                <hr className="hruserProfile" />
                <Typography>
                  نام کاربری :{" "}
                  <Typography
                    component={"span"}
                    variant={"body2"}
                    style={{ color: "green" }}
                  >
                    {user.fullname}
                  </Typography>
                </Typography>
                <Typography>
                  ایمیل کاریر :{" "}
                  <Typography
                    component={"span"}
                    variant={"body2"}
                    style={{ color: "green" }}
                  >
                    {user.email}
                  </Typography>
                </Typography>
                <p>تاریخ ورود : </p>
                <Typography>
                  وضعیت کاربر :{" "}
                  {user.isAdmin ? (
                    <Typography
                      component={"span"}
                      variant={"body2"}
                      style={{ color: "green" }}
                    >
                      ادمین
                    </Typography>
                  ) : (
                    <Typography style={{ color: "green" }}>معمولی</Typography>
                  )}
                </Typography>
                <p>شهر : </p>
                <p>استان : </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default Userprofile;
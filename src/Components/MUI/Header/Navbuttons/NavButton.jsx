import { NavLink } from "react-router-dom";
import { EmptyListWorks } from "../../../../actions/emptyListWorks";
import { isEmpty } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import style from "./NavButton.module.css"

const NavButton = () => {

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "300px",
        alignItems: "center",
      }}
    >
      {isEmpty(user) ? (
        <div id={style.DivBtsnav}>
          <NavLink
            to="/login"
            onClick={() => dispatch(EmptyListWorks())}
            className="btn waves-effect z-depth-3"
            id={style.Btnlogin}
          >
            <i className="fa fa-user fa-lg" id={style.SvgLogin}></i>
            <span >
              ورود
            </span>
          </NavLink>
          <NavLink
            to="/register"
            onClick={() => dispatch(EmptyListWorks())}
            className="btn  waves-effect z-depth-3"
            id={style.Btnlogin2}
          >
            <i
              className="fa fa-address-card fa-lg"
              id={style.SvgLogin}
              aria-hidden="true"
            ></i>
            <span >
              ثبت نام
            </span>
          </NavLink>
        </div>
      ) : (
        <div id={style.DivBtsnav}>
          <NavLink
            to="/logout"
            onClick={() => dispatch(EmptyListWorks())}
            className="btn  waves-effect z-depth-3"
            id={style.Btnlogin2}
            style={{ backgroundColor: "#04ac04" }}
          >
            <i
              className="fa fa-window-close fa-lg"
              id={style.SvgLogin}
              aria-hidden="true"
            ></i>
            <span >
              خروج
            </span>
          </NavLink>
          <NavLink
            to="/userprofile"
            onClick={() => dispatch(EmptyListWorks())}
            className="btn waves-effect z-depth-3"
            id={style.Btnlogin}
            style={{ backgroundColor: "#04ac04", whiteSpace: "nowrap" }}
          >
            <i
              className="fa fa-vcard fa-lg"
              id={style.SvgLogin}
              aria-hidden="true"
            ></i>
            {user.fullname}
          </NavLink>
        </div>
      )}
    </div>
  );
};
export default NavButton;

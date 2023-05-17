import { Fragment, useState } from "react";
import clsx from "clsx";

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { EmptyListWorks } from "../../../../actions/emptyListWorks";
import { isEmpty } from "lodash";
import React from "react";
import style from "./SlideNav.module.css";
import { setblur } from "../../../../actions/setblur";
import { styled } from "@mui/system";

const useStyles = styled({
  list: { width: 250 },
  fullList: { width: "auto" },
});
const styleList = {
  fontFamily: "vazir",
};
const SlideNav = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const dispatch = useDispatch();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const user = useSelector((state) => state.user);
  const handleToast = () => {
    dispatch(setblur());
    setTimeout(() => {
      dispatch(setblur());
    }, 8000);
    toast.warn(
      "شما ادمین نیستید برای ورود به داشبورد  و  مشاهده ایمیل و رمز عبور ادمین روی دکمه راهنمای کاربر در پایین صفحه سمت راست کلیک کنید",
      {
        position: "top-center",
        closeOnClick: true,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        autoClose: 7000,
        progress: undefined,
        theme: "dark",
        rtl: true,
        bodyStyle: {
          fontFamily: "vazir",
        },
      },
    );
  };

  const list = (anchor) => (
    <div
      style={{ marginTop: "40px" }}
      id="DivParentSlidenav"
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ul
        id={style.ListMenu}
        style={{ position: "relative", marginTop: "155px" }}
      >
        {isEmpty(user) ? (
          <NavLink to="/login" onClick={() => dispatch(EmptyListWorks())}>
            <Button id={style.li} size="small" className={classes.margin}>
              <i className="fa fa-user fa-lg" id={style.SvgLogin2}></i>

              <span component={"span"} variant={"body2"}>
                ورود{" "}
              </span>
            </Button>{" "}
          </NavLink>
        ) : null}

        {isEmpty(user) ? (
          <NavLink to="/register" onClick={() => dispatch(EmptyListWorks())}>
            <Button id={style.li} size="small" className={classes.margin}>
              <i
                className="fa fa-address-card fa-lg"
                id={style.SvgLogin2}
                aria-hidden="true"
              ></i>
              <span>عضویت</span>
            </Button>{" "}
          </NavLink>
        ) : null}

        {!isEmpty(user) ? (
          <Link to="/userprofile" onClick={() => dispatch(EmptyListWorks())}>
            <Button id={style.li} size="small" className={classes.margin}>
              <i
                className="fa fa fa-clone fa-lg"
                id={style.SvgLogin2}
                aria-hidden="true"
              ></i>
              <span>پروفایل کاربری</span>
            </Button>
          </Link>
        ) : (
          <Link to="/courses" onClick={() => dispatch(EmptyListWorks())}>
            <Button id={style.li} size="small" className={classes.margin}>
              <i
                className="fa fa fa-clone fa-lg"
                id={style.SvgLogin2}
                aria-hidden="true"
              ></i>
              <span> مشاهده دوره ها</span>
            </Button>
          </Link>
        )}
      </ul>
      <Divider />
      <ul id={style.ListMenu}>
        {user.isAdmin ? (
          <NavLink
            to="/LayoutDashboard"
            onClick={() => dispatch(EmptyListWorks())}
          >
            <Button id={style.li} size="small" className={classes.margin}>
              <i
                className="fa fa-id-card fa-lg"
                id={style.SvgLogin2}
                aria-hidden="true"
              ></i>
              <span>داشبورد</span>
            </Button>
          </NavLink>
        ) : (
          <NavLink to="/" onClick={() => dispatch(EmptyListWorks())}>
            <Button
              id={style.li1}
              onClick={handleToast}
              size="small"
              className={classes.margin}
            >
              <i
                className="fa fa-id-card fa-lg"
                id={style.SvgLogin2}
                aria-hidden="true"
              ></i>
              <span>داشبورد</span>
            </Button>
          </NavLink>
        )}

        {/* <NavLink to="/"> */}
        <Button id={style.li} size="small" className={classes.margin}>
          <i
            className="fa fa-question-circle fa-lg"
            id={style.SvgLogin2}
            aria-hidden="true"
          ></i>

          <span>راهنمایی</span>
        </Button>
        {/* </NavLink> */}

        {/* <NavLink to="/"> */}
        <Button id={style.li} size="small" className={classes.margin}>
          <i
            className="fa fa-info-circle fa-lg"
            id={style.SvgLogin2}
            aria-hidden="true"
          ></i>

          <span>درباره ما</span>
        </Button>
        {/* </NavLink> */}
      </ul>
    </div>
  );
  return (
    <div>
      {["left"].map((anchor) => (
        <Fragment key={anchor}>
          <span
            component={"span"}
            variant={"body2"}
            onClick={toggleDrawer(anchor, true)}
            className={style.BtnMenu}
          >
            <i className=" fa fa-bars fa-l "></i>
          </span>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
};
export default SlideNav;

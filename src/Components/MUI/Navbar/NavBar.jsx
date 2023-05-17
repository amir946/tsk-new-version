import { AppSideBar, NavButton, HeaderLogo } from "../../../Components/index";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <div id={style.nav}>
        <AppSideBar/>
        <HeaderLogo />
        <NavButton/>
      </div>
    </>
  );
};
export default NavBar;

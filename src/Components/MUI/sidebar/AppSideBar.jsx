import { SlideNav } from "../../index";
import style from "./SideBar.module.css";

const AppSideBar = () => {
  return (
    <div
      id={style.btnnav}
      style={{
        display: "flex",
        justifyContent: "flex-end",
        width: "300px",
        alignItems: "flex-end",
      }}
    >
      <div>
        <SlideNav />{" "}
      </div>
    </div>
  );
};
export default AppSideBar;

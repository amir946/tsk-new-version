import { Typography } from "@mui/material";
import style from "./HeaderLogo.module.css";
const HeaderLogo = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "300px",
        alignItems: "center",
      }}
    >
      <div id={style.Divtaskmanahment2}>
        {/* <a href="#dfdffd"> */}
          <Typography id="Logo">
            Task
            <Typography component={"span"} variant={"body2"} id="Logo2">
              Managment
            </Typography>
          </Typography>
        {/* </a> */}
      </div>
    </div>
  );
};
export default HeaderLogo;

import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";


const HeaderDashboard =({ModalCreateNC})=>{
    return (
      <div>
        <NavLink
          to="/LayoutDashboard"
          style={{ position: "relative" }}
          onClick={ModalCreateNC}
          className="waves-effect "
        >
          <Typography component={"span"} variant={"body2"}>
            <i
              style={{ position: "relative", top: "6px" }}
              className="fa fa-plus-circle fa-2x"
            ></i>{" "}
            ساخت دوره جدید
          </Typography>
        </NavLink>
      </div>
    );
};
export default HeaderDashboard;
import { Typography } from "@mui/material";
import React from "react";
const HeaderCourses = ({countCoursess})=>{
    return (
      <>
        <div className="container  containerCourses">
          <h5 style={{ textAlign: "center" }}>
            دوره های آموزش برنامه نویسی وب
          </h5>
        </div>
        <div className="connumbercourses ">
          <div className="z-depth-1">
            <Typography
              style={{ textAlign: "center", color: "black", fontSize: "17px" }}
            >
              {" "}
              تعداد دوره ها :{" "}
              <Typography component={"span"} variant={"body2"}>
                {countCoursess}{" "}
              </Typography>
            </Typography>
          </div>
        </div>
      </>
    );
};
export default HeaderCourses;
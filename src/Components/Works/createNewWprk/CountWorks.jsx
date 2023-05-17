import style from "./Style.module.css";
import { Alert, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const CountWorks = () => {

  const works = useSelector((state) => state.works);
  return (
    <div>
      <a href="" id={style.AlertNumberwork}>
        <Alert variant="filled" icon={false} id={style.Alert}>
          تعداد کارهای وارد شده :{" "}
          <Typography 
            component={"span"}
            variant={"body2"}
            style={{ fontSize: "18px", color: "white", fontWeight: "bold" }}
          >
            {works.length}{" "}
          </Typography>{" "}
          مورد است
        </Alert>
      </a>
    </div>
  );
};
export default CountWorks;

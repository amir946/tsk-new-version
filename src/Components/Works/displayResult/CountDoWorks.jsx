import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";


const CountDoWorks = () => {
    
        const doworks = useSelector((state) => state.doworks);

    return (
      <div id="Div1btn2" className="z-depth-3">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ width: "400px" }}>
            <div id="DivAlertdisplayresults" className="z-depth-1 ">
              <Typography>
                تعداد کل کارهایی که انجام دادید :{" "}
                <Typography
                  component={"span"}
                  variant={"body2"}
                  id="Numberworks"
                >{`${doworks.length}`}</Typography>{" "}
                <Typography component={"span"} variant={"body2"}>
                  {" "}
                  مورد است
                </Typography>
              </Typography>
            </div>
          </div>
          <div></div>
        </div>
        {doworks.length === 0 ? (
          <div>
            <i
              className="fa fa-folder-open-o fa-3x"
              id="SvgEmpty3"
              aria-hidden="true"
            ></i>
            <p id="styleEmptyworks2">
              <i
                className="fa fa-frown-o fa-lg"
                id="SvgEmojie2"
                aria-hidden="true"
              ></i>
              امروز هیچ کاری انجام ندادی
            </p>
          </div>
        ) : (
          <div
            className="scroll2"
            id="scrollbar"
            style={{ backgroundColor: "#BFBFBF" }}
          >
            {doworks.map((wo) => (
              <ul key={wo.id} id="Ullistwo">
                <li>
                  <Link
                    to="#fgfkk"
                    className="waves-effect waves-light btn-small z-depth-1"
                    id="BtnDisplayresults2"
                  >
                    {`${wo.fullnamedowork}`}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        )}
      </div>
    );
};
export default CountDoWorks;
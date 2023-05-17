import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";


const CountTodayWorks = () =>{

    const works = useSelector((state) => state.works);
    const styleEmptyworks = {
        color: "#595959",
        position: "relative",
        top: "75px",
        left: "50px",
        textAlign: "center",
        fontSize: "14px",
        fontFamily:"vazir"  
    }
    
    return (
      <div id="Div1btn" className="z-depth-3">
        <div>
          <div id="DivAlertdisplayresults" className="z-depth-1 ">
            <Typography>
              تعداد کل کارهای امروزتان :{" "}
              <Typography
                component={"span"}
                variant={"body2"}
                id="Numberworks"
              >{`${works.length}`}</Typography>{" "}
              <Typography component={"span"} variant={"body2"}>
                {" "}
                مورد است
              </Typography>
            </Typography>
          </div>
        </div>
        {works.length === 0 ? (
          <div style={{ position: "relative", left: "40px" }} id="divnotwork">
            <i
              className="fa fa-folder-open-o fa-3x"
              id="SvgEmpty2"
              aria-hidden="true"
            ></i>
            <p style={styleEmptyworks}>
              <i
                className="fa fa-frown-o fa-lg"
                id="SvgEmojie2"
                aria-hidden="true"
              ></i>
              امروز هیچ کاری وارد نکردی
            </p>
          </div>
        ) : (
          <div
            className="scroll2"
            id="scrollbar"
            style={{
              backgroundColor: "#BFBFBF",
              position: "relative",
              left: "14px",
            }}
          >
            {works.map((wo) => (
              <ul key={wo.id} id="Ullistwo">
                <li>
                  <Link
                    to="#gfgf"
                    className="waves-effect waves-light btn-small z-depth-1"
                    id="BtnDisplayresults2"
                  >
                    {`${wo.fullnamework}`}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        )}
      </div>
    );
};
export default CountTodayWorks;
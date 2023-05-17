import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const ResultsWorks = () => {

     const doworks = useSelector((state) => state.doworks);
     const donotworks = useSelector((state) => state.donotworks);
    return (
      <div id="Div1btn3" className="z-depth-3">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ width: "400px" }}>
            <div id="DivAlertdisplayresults" className="z-depth-1 ">
              <p>
                تعداد کل کارهایی که انجام ندادید :{" "}
                <Typography
                  component={"span"}
                  variant={"body2"}
                  id="Numberworks"
                >
                  {`${donotworks.length}`}
                </Typography>{" "}
                <Typography component={"span"} variant={"body2"}>
                  {" "}
                  مورد است
                </Typography>
              </p>
            </div>
          </div>
          <div id="AnimatedProgressProvider"></div>
        </div>
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
          <div id="AnimatedProgressProvider"></div>
        </div>
      </div>
    );
};
export default ResultsWorks;
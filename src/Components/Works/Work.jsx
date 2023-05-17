import { Typography } from "@mui/material";

const Work = ({ fullnamework, handledeletework, handledoworks }) => {
    return (
      <>
        <div id="Divwork">
          <div>
            <h6>{`${fullnamework}`}</h6>
          </div>
          <div>
            <button onClick={handledeletework}>
              <i
                className="fa fa-trash fa-lg"
                id="SvgDeleteWork"
                aria-hidden="true"
              ></i>
            </button>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                className="filled-in "
                onChange={handledoworks}
              />
              <Typography
                component={"span"}
                variant={"body2"}
                style={{ fontSize: "12px" }}
                className="green-text"
              >
                انتخاب این کار
              </Typography>
            </label>
          </div>
        </div>
      </>
    );}
export default Work;
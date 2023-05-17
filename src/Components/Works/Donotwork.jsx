import { Typography } from "@mui/material";

const Donotwork = ({ fullnamedonotwork }) => {
    return (
      <>
        <div id="Divwork">
          <div>
            <h6>{`${fullnamedonotwork}`}</h6>
          </div>
          <div
            style={{ position: "relative", left: "15px" }}
            id="divBtnsuccess"
          >
            <Typography
              component={"span"}
              variant={"body2"}
              className="red-text"
            >
              کارتو موفق شدی انجام بدی
            </Typography>
            <a
              href="##gfg"
              className="btn-floating btn-small waves-effect waves-light red z-depth-1"
              id="Btnsuccess"
            >
              <i
                className="fa fa-frown-o fa-lg"
                id="success"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>
      </>
    );
}

export default Donotwork;
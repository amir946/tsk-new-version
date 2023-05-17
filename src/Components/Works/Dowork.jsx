import { Typography } from "@mui/material";

const Dowork = ({ fullnamedowork }) => {
    return (
      <>
        <div id="Divwork">
          <div>
            <h6>{`${fullnamedowork}`}</h6>
          </div>
          <div
            style={{ position: "relative", left: "15px" }}
            id="divBtnsuccess"
          >
            <Typography
              component={"span"}
              variant={"body2"}
              className="green-text"
            >
              کارتو موفق شدی انجام بدی
            </Typography>
            <a
              href="#gf"
              className="btn-floating btn-small waves-effect waves-light green"
              id="Btnsuccess"
            >
              <i className="fa fa-smile-o" id="success1" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </>
    );
}

export default Dowork;
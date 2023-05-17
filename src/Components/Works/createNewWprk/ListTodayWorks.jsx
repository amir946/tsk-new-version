import { Works } from "../../index"
import style from "./Style.module.css";
import { useSelector } from "react-redux";

const ListTodayWorks = () => {

    const works = useSelector((state) => state.works);

  const styleEmptyworks = {
    color: "#BFBFBF",
    position: "relative",
    top: "75px",
    left: "0px",
    textAlign: "center",
    fontSize: "14px",
  };

  return (
    <div>
      <div className="z-depth-3 white-text scroll" id={style.scrollbar}>
        {works.length !== 0 ? (
          <div>
            <h6 className="black-text H6">لیست کاراهای امروزتان</h6>
            <Works />
          </div>
        ) : (
          <div>
            <i
              className="fa fa-folder-open-o fa-3x"
              id={style.SvgEmpty}
              aria-hidden="true"
            ></i>
            <p style={styleEmptyworks}>هیچ کاری یافت نشد</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default ListTodayWorks;

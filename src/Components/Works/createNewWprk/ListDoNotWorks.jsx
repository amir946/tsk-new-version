import DoWorks from "../DoWorks";
import style from "./Style.module.css";
import { useSelector } from "react-redux";


const ListDoNotWorks = () => {

   const doworks = useSelector((state) => state.doworks);
    const styleEmptyworks = {
        color: "#BFBFBF",
        position: "relative",
        top: "75px",
        left: "0px",
        textAlign: "center",
        fontSize: "14px"
    }
    
    return (
      <div className="z-depth-3 scroll" id={style.scrollbar}>
        {doworks.length !== 0 ? (
          <div className="dWorks">
            <h6 className="black-text H6">لیست کاراهای انجام شده</h6>
            <DoWorks />
          </div>
        ) : (
          <div>
            <i
              className="fa fa-folder-open-o fa-3x"
              id={style.SvgEmpty}
              aria-hidden="true"
            ></i>
            <p style={styleEmptyworks}>هیچ کاری انجام نداده ای</p>
          </div>
        )}
      </div>
    );
};
export default ListDoNotWorks;
import Donotworks from "../Donotworks";
import style from "./Style.module.css";
import { useSelector } from "react-redux";


const ListDoWorks = () =>{

     const donotworks = useSelector((state) => state.donotworks);
    const styleEmptyworks = {
        color: "#BFBFBF",
        position: "relative",
        top: "75px",
        left: "0px",
        textAlign: "center",
        fontSize: "14px"
    }
    
    return (
      <div>
        <div className="z-depth-3 scroll" id={style.scrollbar}>
          {donotworks.length !== 0 ? (
            <div className="dWorks">
              <h6 className="black-text H6">لیست کاراهای انجام نشده</h6>
              <Donotworks />
            </div>
          ) : (
            <div>
              <i
                className="fa fa-folder-open-o fa-3x"
                id={style.SvgEmpty}
                aria-hidden="true"
              ></i>
              <p style={styleEmptyworks}>هیچ کارانجام نشده ای نداری</p>
            </div>
          )}
        </div>
      </div>
    );
};
export default ListDoWorks;
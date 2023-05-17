import { NavLink } from 'react-router-dom';
import style from "./Style.module.css";
import {ListTodayWorks,ListDoNotWorks,ListDoWorks,CountWorks,CreateWork} from "../../index";

const CreateNewWork = () => {
      return (
      <>
        <div>
          <div
            id={style.DivParentInputCreatework}
            style={{ position: "relative", marginBottom: "10px" }}
          >
            <CreateWork />
            <CountWorks/>
          </div>
          <div id={style.div111}>
            <ListDoWorks />
            <div>
              <ListDoNotWorks />
            </div>
            <ListTodayWorks />
          </div>
          <div id={style.DivBtnResult}>
            <div>
              <NavLink
                to="/displayresults"
                id={style.BtnWork}
                className="btn waves-effect waves-light  z-depth-3"
              >
                مشاهده نتایج{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
}

export default CreateNewWork;
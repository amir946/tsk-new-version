import { useDispatch, useSelector } from 'react-redux';
import {Handleaddwork} from '../../../actions/Handleaddwork';
import {Handlecreatenewwork} from '../../../actions/Handlecreatenewwork';
import style from "./Style.module.css";


const CreateWork = ()=>{

    const work = useSelector(state => state.work);
    const donotwork =useSelector(state => state.donotwork)
    const dispatch = useDispatch();

    return (
      <div className="row">
        <form className="" onSubmit={(event) => event.preventDefault()}>
          <div className="row">
            <div
              className="col s12  z-depth-3"
              id={style.divinputCreateNewWork}
            >
              <input
                onChange={(event) => dispatch(Handleaddwork(event))}
                value={work}
                placeholder="چه کاری میخوای انجام بدی؟"
                type="text"
              />
              <button
                type="submit"
                onClick={() => dispatch(Handlecreatenewwork(work, donotwork))}
                className="btn-floating btn-large waves-effect waves-light z-depth-3 1#2196f3 "
              >
                <i
                  className="fa fa-plus-circle fa-3x"
                  id={style.SvgPlus}
                  aria-hidden="true"
                ></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
};
export default CreateWork;
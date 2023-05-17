import  {useContext } from 'react';
import  Context  from './Context';
import { Link } from 'react-router-dom';



const Navdashboard = () => {

    const context = useContext(Context);
    const {dropdown,handledisplayslidenav,handleDropdown} = context;
    
    return (
      <>
        <nav id="navDashboard" className="">
          <div className="nav-wrapper">
            <i className="fa fa-bars fa-l" onClick={handledisplayslidenav}></i>
            <p href="#!" className="right brand-logo">
              {" "}
              داشبورد{" "}
            </p>
            <ul
              className="left hide-on-med-and-down"
              style={{ display: "inline" }}
            >
              <div id="DivMainBtnDropdown">
                <div id="DivBtnDropdown">
                  <a
                    onClick={handleDropdown}
                    className=""
                    id="Btnlogindashboared"
                  >
                    پروفایل
                  </a>
                </div>
              </div>
            </ul>
          </div>
        </nav>
        {dropdown ? (
          <div className="dropdown12 z-depth-1 animate__animated animate__flipInX ">
            <ul>
              <li>
                {" "}
                <i
                  className="fa fa-user fa-lg"
                  id="Svgdashboard1"
                  aria-hidden="true"
                ></i>
                <Link className="waves-effect" to="/userprofile">
                  امیرحیدری
                </Link>
              </li>
              <hr />
              <li>
                <i
                  className="fa fa-sign-in fa-lg"
                  id="Svgdashboard2"
                  aria-hidden="true"
                ></i>
                <Link className="waves-effect" to="/userprofile">
                  ورود
                </Link>
              </li>
              <hr />
              <li>
                <i
                  className="fa fa-sign-out fa-lg"
                  id="Svgdashboard3"
                  aria-hidden="true"
                ></i>
                <Link className="waves-effect" to="/logout">
                  خروج
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </>
    );
}
 
export default Navdashboard;
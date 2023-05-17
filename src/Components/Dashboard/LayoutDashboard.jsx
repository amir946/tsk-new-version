import { useState } from "react";
import Context from "./common/Context";
import { useDispatch } from "react-redux";
import { getAllcourses } from "./../../actions/courses";
import {
  Slidenav,
  Navdashboard,
  CreateNewCourse,
  UpdateCourse,
  DeleteCourse,
} from "../index";

const LayoutDashboard = () => {
  const dispatch = useDispatch();
  dispatch(getAllcourses());
  const [dropdown, setDropdown] = useState(false);
  const [displaycourse, setDisplaycourse] = useState(false);
  const [displaydashboard, setdisplaydashboard] = useState(true);
  const [classblur1, setBlur1] = useState(false);
  const [classblur2, setBlur2] = useState(false);
  const [classblur3, setBlur3] = useState(false);
  const [classblur4, setBlur4] = useState(false);
  const [classblur5, setBlur5] = useState(true);
  const [course, setCourse] = useState([]);
  const [dispslidenav, setdispslidenav] = useState(false);
  const hiddenDropdown = () => {
    setDropdown(false);
    setdispslidenav(false);
  };
  const handleModalCreateNewCourse = () => {
    setBlur1(true);
  };
  const handleModalUpdateCourse = (course) => {
    setBlur2(true);
    setCourse(course);
  };
  const handleModalDeleteCourse = (course) => {
    setBlur3(true);
    setCourse(course);
  };
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  const handledisplayslidenav = () => {
    setdispslidenav(!dispslidenav);
    setBlur4(!classblur4);
    setBlur5(!classblur5);
  };
  const handleclozemodal = () => {
    setBlur2(false);
    setBlur3(false);
  };

  return (
    <Context.Provider
      value={{
        dropdown,
        displaycourse,
        dispslidenav,
        displaydashboard,
        classblur1,
        classblur2,
        classblur3,
        classblur4,
        classblur5,
        handleDropdown,
        handledisplayslidenav,
        handleclozemodal,
        handleModalUpdateCourse,
        handleModalCreateNewCourse,
        handleModalDeleteCourse,
      }}
    >
      <>
        <div className={classblur1 || classblur2 || classblur3 ? "blur" : null}>
          <Navdashboard />
          <div id="DivMaindashboard" onClick={hiddenDropdown}>
            <Slidenav
              setDisplaycourse={setDisplaycourse}
              setdisplaydashboard={setdisplaydashboard}
              setBlur5={setBlur5}
              setBlur4={setBlur4}
            />
            {/* {displaycourse ? <Coursesdashboard /> : null}
            {displaydashboard ? <Coursedash /> : null} */}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ position: "fixed" }}>
            <CreateNewCourse setBlur1={setBlur1} classblur1={classblur1} />
            <UpdateCourse setBlur2={setBlur2} course={course} />
            <DeleteCourse setBlur3={setBlur3} course={course} />
          </div>
        </div>
      </>
    </Context.Provider>
  );
};
export default LayoutDashboard;

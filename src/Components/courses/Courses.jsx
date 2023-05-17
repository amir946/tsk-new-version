import {  useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { pagination } from './../../Utils/pagination';
import { range } from 'lodash';
import ClipLoader from "react-spinners/ClipLoader";
import {Showimage,HeaderCourses,Pagination} from "../index";
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

const Courses = () => {

    const courses = useSelector((state) => state.courses);
    const [perPage] = useState(7);
    const [currentPage , setcurrentPage] = useState(1);
    const [render] = useState(true)
    
    const handlePage = (page)=>{
        setcurrentPage(page);
    }
    const coursesLength = pagination(courses , currentPage , perPage);
    const conterPage = Math.ceil(courses.length / perPage);
    const pages = range(1, conterPage + 1);
 
    return (
      <>
        <HeaderCourses countCoursess={courses.length} />
        <div className="contcourses">
          <div className="z-depth-1">
            {coursesLength.map((course) => (
              <div className="z-depth-1" key={course._id}>
                <Link to={`/course/${course._id}`}>
                  {render ? (
                    <div>
                      {/* <img src={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`} alt="" style={{width:"350px",height:"220px"}}/> */}
                      <Showimage image={course.imageUrl} />
                      {courses.length === 0 ? (
                        <div id="spiner">
                          <ClipLoader size={35} loading={true} id="spiner" />
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </Link>
                <h6>
                  <NavLink to={`/course/${course._id}`}>{course.title}</NavLink>
                </h6>
                <Typography
                  style={{
                    textAlign: "center",
                    color: "black",
                    fontSize: "15px",
                  }}
                >
                  قیمت :{" "}
                  {course.price === 0 ? (
                    <Typography
                      component={"span"}
                      variant={"body2"}
                      style={{ color: "green" }}
                    >
                      رایگان
                    </Typography>
                  ) : (
                    <Typography
                      component={"span"}
                      variant={"body2"}
                      style={{ color: "green" }}
                    >
                      {course.price}
                      <Typography
                        component={"span"}
                        variant={"body2"}
                        style={{ fontSize: "12px" }}
                      >
                        {" "}
                        تومان
                      </Typography>{" "}
                    </Typography>
                  )}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <Pagination
          pages={pages}
          currentPage={currentPage}
          handlePage={handlePage}
        />
      </>
    );
}

export default Courses;
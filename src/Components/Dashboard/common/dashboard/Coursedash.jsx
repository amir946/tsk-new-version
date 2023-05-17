import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { range } from "lodash";
import { pagination } from "../../../../Utils/pagination";
import { NavLink } from "react-router-dom";
import Context from "../Context";
import {
  SearchCoursess,
  HeaderDashboard,
  PaginationDshboard,
} from "../../../index";
import { Typography } from "@mui/material";

const Coursedash = () => {
  const context = useContext(Context);
  const {
    classblur4,
    handleModalCreateNewCourse,
    handleModalUpdateCourse,
    dispslidenav,
    setBlur3,
    setCourse,
    handleModalDeleteCourse,
  } = context;
  const courses = useSelector((state) => state.courses);
  const [perPage] = useState(5);
  const [currentPage, setcurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const flitredcourses = courses.filter((course) =>
    course.title.includes(search),
  );
  const counterPage = Math.ceil(flitredcourses.length / perPage);
  const pages = range(1, counterPage + 1);
  const handlePage = (page) => {
    setcurrentPage(page);
  };
  const numberPage = pagination(flitredcourses, currentPage, perPage);

  return (
    <>
      <div
        className={classblur4 ? "backgroundBlur" : null}
        id="rootDivDashboardBody"
      >
        <div style={{ position: "relative", marginTop: "60px", zIndex: "0" }}>
          <div
            id="divparentdashboard"
            style={{ position: "relative", marginBottom: "0px" }}
          >
            <SearchCoursess setSearch={setSearch} />
            <HeaderDashboard ModalCreateNC={handleModalCreateNewCourse} />
          </div>
        </div>
        <div id="Divtable">
          <div>
            <table>
              <thead>
                <tr id="td1">
                  <th> عنوان دوره</th>
                  <th>تصویر </th>
                  <th>
                    قیمت{" "}
                    <Typography
                      component={"span"}
                      variant={"body2"}
                      id="Typographyprice"
                    >
                      (تومان)
                    </Typography>
                  </th>
                  <th>ویرایش</th>
                  <th>حذف </th>
                </tr>
              </thead>
              {numberPage.map((course) => (
                <tbody key={course._id}>
                  <tr id="trTable">
                    <td>{course.title}</td>
                    <td>
                      <a
                        href={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`}
                        target="_blank"
                        className="btn waves-effect z-depth-3"
                      >
                        نمایش تصویر
                      </a>
                    </td>
                    <td>{course.price === 0 ? "رایگان" : course.price}</td>
                    <td>
                      <NavLink
                        to="/LayoutDashboard"
                        onClick={() => handleModalUpdateCourse(course)}
                        className="btn waves-effect z-depth-3"
                      >
                        ویرایش دوره
                      </NavLink>
                    </td>
                    <td>
                      <NavLink
                        to="/LayoutDashboard"
                        onClick={() => handleModalDeleteCourse(course)}
                        className="btn waves-effect z-depth-3"
                      >
                        حذف دوره
                      </NavLink>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>

        {courses.length === 0 || dispslidenav ? null : (
          <PaginationDshboard
            pages={pages}
            currentPage={currentPage}
            handlePage={handlePage}
          />
        )}
      </div>
    </>
  );
};

export default Coursedash;

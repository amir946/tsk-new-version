import  { useContext } from 'react';
import { useSelector } from 'react-redux';
import emptyImg from "./emptyImg.jpg";
import  Context  from './common/Context';
import { Typography } from '@mui/material';


const Coursesdashboard = () => {

    const context = useContext(Context);
    const {classblur5} = context;
    const courses = useSelector(state => state.courses);
    return (
      <>
        <div className={classblur5 ? "backgroundBlur" : null}>
          <div id="Divcoursesdashboard">
            <div className="z-depth-3 container">
              {" "}
              <Typography>
                تعداد دوره ها{" "}
                <Typography
                  component={"span"}
                  variant={"body2"}
                  className="z-depth-1"
                >
                  {courses.length}
                </Typography>{" "}
                مورد می باشد
              </Typography>
            </div>
            {courses.length === 0 ? (
              <div className="z-depth-0">
                <h5>هیچ دوره ای برای نمایش یافت نشد</h5>
                <img src={emptyImg} alt="" />
              </div>
            ) : null}
          </div>
          {courses.length === 0 ? null : (
            <div id="DivMainCoursedashboard" className="scrolldashboard">
              {courses.map((course) => (
                <div key={course._id} className="z-depth-3 ">
                  <div className="z-depth-5" id="titlecourse">
                    {course.title}
                  </div>
                  <div>
                    <Typography className="statusecourse">
                      {" "}
                      وضعیت دوره :{" "}
                      <Typography component={"span"} variant={"body2"}>
                        {" "}
                        به اتمام رسیده{" "}
                      </Typography>
                    </Typography>
                  </div>
                  <div>
                    <Typography className="timecourse">
                      زمان دوره :{" "}
                      <Typography component={"span"} variant={"body2"}>
                        22 : 26 دقیقه
                      </Typography>
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </>
    );
}
export default Coursesdashboard;
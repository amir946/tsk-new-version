import { registerUser } from "./../../Services/userservice";
import { toast } from "react-toastify";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { addUser } from "./../../actions/user";
import style from "./Registerstyle.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { formRegisterSchema } from "../Validatios/validationRegisterForm";
import { Typography } from "@mui/material";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

  const handleSubmit = async (values) => {
    try {
      const { status } = await registerUser(values);
      if (status === 201) {
        toast.success("ثبت نام با موقیت انجام شد", {
          closeOnClick: true,
          theme: "dark",
          bodyStyle: { fontFamily: "vazir" },
        });

        navigate("/login");
        dispatch(addUser(user));
      }
    } catch (ex) {
      toast.error("مشکلی رخ داده ", {
        closeOnClick: true,
        theme: "dark",
        bodyStyle: { fontFamily: "vazir" },
      });
    }
  };
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Register</title>
        </Helmet>
      </HelmetProvider>
      <Formik
        initialValues={{
          fullname: "",
          password: "",
          email: "",
          policy: false,
        }}
        validationSchema={formRegisterSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        <Form className={style.formSignin} style={{ marginTop: "50px" }}>
          <div style={{ textAlign: "center" }}>
            <i
              className="fa fa-id-card fa-4x"
              id="Layer_1"
              aria-hidden="true"
            ></i>
            <h5 className="h3 mb-3 font-weight-normal">ثبت نام کاربر</h5>
          </div>
          <div className={style.formLabelGroup}>
            <Field
              name="fullname"
              type="text"
              id="inputText"
              style={{ fontFamily: "BYekan" }}
              className="form-control"
              placeholder="Email address"
            />
            <label>نام کاربری</label>
            <ErrorMessage
              name="fullname"
              render={(msg) => <div className={style.errorMsg}>{msg}</div>}
            />
          </div>
          <div className={style.formLabelGroup}>
            <Field
              name="email"
              type="email"
              id="inputEmail"
              style={{ fontFamily: "BYekan" }}
              className="form-control"
              placeholder="Email address"
            />
            <label htmlFor="inputEmail">ایمیل</label>
            <ErrorMessage
              name="email"
              render={(msg) => <div className={style.errorMsg}>{msg}</div>}
            />
          </div>

          <div className={style.formLabelGroup}>
            <Field
              name="password"
              type="password"
              id="inputPassword"
              style={{ fontFamily: "BYekan" }}
              className="form-control"
              placeholder="Password"
            />
            <label htmlFor="inputPassword">رمز عبور</label>
            <ErrorMessage
              name="password"
              render={(msg) => <div className={style.errorMsg}>{msg}</div>}
            />
          </div>

          <div className="checkbox mb-3" style={{ direction: "rtl" }}>
            <Typography>
              <label>
                <Field type="checkbox" name="policy" />
                <Typography
                  component={"span"}
                  variant={"body2"}
                  style={{ color: "#595959" }}
                >
                  شرابط و قواتین را می پذیرم
                </Typography>
                <ErrorMessage
                  name="policy"
                  render={(msg) => <div className={style.errorMsg}>{msg}</div>}
                />
              </label>
            </Typography>
            <button
              id={style.BtnSubmitLogin}
              className="waves-effect waves-light  btn-large z-depth-3"
              type="submit"
            >
              ثبت نام
            </button>
            <p id={style.CopyrightsText}>&copy; 2017-2020</p>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default Register;

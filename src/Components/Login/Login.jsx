import { toast } from "react-toastify";
import { loginUser } from "../../Services/userservice";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Helmet,HelmetProvider } from "react-helmet-async";
import { addUser } from "../../actions/user";
import jwt from "jsonwebtoken";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import style from "./Loginstyle.module.css";
import { formLoginSchema } from "../Validatios/validationLoginForm";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Typography } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleSubmit = async (values) => {
    try {
      const { status, data } = await loginUser(values);
      if (status === 200) {
        toast.success("ورود انجام شد", {
          position: "top-right",
          closeOnClick: true,
          theme: "dark",
          bodyStyle: { fontFamily: "vazir" },
        });

        localStorage.setItem("token", data.token);
        const decodedToken = jwt.decode(data.token, { complete: true });
        dispatch(addUser(decodedToken.payload.user));
        navigate("/");
      }
    } catch (ex) {
      toast.error("نام کاربری یا رمزعبور اشتباه است", {
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
        <title>Login</title>
        </Helmet>
      </HelmetProvider>
        
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        validationSchema={formLoginSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        <Form className={style.formSignin} style={{ marginTop: "100px" }}>
          <div style={{ textAlign: "center" }}>
            <i className="fa fa-sign-in fa-4x" id="Layer_1"></i>
            <h5 className="h3 mb-3 font-weight-normal">ورود به حساب کاربری</h5>
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

          <div className="inputPassword mb-3" style={{ direction: "rtl" }}>
            <Typography>
              <label>
                <input type="checkbox" />
                <Typography
                  component={"span"}
                  variant={"body2"}
                  id={style.checkboxText}
                >
                  مرا به خاطر بسپار
                </Typography>
              </label>
            </Typography>
            {!isEmpty(user) ? null : (
              <Button size="small" id="btnregistersite" color="primary">
                <NavLink to="/register">تبت نام در سایت؟</NavLink>
              </Button>
            )}
          </div>
          <button
            id={style.BtnSubmitLogin}
            className="waves-effect waves-light  btn-large z-depth-3"
            type="submit"
          >
            ورود
          </button>
          <p id={style.CopyrightsText}>&copy; 2017-2020</p>
        </Form>
      </Formik>
    </>
  );
};
export default Login;

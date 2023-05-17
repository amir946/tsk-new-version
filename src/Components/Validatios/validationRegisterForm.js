import * as Yup from "yup";

export const formRegisterSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "!رمزعبور حداقل باید شش کاراکتر باشد")
    .max(10, "!رمزعبور باید حداکثر دوازده کاراکتر باشد")
    .required("!واردکردن رمزعبور الزامی است "),
  email: Yup.string()
    .email("!ایمیل واردشده نامعتبر است")
    .required("!وارد کردن ایمیل الزامی است"),
  fullname: Yup.string()
    .min(10, "!نام کاربری حداقل باید شش کاراکتر باشد")
    .max(12, "!نام کاربری باید حداکثر دوازده کاراکتر باشد")
    .required("!واردکردن نام کاربری الزامی است "),
  policy: Yup.boolean().oneOf([true],"قوانین سایت زا بپذیرید لطفا !"),
});

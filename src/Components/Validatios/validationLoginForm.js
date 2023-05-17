import * as Yup from "yup";

export const formLoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(6,"!رمزعبور حداقل باید شش کاراکتر باشد")
    .max(12,"!رمزعبور باید حداکثر دوازده کاراکتر باشد")
    .required("!واردکردن رمزعبور الزامی است "),
  email: Yup.string("!ایمیل باید به صورت حروف انگلیسی باشد")
    .email("!ایمیل واردشده نامعتبر است")
    .required("!وارد کردن ایمیل الزامی است"),
});


import * as Yup from "yup";

export const formUpdateCourseSchema = Yup.object().shape({
  price: Yup.string().required("!واردکردن قیمت دوره الزامی است "),
  title: Yup.string().required("!وارد کردن عنوان دوره الزامی است"),
  // imageUrl: Yup.array().min(1, "یک عکس انتخاب کنید "),
  info: Yup.string().required("!وارد کردن اطلاعات دو.ره الزامی می باشد"),
});

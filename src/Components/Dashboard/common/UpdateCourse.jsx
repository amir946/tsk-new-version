import { useState, useEffect, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { handleCourseUpdate } from "./../../../actions/courses";
import Context from "./Context";
import { formUpdateCourseSchema } from "../../Validatios/validationUpdateCourse";
import { Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const UpdateCourse = ({ course, setBlur2 }) => {
  const context = useContext(Context);
  const { classblur2, handleclozemodal } = context;
  const [courseId, setCourseId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState([]);
  const [image, setImag] = useState([]);
  const [info, setInfo] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setCourseId(course._id);
    setTitle(course.title);
    setPrice(course.price);
    setImageUrl(course.imageUrl);
    setImag(course.imageUrl);
    setInfo(course.info);
    return () => {
      setCourseId("");
      setTitle("");
      setPrice("");
      setImageUrl([]);
      setImag([]);
      setInfo("");
    };
  }, [course]);

  const handleSubmit = (values) => {
    let data = new FormData();
    data.append("title", values.title);
    data.append("price", values.price);
    data.append("info", values.info);
    if (values.imageUrl) {
      data.append("imageUrl", values.imageUrl);
    } else data.append("imageUrl", values.imageUrl);
    dispatch(handleCourseUpdate(courseId, data));
    setBlur2(false);
  };

  return (
    <>
      {classblur2 ? (
        <div className="Modalbody animate__animated animate__flipInY ">
          <div className="Modal z-depth-3 ">
            <Formik
              initialValues={{
                price: price,
                title: title,
                info: info,
                imageUrl: [imageUrl],
                image: image,
              }}
              enableReinitialize
              validationSchema={formUpdateCourseSchema}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              {(Formik) => (
                <Form className="col s12 ">
                  <div id="dovmodalcontent">
                    <div className="input-field col s6">
                      <Field
                        id="icon_telephone"
                        type="text"
                        placeholder="قیمت دوره"
                        name="price"
                        value={Formik.values.price}
                      />
                      <ErrorMessage
                        name="price"
                        render={(msg) => <div className="errorMsg">{msg}</div>}
                      />
                    </div>
                    <div className="input-field col s6">
                      <Field
                        id="icon_prefix"
                        type="text"
                        placeholder="نام دوره"
                        name="title"
                        value={Formik.values.title }
                      />
                      <ErrorMessage
                        name="title"
                        render={(msg) => <div className="errorMsg">{msg}</div>}
                      />
                    </div>

                    <div className="file-field input-field divinputfile">
                      <div className="file-path-wrapper inputtextfile">
                        <input
                          className="file-path validate"
                          type="text"
                          name="image"
                          placeholder="عکس را اتخاب کنید"
                          defaultValue={Formik.values.image}
                        />
                        <Stack
                          display="fkex"
                          direction="row"
                          alignItems="center"
                          spacing={2}
                        >
                          <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="label"
                          >
                            <input
                              hidden
                              accept="image/*"
                              type="file"
                              multiple
                              name="imageUrl"
                              defaultValue={""}
                              aria-describedby="imageUrl"
                              onChange={(event) => {
                                Formik.setFieldValue(
                                  "imageUrl",
                                  event.target.files[0],
                                ); Formik.setFieldValue(
                                    "image",
                                    event.target.files[0].name,
                                  )
                              }}
                            />{" "}
                            <PhotoCamera />
                          </IconButton>
                        </Stack>
                      </div>
                    </div>
                    <div className="input-field col s12 scroolltextarea">
                      <Field
                        id="textarea2"
                        className="materialize-textarea"
                        placeholder="درباره دوره"
                        name="info"
                        value={Formik.values.info }
                      />
                      <ErrorMessage
                        name="info"
                        render={(msg) => <div className="errorMsg">{msg}</div>}
                      />
                    </div>
                    <div id="Btnmoal">
                      <button
                        onClick={handleclozemodal}
                        className="btn waves-effect z-depth-3"
                      >
                        بستن
                      </button>
                      <button
                        type="submit"
                        className="btn waves-effect z-depth-3"
                      >
                        ویرایش دوره
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default UpdateCourse;

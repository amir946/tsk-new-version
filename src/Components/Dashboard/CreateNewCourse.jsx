import { useDispatch } from "react-redux";
import { createNewCourse } from "../../actions/courses";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { formCreateNewCourseSchema } from "../Validatios/validationCreateNewcourse";
import { Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const CreateNewCourse = ({ classblur1, setBlur1 }) => {
  const dispatch = useDispatch();

  const handleclozemodal = () => {
    setBlur1(false);
  };

  // const handleFileUpload = (event) => {
  //   let reader = new FileReader();
  //   setImageUrl(event.target.files[0]) ;
  //   reader.onloadend = () => {
  //      setImageUrl(reader.result)
  //   };
  //   reader.readAsDataURL(imageUrl);
  // }

  const handleSubmit = (values) => {
    try {
      let data = new FormData();
      data.append("title", values.title);
      data.append("price", Number.parseInt(values.price));
      data.append("imageUrl", values.imageUrl);
      data.append("info", values.info);
      dispatch(createNewCourse(data));
      setTimeout(() => {
        setBlur1(false);
      }, 1000);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <>
      {classblur1 ? (
        <div className="Modalbody animate__animated animate__flipInY ">
          <div className="Modal z-depth-3 ">
            <Formik
              initialValues={{
                price: "",
                title: "",
                info: "",
                imageUrl: [],
                image: [],
              }}
              validationSchema={formCreateNewCourseSchema}
              onSubmit={(values) => {
                handleSubmit(values);
                console.log("img", values.imageUrl);
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
                          value={Formik.values.image.name}
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
                              aria-describedby="imageUrl"
                              onChange={(event) => {
                                Formik.setFieldValue(
                                  "imageUrl",
                                  event.currentTarget.files[0],
                                );
                                Formik.setFieldValue(
                                  "image",
                                  event.currentTarget.files[0],
                                );
                              }}
                            />{" "}
                            <PhotoCamera />
                          </IconButton>
                        </Stack>
                      </div>
                    </div>
                    <div className="input-field col s12 scroolltextarea">
                      <Field
                        id="textarea"
                        className="materialize-textarea"
                        placeholder="درباره دوره"
                        name="info"
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
                        ثبت دوره
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
export default CreateNewCourse;

import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ButtonUserHelp } from "../../index";
import style from "./HelpButton.module.css";
import { useDispatch } from "react-redux";
import { setblur } from "../../../actions/setblur";
import { Typography } from "@mui/material";

export default function ResponsiveDialog() {

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    dispatch(setblur());
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(setblur());
  };

  return (
    <div
      style={{
        position: "relative",
        top: "740px",
        direction: "rtl",
        left: "-8px",
      }}
      className={style.DivRoot}
    >
      <ButtonUserHelp handleClickOpen={handleClickOpen} />
      <Dialog
        className="animate__animated animate__flipInY"
        fullScreen={false}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle style={{ backgroundColor: "#4e9dfb" }}>
          <Typography
            style={{
              fontFamily: "vazir",
              textAlign: "center",
              color: "white",
            }}
          >
            به نکات زیر توجه کن دوست عزیز
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography id={style.Ulhelpuser} className="z-depth-3">
              اسم کارهای مورد نطرتان را در کادر وارد کرده
            </Typography>
            <Typography id={style.Ulhelpuser} className="z-depth-3">
              به زبان فارسی تایپ کنید
            </Typography>
            <Typography id={style.Ulhelpuser} className="z-depth-3">
              به تعداد بی نهایت می توانید کار وارد کرده
            </Typography>
            <Typography id={style.Ulhelpuser} className="z-depth-3">
              در پایان روی دکمه اضافه کردن کلیک کنید
            </Typography>
            <Typography id={style.Ulhelpuser} className="z-depth-3">
              : جیمیل ادمین{" "}
              <Typography component={"span"} variant={"body2"}>
                younes.gh@chmail.ir
              </Typography>
            </Typography>
            <Typography id={style.Ulhelpuser} className="z-depth-3">
              : رمز عبور ادمین
              <Typography component={"span"} variant={"body2"}>
                123456
              </Typography>
            </Typography>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

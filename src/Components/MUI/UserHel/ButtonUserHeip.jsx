const ButtonUserHelp = ({ handleClickOpen }) => {
  return (
    <div className="d-flex flex-row-reverse" id="BtnUserhelp">
      <a
        href="#lkkj"
        className="btn-floating  waves-effect waves-light z-depth-3"
        style={{ backgroundColor: "#4e9dfb" }}
        onClick={handleClickOpen}
      >
        <i
          className="fa fa-question-circle fa-lg"
          id="Svghelpuser"
          aria-hidden="true"
        ></i>
      </a>
    </div>
  );
};
export default ButtonUserHelp;

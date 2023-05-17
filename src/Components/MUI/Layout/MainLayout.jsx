
import style from "./MainLayout.module.css";
import { NavBar, HelpButton, CreateNewWork } from "../../../Components/index";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const blur = useSelector((state) => state.blur);

  return (
    <div className={blur ? style.blur : ""}>
      <NavBar />
      <HelpButton/>
      <CreateNewWork />
    </div>
  );
};
export default MainLayout;
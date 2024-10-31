import { useNavigate } from "react-router-dom";
import Icon from "../assets/icon";

const Back = ({ title = "Back" }) => {
  const navigate = useNavigate();
  
  return (
    <div
      className="max-w-screen-xl mx-auto py-3 px-4 cursor-pointer"
      onClick={() => navigate(-1)}
    >
      <button className="text-[14px] lg:flex gap-1 hidden md:block">
        <Icon name="backicon" /> {title}
      </button>
    </div>
  );
};

export default Back;

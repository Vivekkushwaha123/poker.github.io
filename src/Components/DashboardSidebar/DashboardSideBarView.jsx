import { DASBBOARD_SIDEBAR_MENU } from "../../Constant/constant";
import { kkpokerlogo, pokerLogo, wptLogo } from "../../assests";
import "./styles.scss";


const DashboardSideBarView = ({ handleNavigate , isSelectedTab }) => {
  return (
    <div
      className="dashboard-sidebar-wrapper h-[73.9vh] pl-16"
    >
      {DASBBOARD_SIDEBAR_MENU?.map((obj, i) => (
        <div
          value={obj?.text}
          key={i}
          className={`flex sidebar-menu-view cursor-pointer ${isSelectedTab === obj?.route ? "active" : ""}`}
          onClick={() => handleNavigate(obj?.route)}
        >
          <img src={obj?.img} className="sidebar-icon" alt={obj?.text} />
          <span className="sidebar-font">{obj?.text}</span>
        </div>
      ))}

      <div className="sponser-wrapper flex flex-col mt-8">
      <div className="sponser">おすすめのポーカーアプリ</div>
      <div className="sponser-img">
        <img src={wptLogo} alt="wptlogo" />
        <img src={kkpokerlogo} alt="kkpokerlogo" className="-mt-10" />
      </div>
      </div>

    </div>
  );
};

export default DashboardSideBarView;

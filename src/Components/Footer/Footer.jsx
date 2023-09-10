import "./styles.scss"

const Footer = () => {
  return (
    <div
      className={`footer mt-10 ${
        window.location.href.split("/").includes("saving") &&
        'footer-fixed-saving'
      }  bg-gray-400  py-2 text-white flex justify-center items-center`}
    >
      Copyright ©2023 PokerBacks All Right Reserved.
    </div>
  );
};

export default Footer;

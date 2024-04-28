import Header from "../../components/Header/Header.jsx";
import SideBar from "../../components/SideBar/SideBar.jsx";
import "./Error.css";

import error404Img from "/404.png";

export default function ErrorPage() {
  return (
    <>
      <Header isError />
      <div id="error">
        <img src={error404Img} alt="" />
        <h1 className="">Oops!</h1>
        <p>Looks like something went wrong.</p>
      </div>
    </>
  );
}

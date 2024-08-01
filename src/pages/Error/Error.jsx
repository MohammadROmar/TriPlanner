import { useRouteError } from "react-router-dom";

import Header from "../../components/Header/Header.jsx";
import SideBar from "../../components/SideBar/SideBar.jsx";
import "./Error.css";

import error404Img from "/404.png";

export default function ErrorPage() {
  const error = useRouteError();

  console.log(error);

  let title = "Oops!";
  let message = "Looks like something went wrong.";

  if (error.status === 404) {
    title = error.title ?? "Could Not Find Content";
    message =
      error.data ??
      error.message ??
      "Please Check the page or resources and try again.";
  } else if (error.status >= 400) {
    title = error.title ?? "Somthing Went Wrong!";
    message = error.message ?? "Please check your request and try again later.";
  } else if (error.status >= 500) {
    title = error.title ?? "Could Not Connect To The Server!";
    message = error.message ?? "Please try again later.";
  }

  return (
    <>
      <Header />
      <SideBar />
      <div id="error">
        <img src={error404Img} alt="" />
        <h1 className="">{title}</h1>
        <p>{message}</p>
      </div>
    </>
  );
}

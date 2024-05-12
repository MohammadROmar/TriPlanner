import { useRef } from "react";

import Modal from "../../components/UI/Modal/Modal.jsx";
import SearchIcon from "../../assets/icons/Search.jsx";
import filterImg from "../../assets/images/filter.png";
import "./Home.css";

const colors = {
  title: "var(--color-neuter)",
  text: "var(--color-success)",
  background: "var(--color-success-background)"
};

export default function HomePage() {
  const dialog = useRef();

  function handleFilters() {}

  return (
    <>
      <Modal ref={dialog} title="Filters" onConfirm={handleFilters} />
      <div id="search">
        <div id="search-bar-container">
          <input className="search-input" type="text" placeholder="Search..." />
          <SearchIcon className="search-icon" />
        </div>
        <button className="filter" onClick={() => dialog.current.open()}>
          <img src={filterImg} alt="Filter icon" />
        </button>
      </div>
      <div id="list-items..."></div>
    </>
  );
}

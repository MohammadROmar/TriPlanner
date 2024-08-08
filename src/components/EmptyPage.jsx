import noContentImg from "/404.png";

export default function EmptyPage() {
  return (
    <div className="empty">
      <img src={noContentImg} alt="" style={{ width: "15rem" }} />
      <h2>Oops!</h2>
      <p>Nothing found here.</p>
    </div>
  );
}

import "./style.css";

const Child = ({ title, content }) => {
  return (
    <div className="cardUnity">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Child;

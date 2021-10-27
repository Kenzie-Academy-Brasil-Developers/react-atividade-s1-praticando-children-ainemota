import "./style.css";

const CenteredCard = ({ children }) => {
  return (
    <div className="father">
      <span>{children}</span>
    </div>
  );
};

export default CenteredCard;

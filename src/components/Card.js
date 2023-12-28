import "./Card.css";

function Card({ children, className, contClassName }) {
  return (
    <div className={`Card ${className}`}>
      <div className={`Card-content ${contClassName}`}>{children}</div>
    </div>
  );
}

export default Card;

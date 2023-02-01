const Square = ({ value, onSquareClick }) => {
  //const handleClick = () => {
  //setValue("X");
  //console.log("klikattu");
  //};

  return (
    <>
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
};
export default Square;

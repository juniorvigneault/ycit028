import "./Button.scss";

const buttons = [1, 2, 3, 4, 5];

const Button = ({ setModal, setClicked }) => {
  const handleClick = (e) => {
    setModal(e.target.id);
    setClicked(true);
  };
  return (
    <div className="container">
      {buttons.map((button, index) => (
        <button id={button} key={`modal-${index}`} onClick={handleClick}>
          Modal {button}
        </button>
      ))}
    </div>
  );
};

export default Button;

import "./Content.scss";
import contents from "./constant";

const Content = ({ modal, clicked, setClicked }) => {
  return contents.map((content, index) => (
    <div
      className="modal background"
      style={
        clicked && modal === content.id
          ? { display: "block" }
          : { display: "none" }
      }
      key={`modal-${index}`}
    >
      <div className="modal-container">
        <div className="header">
          <h2 className="">{content.title}</h2>
          <button
            onClick={() => {
              setClicked(false);
            }}
          >
            X
          </button>
        </div>
        <div className="body">
          <p>{content.content}</p>
        </div>
      </div>
    </div>
  ));
};

export default Content;

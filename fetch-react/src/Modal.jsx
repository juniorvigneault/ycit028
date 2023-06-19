import _ from "lodash";
import "./modal.css";

const Modal = ({ store, setStore }) => {
  return (
    <div
      className="modal"
      style={{ display: store.modalProperty.showModal ? "block" : "none" }}
    >
      <div className="background"></div>
      <div className="modal-container">
        <div className="header">
          {store.modalProperty.title}
          <button
            onClick={() => {
              const newStore = _.cloneDeep(store);
              _.set(newStore, `modalProperty.showModal`, false);
              setStore(newStore);
            }}
          >
            X
          </button>
        </div>
        <div className="body" style={{ whiteSpace: "pre-line" }}>
          <h2 style={{ textAlign: "left" }}>{store.modalProperty.title1}</h2>
          <p>{store.modalText}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;

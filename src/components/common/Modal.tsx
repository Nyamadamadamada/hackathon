import { ReactNode, Dispatch, SetStateAction } from "react";

type Props = {
  title: string;
  setIsShow: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};
// 参照: コンポジション
// https://ja.reactjs.org/docs/composition-vs-inheritance.html
const Modal = ({ title, setIsShow, children }: Props) => {
  const handleCloseModal = () => {
    setIsShow(false);
  };

  return (
    <div id="overlay" onClick={handleCloseModal}>
      <div
        className="modal-dialog modal-lg fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fs-4 fw-bold">{title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleCloseModal}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};
export default Modal;

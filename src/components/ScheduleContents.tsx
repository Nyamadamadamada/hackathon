import calenderIcon from "../assets/calendar.svg";

type Props = {
  handleOpenModal: () => void;
};
const ScheduleContents = ({ handleOpenModal }: Props) => {
  return (
    <div className="card d-none d-lg-block event-info">
      <div className="card-body text-center">
        <h5 className="card-title fw-bold">2022/10/2&#40;日&#41;</h5>
        <h6 className="card-subtitle mb-2 text-muted">11:00~15:00</h6>
        <a
          className="event-info-link"
          target="_blank"
          rel="noreferrer"
          href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=NmtvY3V2NTA0MXNqYWluNHJvcDhyY2ZlM2ggeWFtYWRhbWFkYW1hZGEuc3R1ZHlAbQ&amp;tmsrc=yamadamadamada.study%40gmail.com"
        >
          <img src={calenderIcon} alt="icon" />
          Googleカレンダー
        </a>
        <hr className="mb-4" />
        <dl className="event-info-item">
          <dt>参加者</dt>
          <dd>どなたでもOK。</dd>
        </dl>
        <hr className="mb-4" />
        <dl className="event-info-item">
          <dt>会場</dt>
          <dd>リモート</dd>
        </dl>
        <hr className="mb-4" />

        <button
          type="button"
          className="btn btn-secondary btn-lg fw-bold fs-6"
          onClick={handleOpenModal}
        >
          参加者の登録
        </button>
        <p className="mt-2">
          任意です。人数把握のために登録していただけると幸いです！
        </p>
      </div>
    </div>
  );
};

export default ScheduleContents;

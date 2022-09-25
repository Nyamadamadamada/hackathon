const SearchForm = () => {
  return (
    <div>
      <div className="row g-3 align-items-center">
        <div className="col-4">
          <label className="col-form-label">キーワード</label>
        </div>
        <div className="col-8">
          <input className="form-control" />
        </div>
      </div>
      <div className="row g-3 align-items-center mt-1">
        <div className="col-4">
          <label className="col-form-label">タグ</label>
        </div>
        <div className="col-8 d-flex">
          <div className="form-check my-2">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label className="form-check-label form-check-inline">タグ１</label>
          </div>
          <div className="form-check my-2">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label className="form-check-label form-check-inline">タグ２</label>
          </div>
        </div>
      </div>

      <hr className="mb-4" />
      <button
        type="button"
        className="btn btn-secondary btn-lg fw-bold fs-6"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        絞り込む
      </button>
    </div>
  );
};

export default SearchForm;

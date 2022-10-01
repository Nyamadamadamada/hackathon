const CreateUserForm = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    // 演習2-1 入力時にstateに値を保存する
  };
  const handleSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    console.log(e.target.files[0].name);
    // 演習2-1 画像選択時にstateに値を保存する
  };
  const handleSubmit = () => {
    // 演習2-2 Firebaseにデータを送る
    // 1.設定した値を取得する
    // 2.firestoreにデータを送信する
    // 3.storageに画像を送信する
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-3 align-items-center">
        <div className="col-4">
          <label className="col-form-label">名前</label>
        </div>
        <div className="col-8">
          {/* 演習2-1 名前を設定 */}
          <input className="form-control" name="name" onChange={handleChange} />
        </div>
      </div>
      <div className="row g-3 align-items-center mt-1">
        <div className="col-4">
          <label className="col-form-label">アイコン</label>
        </div>
        <div className="col-8">
          {/* 演習2-1 画像選択時のイベントを設定 */}
          <input type="file" name="file" onChange={handleSelectFile} />
        </div>
      </div>

      <hr className="mb-4" />
      <input
        type="submit"
        value={"登録"}
        className="btn btn-primary btn-lg fw-bold fs-6"
      />
    </form>
  );
};

export default CreateUserForm;

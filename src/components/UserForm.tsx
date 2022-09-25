import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { serverTimestamp } from "firebase/firestore";

import ImageUpload from "./common/ImageUpload";
import { Checkbox } from "./common/FormItems";
import { fileSizeLimit, tagsKeys, tags } from "../config/common";
import { UserStruct } from "../types/firestore";
import {
  getUser,
  createUser,
  updateUser,
  uploadUserIcon,
  getUserIconPath,
} from "../service/serviceUser";

export type Inputs = {
  name: string;
  tags: {
    [key in typeof tagsKeys[number]]: boolean;
  };
  comment: string;
  file: string;
};

type Props = {
  id?: string;
  setIsShow: Dispatch<SetStateAction<boolean>>;
};

const UserForm = ({ id, setIsShow }: Props) => {
  const [selectedFile, setSelectedFile] = useState<Blob | null>(null);
  const [registeredIconPath, setRegisteredIconPath] = useState<string>("");
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // 新規追加or更新後、ファイルをアップロードする
    if (id) {
      updateUser(id, data)
        .then(() => {
          uploadFile(id, data.file);
        })
        .catch((error) => {
          alert(error.message);
          setIsShow(false);
        });
      alert(data.name + "さんの情報を更新しました");
    } else {
      createUser(data)
        .then((userId) => {
          uploadFile(userId, data.file);
        })
        .catch((error) => {
          alert(error.message);
          setIsShow(false);
        });
      alert(data.name + "さんを新規追加しました");
    }
    // モーダルをどじる
    setIsShow(false);
  };

  const uploadFile = (id: string, file: string) => {
    // 既に登録済みor未選択の場合return
    if (!selectedFile || !file || registeredIconPath) {
      return;
    }
    uploadUserIcon(id, file, selectedFile);
  };

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(null);
      return;
    }
    if (e.target.files[0].size > fileSizeLimit) {
      alert("ファイルサイズは1MB以下にしてください");
      setSelectedFile(null);
      return;
    }
    setValue("file", `${Date.now()}_${e.target.files[0].name}`);
    setSelectedFile(e.target.files[0]);
  };

  const handleCloseModal = () => {
    setIsShow(false);
  };

  useEffect(() => {
    // 編集時、初期値を取得
    if (id) {
      getUser(id)
        .then((user) => {
          reset(user);
          // 画像のプレビューを表示する
          if (user.file) {
            getUserIconPath(id, user.file).then((url) => {
              setRegisteredIconPath(url);
            });
          }
        })
        .catch((error) => {
          // モーダルを閉じる
          console.error(error);
          setIsShow(false);
          return;
        });
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="row g-2">
      <div className="mb-4 col-6">
        <p className="form-label">お名前（ニックネームOK）</p>
        <input
          type="text"
          className={`${errors.name && "is-invalid"} form-control text`}
          {...register("name", { required: true, maxLength: 20 })}
        />
        <div className="invalid-feedback">
          {errors.name && <span>名前は20文字以内で入力してください</span>}
        </div>
      </div>
      <div className="mb-4 col-12">
        <p className="form-label">
          アイコン（他の人が見てもOKな画像にしてください）
        </p>
        {registeredIconPath ? (
          <div>
            <p>画像は登録済みです</p>
            <img src={registeredIconPath} className="form_img_preview" />
          </div>
        ) : (
          <ImageUpload
            selectedFile={selectedFile}
            onSelectFile={onSelectFile}
          />
        )}
      </div>
      <div className="mb-4 col-12">
        <p className="form-label">やってること・興味あること</p>
        {tags &&
          tags.map((tag, index) => (
            <Checkbox
              key={index}
              register={register}
              path={`tags.${tag.key}`}
              label={tag.label}
            />
          ))}
      </div>
      <div className="mb-4 col-12">
        <p className="form-label">一言メッセージ（自己紹介や意気込みなど！）</p>
        <div className="form-floating">
          <textarea
            className={`${
              errors.comment && "is-invalid"
            } form-control textarea`}
            {...register("comment", { required: false, maxLength: 200 })}
          />
          <div className="invalid-feedback">
            {errors.comment && (
              <span>コメントは200文字以内で入力してください</span>
            )}
          </div>
        </div>
        <p className="mt-2">
          ※アイコンが未設定の場合、ランダムで画像が入ります。
        </p>
      </div>

      <div className="modal-footer justify-content-between">
        <a
          className="btn btn-secondary fw-bold text-decoration-none"
          onClick={handleCloseModal}
        >
          Close
        </a>
        <input
          type="submit"
          value={id ? "編集" : "新規作成"}
          className="btn btn-primary fw-bold"
        />
      </div>
    </form>
  );
};

export default UserForm;

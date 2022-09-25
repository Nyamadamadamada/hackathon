import { useEffect, useState } from "react";

type Props = {
  selectedFile: Blob | null;
  onSelectFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const ImageUpload = ({ selectedFile, onSelectFile }: Props) => {
  const [preview, setPreview] = useState<string>();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <div>
      <input
        type="file"
        onChange={onSelectFile}
        accept="image/png, image/jpeg"
        multiple={false}
      />
      {selectedFile && <img className="form_img_preview" src={preview} />}
    </div>
  );
};

export default ImageUpload;

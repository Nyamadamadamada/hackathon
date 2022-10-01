import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type CheckboxProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  path: Path<T>;
  label: string;
};

export const Checkbox = <T extends FieldValues>({
  register,
  path,
  label,
}: CheckboxProps<T>) => {
  return (
    <div className="form-check form-check-inline">
      <label className="form-check-label">{label}</label>
      <input type="checkbox" className="form-check-input" {...register(path)} />
    </div>
  );
};

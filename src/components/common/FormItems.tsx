import React from "react";
import {
  useForm,
  UseFormReturn,
  SubmitHandler,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

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

type FormProps<TFormValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
};

const Checkbox1 = <T extends Record<string, any>>({
  onSubmit,
  children,
}: FormProps<T>) => {
  const methods = useForm<T>();
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
  );
};
const Form = <T extends Record<string, any>>({
  onSubmit,
  children,
}: FormProps<T>) => {
  const methods = useForm<T>();
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
  );
};

type FormValues = {
  firstName: string;
  lastName: string;
  sex: string;
};

export default function App() {
  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <Form<FormValues> onSubmit={onSubmit}>
      {({ register }) => (
        <>
          <input {...register("firstName")} />
          <input {...register("lastName")} />
          <select
            {...register("sex")}
            options={[
              { label: "Female", value: "female" },
              { label: "Male", value: "male" },
              { label: "Other", value: "other" },
            ]}
          />
          <input type="submit" />
        </>
      )}
    </Form>
  );
}

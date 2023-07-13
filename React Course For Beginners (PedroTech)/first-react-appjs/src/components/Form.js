import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Your Full Name is required"),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="full name" {...register("fullName")} />
      <p> {errors.fullName?.message} </p>
      <input type="text" placeholder="email" {...register("email")} />
      <input type="number" placeholder="age" {...register("age")} />
      <input type="password" placeholder="password" {...register("password")} />
      <input
        type="password"
        placeholder="confirm password"
        {...register("confirmPassword")}
      />
      <input type="submit" />
    </form>
  );
};

import React from "react";
import { useForm } from "react-hook-form";

export const Formulario = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const { username, password } = data;
    console.log(username);
  };
  return (
    <>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Insert your name..."
            {...register("username", {
              required: true,
              maxLength: 20,
            })}
          />
          {errors.nombre?.type === "required" && <p>username no valid</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Insert your password"
            {...register("password", {
              required: true,
              maxLength: 20,
            })}
          />
          {errors.username.type === "required" && <p>El campo es requerido</p>}
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};

///con {...register('campo")} lo que hacemos es indicar un campo para registrar
///el el formulario y cargar la clave valor en la data del onsubmit

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./styles/FormUser.css";

const FormUser = ({
  createNewUsers,
  updateInfo,
  updateUsersById,
  setUpdateInfo,
  closeForm,
  setCloseForm
}) => {



  const { register, reset, handleSubmit } = useForm();

  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  const submit = (data) => {
    if (updateInfo) {
      //Update
      updateUsersById("", updateInfo.id, data);
      setUpdateInfo();
    } else {
      //Create
      createNewUsers("", data);
    }
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
    });
  };

  const handleCloseForm = () => {
    setCloseForm(true)
  }

  return (
    <div onClick={handleCloseForm} className={`formuser-pather ${ closeForm && 'close-form' }`}>
      <form onClick={e => e.stopPropagation()} className="formuser" onSubmit={handleSubmit(submit)}>
        <h2 className="formuser__title">
          {updateInfo ? "Update" : "New User"}
        </h2>
        <div onClick={handleCloseForm} className="formuser__close">X</div>
        <div className="formuser__container">
          <label className="formuser__label" htmlFor="first_name">
            First Name
          </label>
          <input
            className="formuser__input"
            {...register("first_name")}
            type="text"
            id="first_name"
          />
        </div>
        <div className="formuser__container">
          <label className="formuser__label" htmlFor="last_name">
            Last Name
          </label>
          <input
            className="formuser__input"
            {...register("last_name")}
            type="text"
            id="last_name"
          />
        </div>
        <div className="formuser__container">
          <label className="formuser__label" htmlFor="email">
            Email
          </label>
          <input
            className="formuser__input"
            {...register("email")}
            type="email"
            id="email"
          />
        </div>
        <div className="formuser__container">
          <label className="formuser__label" htmlFor="password">
            Password
          </label>
          <input
            className="formuser__input"
            {...register("password")}
            type="password"
            id="password"
          />
        </div>
        <div className="formuser__container">
          <label className="formuser__label" htmlFor="birthday">
            Birthday
          </label>
          <input
            className="formuser__input"
            {...register("birthday")}
            type="date"
            id="birthday"
          />
        </div>
        <button className="formuser__btn">
          {updateInfo ? "Update this user" : "Add a new User"}
        </button>
      </form>
    </div>
  );
};
export default FormUser;

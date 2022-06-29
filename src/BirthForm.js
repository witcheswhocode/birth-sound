import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BirthForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [startDate, setStartDate] = useState(new Date());
  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => {};

  const formOptions = {
    name: { required: "Name is required" },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(handleRegistration, handleError)}>
        <div id='birth-form'>
            <div>
                <label>Name</label>
                <input name="name" type="text" {...register('name', formOptions.name) }/>
                <small className="text-danger">
                {errors?.name && errors.name.message}
                </small>
            </div>
            <div>
                <label>Email</label>
                <input
                type="email"
                name="email"
                {...register('email', formOptions.email)}
                />
                <small className="text-danger">
                {errors?.email && errors.email.message}
                </small>
            </div>
            <div>
                <label>Birthday</label>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            <button>Submit</button>

        </div>
    </form>
  );
};
export default BirthForm;
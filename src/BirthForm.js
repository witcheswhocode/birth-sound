import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker'
import "react-datepicker/dist/react-datepicker.css";

const BirthForm = () => {
  const { control, register, handleSubmit, formState: { errors } } = useForm();
  const [startDate, setBirthDate] = useState(new Date());
  const [value, setBirthTime] = useState('12:00');
  const handleRegistration = (data) => {console.log(value)
                                        console.log(startDate)
                                        console.log(data['location'])};
  const handleError = (errors) => {console.log(errors)};

  const formOptions = {
    location: { required: "Location of birth is required" },
    birthtime: { required: "Birthtime is required" },
    birthday: { required: "Birthday is required"    }
  };

  return (
    <form onSubmit={handleSubmit(handleRegistration, handleError)}>
        <div id='birth-form'>
            <div className='form-item'>
                <label>Location</label>
                <input name="location" type="text" {...register('location', formOptions.location) }/>
                <small className="text-danger">
                {errors?.location && errors.location.message}
                </small>
            </div>
            <div className='form-item'>
                <label>Birthtime</label>
                <Controller
                    name={"birthtime"}
                    control={control}
                    rules={{ required: true }}
                    defaultValue={'12:00'}
                    render={({ field:{ref, ...field} }) => (
                        <TimePicker
                        type="birthtime"
                        name="birthtime"
                        {...register('birthtime', formOptions.birthtime)}
                        onChange={(field)=>{setBirthTime(field)}}
                        value={value}
                        inputRef={ref}
                        clearIcon={null}
                        clockIcon={null}
                        openClockOnFocus={false}
                        />
                    )}
                />
                <small className="text-danger">
                {errors?.birthtime && errors.birthtime.message}
                </small>
            </div>
            <div className='form-item'>
                <label>Birthday</label>
                <Controller
                    name={"birthday"}
                    control={control}
                    rules={{ required: true }}
                    defaultValue={new Date()}
                    render={({ field:{ref, ...field} }) => (
                        <DatePicker
                        type="birthday"
                        name="birthday"
                        {...register('birthday', formOptions.birthday)} 
                        selected={startDate} 
                        inputRef={ref}
                        onChange={(field)=>setBirthDate(field)}  />
                    )}
                />
                <small className="text-danger">
                {errors?.birthday && errors.birthday.message}
                </small>
            </div>
            <button>Submit</button>

        </div>
    </form>
  );
};
export default BirthForm;
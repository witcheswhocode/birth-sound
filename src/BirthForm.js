import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker'
import PlacesAutocomplete from './Autocomplete';
import "react-datepicker/dist/react-datepicker.css";
import Moment from 'moment';
import {apiSignOrder} from './data/settings';
import { dateToBirthchart } from "./utils/nowToBirthchart";
var ts = require('@mapbox/timespace');

const BirthForm = () => {
  const { control, register, handleSubmit, formState: { errors } } = useForm();
  const [location, setLocation] = useState('');
  const [startDate, setBirthDate] = useState(new Date());
  const [value, setBirthTime] = useState('12:00');
  const handleRegistration = (data) => {
                                        const newBirthchart = dateToBirthchart(startDate,value,[location['lng'], location['lat']]);

                                    };
  const handleError = (errors) => {console.log(errors)};
  const handleAlternateClick = (liftedValue) => {
      console.log("I've been clicked!!!");
      setLocation(liftedValue);
  }

  const formOptions = {
    location: { required: "Location is required" },
    birthtime: { required: "Birthtime is required" },
    birthday: { required: "Birthday is required"    }
  };

  return (

    <div id='birth-form'>
        <form onSubmit={handleSubmit(handleRegistration, handleError)}>
            <div className='form-item'>
                <label>Location</label>
                <small className="text-danger">
                {errors?.location && errors.location.message}
                </small>
                <PlacesAutocomplete alternateClick={handleAlternateClick}
                />
            </div>
            <div className='form-item'>
                <label>Birthtime</label>
                <small className="text-danger">
                {errors?.birthtime && errors.birthtime.message}
                </small>
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
            </div>
            <div className='form-item'>
                <label>Birthday</label>
                <small className="text-danger">
                {errors?.birthday && errors.birthday.message}
                </small>
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
            </div>
            <button>Submit</button>

        </form>
    </div>
  );
};
export default BirthForm;
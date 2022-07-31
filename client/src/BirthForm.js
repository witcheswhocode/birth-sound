import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker'
import PlacesAutocomplete from './Autocomplete';
import "react-datepicker/dist/react-datepicker.css";
import Moment from 'moment';
import { dateToBirthchart } from "./utils/dateToBirthchart";

const BirthForm = (props) =>  {
  const { updateBirthchart, updateChartTitle } = props;
  const { control, register, handleSubmit, formState: { errors } } = useForm();
  const [birthlocation, setLocation] = useState({'lng':-118.2437,'lat':34.0522});
  const [birthdate, setBirthDate] = useState(new Date());
  const [birthtime, setBirthTime] = useState(Moment(new Date()).format('HH:mm'));
  const handleRegistration = (data) => {
                                        dateToBirthchart(birthdate,birthtime,[birthlocation['lng'], birthlocation['lat']])
                                        .then((newBirthchart) => {
                                            console.log(birthtime)
                                            updateBirthchart(newBirthchart);
                                            updateChartTitle(Moment(birthdate).format('MMMM D, YYYY'),Moment(birthtime, 'HH:mm').format('hh:mm A'),birthlocation);
                                        });
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
            <h3 className="section-header">Enter your birth details:</h3>
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
                        value={birthtime}
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
                        selected={birthdate} 
                        inputRef={ref}
                        onChange={(field)=>setBirthDate(field)}
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"  />
                    )}
                />
            </div>
            <div id='submit-button-div' className='form-item'>
                <button>Submit</button>
            </div>

        </form>
    </div>
  );
};
export default BirthForm;
import React from "react";
import { useState } from "react";
import { useForm} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import file from "./images/upload-file-svgrepo-com.svg";
import personalSchema from "./Validations/personalvalidation";
import educationSchema from "./Validations/educationSchema";
import tocSchema from "./Validations/tocSchema";
// import Select from "react-select";

const Form = () => {
  const [formStep, setFormStep] = useState(0);
  const [values, setValues] = useState({});
  const {username, firstname, lastname, email, number, age, gender, resume , university, city, degree, branch, year} = values;
  const {
    watch,
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "all",
    resolver: yupResolver(formStep === 0 ? personalSchema : formStep === 1? educationSchema: formStep ===2 && tocSchema),
  });
  const completeFormStep = ()=>{
    setFormStep(curr=>curr+1);
  }
 console.log(errors);
  const renderButton = ()=>{
    // console.log(formStep);
    if(formStep>2){
        return undefined;
    }
    else if(formStep===2){
        return (
          <button
            disabled={!isValid}
            
            type="submit"
            className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Submit
          </button>
        );
        
    }
    else{
        return (
          <button
            disabled={!isValid}
            onClick={completeFormStep}
            type="button"
            className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Next Step
          </button>
        );
        
    }
  }
  const submitForm = (values)=>{
    console.log(values);
    window.alert(JSON.stringify(values, null, 2));
    setValues(values);
    completeFormStep();
  }
  console.log(values);
  return (
    <div className="min-h-screen bg-green-900 flex flex-col items-start text-gray-900 antialiased relative">
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
          height: "34rem",
        }}
        className="absolute bg-green-800 inset-x-0 top-0"
      ></div>
      <div className="mx-auto z-10 mt-48 text-center">
        <h1 className="text-white text-5xl font-semibold">
          Welcome to <span className="text-yellow-500">the Coding Club</span>
        </h1>
        <p className="text-green-200 mt-2">
          Become a new member in 3 easy steps
        </p>
      </div>
      <div className="max-w-xl w-full mt-24 mb-24 rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
        <div className="progressbar w-[100%] h-1 ">
          <div
            className="bg-yellow-500 h-1"
            style={{
              width:
                formStep === 0
                  ? "33.3%"
                  : formStep === 1
                  ? "66.6%"
                  : formStep === 2
                  ? "100%"
                  : "0%",
            }}
          ></div>
        </div>
        <div className="px-16 py-10">
          
          <form onSubmit={handleSubmit(submitForm)}>
            {formStep >= 0 && (
              <section className={formStep === 0 ? "block" : "hidden"}>
                <h2 className="font-semibold text-3xl mb-8">
                  Personal Information
                </h2>
                <label htmlFor="username" className="text-left block mt-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="text-input "
                  ref={register({
                    required: {
                      value: true,
                      message: "Please type a username",
                    },
                  })}
                />
                {errors.username && (
                  <p className="text-left block text-red-600 text-sm mt-2">
                    {errors.username.message}
                  </p>
                  
                )}
             
                <label htmlFor="firstname" className="text-left block mt-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  className="text-input "
                  ref={register({
                    required: {
                      value: true,
                      message: "Please type First Name",
                    },
                  })}
                />
                {errors.firstname && (
                  <p className="text-left block text-red-600 text-sm mt-2">
                    {errors.firstname.message}
                  </p>
                )}
                <label htmlFor="lastname" className="text-left block mt-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  className="text-input "
                  ref={register({
                    required: {
                      value: true,
                      message: "Please type Last Name",
                    },
                  })}
                />
                {errors.lastname && (
                  <p className="text-left block text-red-600 text-sm mt-2">
                    {errors.lastname.message}
                  </p>
                )}
                <label htmlFor="email" className="text-left block mt-2">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="text-input "
                  ref={register({
                    required: {
                      value: true,
                      message: "Please type Email",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-left block text-red-600 text-sm mt-2">
                    {errors.email.message}
                  </p>
                )}
                <label htmlFor="number" className="text-left block mt-2">
                  Contact Number
                </label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  className="text-input "
                  ref={register({
                    required: {
                      value: true,
                      message: "Please type your Contact Number",
                    },
                  })}
                />
                {errors.number && (
                  <p className="text-left block text-red-600 text-sm mt-2">
                    {errors.number.message}
                  </p>
                )}
                <div className="text-left block mt-2">
                  <p>Please select your age:</p>
                  <input
                    type="radio"
                    id="age1"
                    name="age"
                    value="30"
                    ref={register({
                      required: {
                        value: true,
                        message: "Please select your age",
                      },
                    })}
                  />
                  <label for="age1">0 - 30</label>
                  <br />
                  <input
                    type="radio"
                    id="age2"
                    name="age"
                    value="60"
                    ref={register({
                      required: {
                        value: true,
                        message: "Please select your age",
                      },
                    })}
                  />
                  <label for="age2">31 - 60</label>
                  <br />
                  <input
                    type="radio"
                    id="age3"
                    name="age"
                    value="100"
                    ref={register({
                      required: {
                        value: true,
                        message: "Please select your age",
                      },
                    })}
                  />
                  <label for="age3">61 - 100</label>
                  {errors.age && (
                    <p className="text-left block text-red-600 text-sm mt-2">
                      {errors.age.message}
                    </p>
                  )}
                </div>
                <div className="text-left block mt-2">
                  <p>Gender:</p>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    ref={register({
                      required: {
                        value: true,
                        message: "Please select your gender",
                      },
                    })}
                  />
                  <label for="male">Male</label>
                  <br />
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    ref={register({
                      required: {
                        value: true,
                        message: "Please select your gender",
                      },
                    })}
                  />
                  <label for="female">Female</label>
                  <br />
                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="other"
                    ref={register({
                      required: {
                        value: true,
                        message: "Please select your gender",
                      },
                    })}
                  />
                  <label for="other">Other</label>
                  {errors.gender && (
                    <p className="text-left block text-red-600 text-sm mt-2">
                      {errors.gender.message}
                    </p>
                  )}
                </div>
                <div className="text-left block mt-4">
                  <input
                    type="file"
                    className="hidden"
                    name="resume"
                    id="resume"
                    ref={register({
                      required: {
                        value: true,
                        message: "Please upload your Resume",
                      },
                    })}
                  />
                  <label htmlFor="resume" className=" mt-[4vh] ">
                    <img src={file} alt="avatar" className="w-[2.5vw] inline" />{" "}
                    Upload your Resume
                  </label>
                </div>
              </section>
            )}

            {formStep >= 1 && (
              <section className={formStep === 1 ? "block" : "hidden"}>
                <h2 className="font-semibold text-3xl mb-8">Education</h2>
                <label htmlFor="university" className="text-left block mt-2">
                  University
                </label>
                <input
                  type="text"
                  id="university"
                  name="university"
                  className="text-input"
                  ref={register({
                    required: {
                      value: true,
                      message: "Please type your University",
                    },
                  })}
                />
                {errors.university && (
                  <p className="text-left block text-red-600 text-sm mt-2">
                    {errors.university.message}
                  </p>
                )}
                <label htmlFor="city" className="text-left block mt-2">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="text-input"
                  ref={register({
                    required: {
                      value: true,
                      message: "Please type City",
                    },
                  })}
                />
                {errors.city && (
                  <p className="text-left block text-red-600 text-sm mt-2">
                    {errors.city.message}
                  </p>
                )}
                <label htmlFor="degree" className="text-left block mt-2">
                  Degree
                </label>
                <input
                  type="text"
                  id="degree"
                  name="degree"
                  className="text-input"
                  ref={register({
                    required: {
                      value: true,
                      message: "Please type your Degree",
                    },
                  })}
                />
                {errors.degree && (
                  <p className="text-left block text-red-600 text-sm mt-2">
                    {errors.degree.message}
                  </p>
                )}
                <label htmlFor="branch" className="text-left block mt-2">
                  Branch
                </label>
                <input
                  type="text"
                  id="branch"
                  name="branch"
                  className="text-input"
                  ref={register({
                    required: {
                      value: true,
                      message: "Please type your Branch",
                    },
                  })}
                />
                {errors.branch && (
                  <p className="text-left block text-red-600 text-sm mt-2">
                    {errors.branch.message}
                  </p>
                )}
                <label className="text-left block mt-2" for="year">
                  Year
                </label>

                <select
                  className="text-input"
                  ref={register()}
                  name="year"
                  id="year"
                >
                  <option value="1">1st</option>
                  <option value="2">2nd</option>
                  <option value="3">3rd</option>
                  <option value="4">4th</option>
                </select>
                {errors.year && (
                  <p className="text-left block text-red-600 text-sm mt-2">
                    {errors.year.message}
                  </p>
                )}
              </section>
            )}
            {formStep >= 2 && (
              <section className={formStep === 2 ? "block" : "hidden"}>
                <h2 className="font-semibold text-3xl mb-8">
                  Legal Information
                </h2>
                <div className="block mt-6 text-left">
                  <input
                    name="toc"
                    className="p-3 text-green-600 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
                    type="checkbox"
                    ref={register({
                      required: true,
                    })}
                  />
                  <span>
                    I accept the{" "}
                    <a className="text-blue-400 underline" href="/">
                      Terms and Conditions
                    </a>
                    .
                  </span>
                </div>
                <div className="block mt-6 text-left">
                  <input
                    name="pp"
                    className="p-3 text-green-600 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
                    type="checkbox"
                    ref={register({
                      required: true,
                    })}
                  />
                  <span>
                    I accept the{" "}
                    <a className="text-blue-400 underline" href="/">
                      Privacy Policy
                    </a>
                    .
                  </span>
                </div>
              </section>
            )}
            {formStep === 3 && (
              <section>
                <h2 className="font-semibold text-3xl mb-8">
                  Personal Information
                </h2>
                <p className="text-left mt-2">username: {username}</p>
                <p className="text-left mt-2">
                  Name: {firstname} {lastname}
                </p>
                <p className="text-left mt-2">Email id: {email}</p>
                <p className="text-left mt-2">Phone Number: {number}</p>
                <p className="text-left mt-2">Age: {age}</p>
                <p className="text-left mt-2">Gender: {gender}</p>
                

                <h2 className="font-semibold text-3xl mb-8 mt-8">Education</h2>
                <p className="text-left mt-2">University: {university}</p>
                <p className="text-left mt-2">City: {city}</p>
                <p className="text-left mt-2">Degree: {degree}</p>
                <p className="text-left mt-2">Branch: {branch}</p>
                <p className="text-left mt-2">Year: {year}</p>
              </section>
            )}
            {renderButton()}
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;

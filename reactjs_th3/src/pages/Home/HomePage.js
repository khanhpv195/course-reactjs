import React, { useState, useMemo, useEffect, useCallback } from "react";
import Button from "./../../components/commons/Button";
import Input from "./../../components/commons/Input";
import Text from "./../../components/commons/Text";
import useCalculate from "./../../untils/useCalculate";
import "./../../assets/css/style.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  fullName: yup.string().required().min(3, 'Must be exactly 3 digits'),
  age: yup.number().required().min(3, 'Must be exactly 3 digits'),
}).required();

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    console.log("🚀 ~ file: HomePage.js ~ line 14 ~ HomePage ~ data", data)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setValue("fullName", '');
    setValue("age", null);
  };


  return (
    <div className="wrapper">
      {loading ? (
        <h1>
          {" "}
          <Text text="Loading... " />
        </h1>
      ) : (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              style={{ marginBottom: '2rem' }}
              {...register("fullName")}
              placeholder="Full Name"
            />
            <p>{errors.fullName?.message}</p>
            <br />
            <input
              placeholder="Age"
              type="number"
              {...register("age")}
              style={{ marginBottom: '2rem' }}
            />
            <p>{errors.age?.message}</p>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default HomePage;

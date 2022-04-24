import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  StyleSheet,
} from "react";
import Button from "./../../components/commons/Button";
import Input from "./../../components/commons/Input";
import Text from "./../../components/commons/Text";
import useCalculate from "./../../untils/useCalculate";
import "./../../assets/css/style.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    fullName: yup.string().required().min(3, "Must be exactly 3 digits"),
    age: yup.number().required().min(18, "Must be exactly 3 digits"),
  })
  .required();

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("🚀 ~ file: HomePage.js ~ line 14 ~ HomePage ~ data", data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setValue("fullName", "");
    setValue("age", null);
  };

  return (
    <div className="wrapper">
      {loading ? (
        <Text text="Loading... " />
      ) : (
        <div>
          <Text colorText="blue" bg="white" text="Loading... " />
          <Text colorText="red" bg="white" text="Loading... " />
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              style={{ marginBottom: "2rem" }}
              {...register("fullName")}
              placeholder="Full Name"
            />
            <p>{errors.fullName?.message}</p>
            <br />
            <input
              placeholder="Age"
              type="number"
              {...register("age")}
              style={{ marginBottom: "2rem" }}
            />
            <p>{errors.age?.message}</p>
            <br />
            <button className="btn" type="submit">
              Submit
            </button>
            <Button btnText="Css module" />
          </form>
        </div>
      )}
    </div>
  );
};

export default HomePage;

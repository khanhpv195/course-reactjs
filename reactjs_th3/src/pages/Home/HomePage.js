import React, { useState, useMemo, useEffect } from "react";
import Button from "./../../components/commons/Button";
import Input from "./../../components/commons/Input";
import Text from "./../../components/commons/Text";
import useCalculate from "./../../untils/useCalculate";
import "./../../assets/css/style.css";
const HomePage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false);
  const removeData = () => {
    setLoading(true);
    if (name.length && age.length) {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
      setName("");
      setAge("");
    } else {
      setLoading(false);
      alert("Vui lòng nhập giá trị");
      return false;
    }
  };

  const memoFunction = (value) => {
    console.log(value);
    return value;
  };
  const memo = useMemo(() => memoFunction(name), [name, age]);

  const totalCalculate = useCalculate(age);
  return (
    <div className="wrapper">
      {loading ? (
        <h1>
          {" "}
          <Text text="Loading... " />
        </h1>
      ) : (
        <div>
          <div>
            <h1>{memo}</h1>
            <Text text={"Hello: " + name} />
            <Text text={"Age: " + age} />
            <Text text={"Age x2: " + totalCalculate} />
          </div>
          <Input
            labelText="Tên"
            placeholderText="Vui lòng nhập tên"
            handleOnChange={(e) => setName(e.target.value)}
          />
          <Input
            labelText="Tuổi"
            placeholderText="Vui lòng nhập tuổi"
            handleOnChange={(e) => setAge(e.target.value)}
          />
          <Button onClickHandle={() => removeData()} btnText="Clear Data" />
          <button onClick={() => alert("test")}>Test</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;

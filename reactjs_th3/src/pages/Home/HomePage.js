import React, { useState } from "react";
import Button from "./../../components/commons/Button";
import Input from "./../../components/commons/Input";
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

  return (
    <div className="wrapper">
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <div>
            <h1>Hello:{name}</h1>
            <h1>Age:{age}</h1>
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
        </div>
      )}
    </div>
  );
};

export default HomePage;

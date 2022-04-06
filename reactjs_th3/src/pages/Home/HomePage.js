import React, { useState } from "react";
import Button from "./../../components/commons/Button";
import Input from "./../../components/commons/Input";
import Text from "./../../components/commons/Text";
import "./../../assets/css/style.css";
import Social from "../../components/Social";
const HomePage = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [loading, setLoading] = useState(false)
  const removeData = () => {
    setLoading(true);
    if (name.length && age.length) {
      setTimeout(() => {
        setLoading(false);
      }, 5000)
      setName("")
      setAge('')
    } else {
      setLoading(false)
      alert("Vui lòng nhập giá trị");
      return false;
    }

  }
  return (
    <div className="wrapper">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)
          } placeholder="Name" />
          <br />
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          <h1>Hello: {name}</h1>
          <h2>Age: {age}</h2>
        </div>
      )}

      <button disabled={loading ? true : false} onClick={() => removeData()}> Remove</button>
    </div >
  );
};

export default HomePage;

import React, { useEffect, useState } from "react";

const Text = () => {
  const [name, setName] = useState("Khanh")
  const [age, setAge] = useState(27)

  useEffect(() => {
    callApi()
  }, [])

  const callApi = () => {
    setTimeout(() => {
      setName("Tuan")
    }, 3000)
  }
  return (
    <div>
      <h1>Hello {name}</h1>
      <h2>Age: {age}</h2>
    </div>
  );
};

export default Text;

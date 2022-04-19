import React, { useState, useEffect, useMemo } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
const ListPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    try {
      const result = await axios.get(
        "https://624061412aeb48a9af735b00.mockapi.io/api/v1/users?page=1&limit=10"
      );
      setLoading(false);
      setData(result.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const deleteItem = (key) => {
    const newData = data.slice(0, key).concat(data.slice(key + 1, data.length));
    setData(newData);
  };

  const renderItem = () => {
    return data.map((value, index) => {
      return (
        <tr key={index}>
          <td>{value.id}</td>
          <td>{value.name}</td>
          <td>
            <img src={value.avatar} width="50" />
          </td>
          <td>{value.createdAt}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => deleteItem(index)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="container">
      {loading ? (
        <h1 className="text-center text-success">Loading...</h1>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Avatar</th>
                <th>createdAt</th>
              </tr>
            </thead>
            <tbody>{renderItem()}</tbody>
          </Table>
          <button className="btn btn-danger">Delete All</button>
        </>
      )}
    </div>
  );
};

export default ListPage;

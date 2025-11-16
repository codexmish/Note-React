import React, { useEffect, useState } from "react";
import { getDatabase, onValue, push, ref, set } from "firebase/database";

const Home = () => {
  const [inputData, setInputData] = useState("");

  const [realtimedata, setRealtimeData] = useState([]);

  const db = getDatabase();

  const handalSubmit = (e) => {
    e.preventDefault();

    // set data to firebase

    set(push(ref(db, "users/")), {
      data: inputData,
    });
  };

  // Get data from firebase

  useEffect(() => {
    onValue(ref(db, "users/"), (snapshot) => {
      let myArr = [];

      snapshot.forEach((item) => {
        myArr.push(item.val());
      });
      setRealtimeData(myArr);
    });
  }, []);

  return (
    <>
      <div className="container mt-20">
        <form onSubmit={handalSubmit} action="">
          <input
            onChange={(e) => setInputData(e.target.value)}
            type="text"
            className="border "
          />
          <button>Go</button>
        </form>
        <div>
          {
          realtimedata.map((item) => (
            <h1 className="text-2xl text-black font-bold">{item.data}</h1>
          ))
          }
        </div>
      </div>
    </>
  );
};

export default Home;

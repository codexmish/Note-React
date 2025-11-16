import React, { useEffect, useState } from "react";
import { getDatabase, onValue, push, ref, set } from "firebase/database";

const Home = () => {
  const [inputData, setInputData] = useState("");

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

      let myArr = []
      const data = snapshot.val();
      data.forEach((item)=>{
        myArr.push(item)
      })
      console.log(myArr)
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
      </div>
    </>
  );
};

export default Home;

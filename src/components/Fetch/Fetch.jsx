import React, { useEffect, useState } from "react";
import Single from "../single/Single";

const Fetch = () => {
  let [api, setApi] = useState([]);

  useEffect(() => {
    let url = `https://openapi.programming-hero.com/api/phones?search=samsung`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setApi(data.data));
  }, []);

  let [total2, setTotal] = useState([]);
  let total = () => {
    let get1 = document.getElementById("inm");
    let final = get1.value;
    setTotal(final);
  };

  return (
    <div>
      <div className="flex ">
        <input
          type="text"
          id="inm"
          className=" ml-5 mt-5 w-[300px] h-7 mb-5 bg-gray-400"
        />
        <div>
          <button onClick={total} className="mt-5 ml-5">
            search
          </button>
        </div>
      </div>
      <div className=" mt-5 w-11/12  mx-auto gap-5 grid md:grid-cols-4">
        {api.map((res) => (
          <Single key={res.slug} Single={res}></Single>
        ))}
      </div>
    </div>
  );
};

export default Fetch;

import React, { useEffect, useState } from "react";
import Single from "../single/Single";

const Fetch = () => {
  let [api, setApi] = useState([]);

  useEffect(() => {
    let url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setApi(data.data));
  }, []);

  console.log(api);
  return (
    <div>
      <div className=" mt-5 w-11/12  mx-auto gap-5 grid grid-cols-4">
        {api.map((res) => (
          <Single key={res.slug} Single={res}></Single>
        ))}
      </div>
    </div>
  );
};

export default Fetch;

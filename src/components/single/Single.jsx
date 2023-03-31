import React from "react";

const Single = (props) => {
  let { brand, image, phone_name } = props.Single;
  //   console.log(phone_name);

  let mahedi = () => {
    console.log("all ok");
  };

  return (
    <div>
      <div className="w-[300px] h-[500px] border-2 rounded-lg shadow-lg p-5">
        <div>
          <img className="w-full p-5" src={image} alt="" />
        </div>
        <h6 className="text-lg font-bold pt-3 pb-2">{brand}</h6>
        <h1 className="text-lg font-bold pb-2">{phone_name}</h1>
        <div>
          <button onClick={mahedi} className="border-b-2">
            buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Single;

import React from "react";

const Love = ({clicked=false,updateReactionSelected=(reaction)=>{} }) => {
  return (
    <svg
      className={`h-12 w-12 lg:h-14 lg:w-14 hover:scale-110 transition-all ease-in-out ${
        clicked ? "scale-125 hover:scale-125" : ""
      }`}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.009 512.009"
      onClick={()=>updateReactionSelected("Love")}
    >
      <circle fill="#F7B239" cx="256.004" cy="256.004" r="256.004" />
      <path
        fill="#E09B2D"
        d="M121.499,390.501C29.407,298.407,22.15,153.608,99.723,53.204
	c-8.593,6.638-16.861,13.895-24.743,21.777c-99.974,99.974-99.974,262.065,0,362.038s262.065,99.974,362.038,0
	c7.881-7.881,15.138-16.15,21.777-24.743C358.392,489.85,213.593,482.593,121.499,390.501z"
      />
      <g>
        <path
          fill="#F95428"
          d="M357.185,133.368L357.185,133.368c-15.464-15.464-40.536-15.464-56,0l0,0
		c-15.464,15.464-15.464,40.536,0,56l0,0l56,56l56-56l0,0c15.464-15.464,15.464-40.536,0-56l0,0
		C397.721,117.904,372.649,117.904,357.185,133.368L357.185,133.368z"
        />
        <path
          fill="#F95428"
          d="M154.815,133.368L154.815,133.368c-15.464-15.464-40.536-15.464-56,0l0,0
		c-15.464,15.464-15.464,40.536,0,56l0,0l56,56l56-56l0,0c15.464-15.464,15.464-40.536,0-56l0,0
		C195.35,117.904,170.279,117.904,154.815,133.368L154.815,133.368z"
        />
      </g>
      <path
        fill="#FFFFFF"
        d="M126.955,282.606h258.092c0,14.486-2.391,28.415-6.794,41.421H133.749
	C129.346,311.021,126.955,297.092,126.955,282.606z"
      />
      <path
        fill="#A81004"
        d="M133.749,324.027h244.504c-8.679,25.632-25.189,47.633-46.684,63.182
	c-9.033-15.22-25.632-25.417-44.622-25.417c-11.602,0-22.305,3.808-30.946,10.248c-8.641-6.44-19.357-10.248-30.958-10.248
	c-18.977,0-35.589,10.197-44.609,25.417C158.938,371.66,142.428,349.659,133.749,324.027z"
      />
      <path
        fill="#F95428"
        d="M286.946,361.792c18.99,0,35.589,10.197,44.622,25.417c-21.242,15.384-47.355,24.443-75.568,24.443
	c-28.213,0-54.326-9.059-75.568-24.443c9.021-15.22,25.632-25.417,44.609-25.417c11.601,0,22.317,3.808,30.958,10.248
	C264.642,365.6,275.345,361.792,286.946,361.792z"
      />
    </svg>
  );
};

export default Love;

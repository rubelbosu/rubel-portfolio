import React from "react";

const Sad = ({clicked=false,updateReactionSelected=(reaction)=>{}}) => {
  return (
    <svg
      className={`h-12 w-12 lg:h-14 lg:w-14 hover:scale-110 transition-all ease-in-out ${
        clicked ? "scale-125 hover:scale-125" : ""
      }`}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.009 512.009"
      onClick={()=>updateReactionSelected("Sad")}
    >
      <circle fill="#F7B239" cx="256.004" cy="256.004" r="256.004" />
      <g>
        <path
          fill="#E09B2D"
          d="M121.499,390.501C29.407,298.407,22.15,153.608,99.723,53.204
		c-8.593,6.638-16.861,13.895-24.743,21.777c-99.974,99.974-99.974,262.065,0,362.038s262.065,99.974,362.038,0
		c7.881-7.881,15.138-16.15,21.777-24.743C358.392,489.85,213.593,482.593,121.499,390.501z"
        />
        <path
          fill="#E09B2D"
          d="M278.633,374.112c-2.137,0-4.285-0.717-6.058-2.189c-11.308-9.39-21.84-9.391-33.151,0
		c-4.032,3.346-10.014,2.793-13.363-1.239c-3.348-4.032-2.793-10.014,1.239-13.363c18.24-15.146,39.16-15.145,57.399,0
		c4.032,3.348,4.586,9.331,1.239,13.363C284.061,372.945,281.357,374.112,278.633,374.112z"
        />
      </g>
      <g>
        <path
          fill="#4D4D4D"
          d="M107.619,202.759c8.571-14.347,23.667-22.913,40.38-22.913s31.809,8.566,40.38,22.913
		c1.776,2.974,4.925,4.623,8.155,4.623c1.656,0,3.332-0.434,4.857-1.345c4.499-2.688,5.966-8.513,3.279-13.012
		c-12.03-20.136-33.215-32.156-56.671-32.156s-44.641,12.022-56.671,32.156c-2.688,4.499-1.22,10.325,3.279,13.012
		C99.109,208.727,104.932,207.258,107.619,202.759z"
        />
        <path
          fill="#4D4D4D"
          d="M364.002,160.868c-23.456,0-44.641,12.022-56.671,32.157c-2.688,4.499-1.22,10.325,3.279,13.012
		c4.501,2.688,10.326,1.22,13.012-3.279c8.571-14.347,23.667-22.913,40.38-22.913c16.713,0,31.809,8.566,40.38,22.913
		c1.776,2.974,4.925,4.623,8.155,4.623c1.656,0,3.332-0.434,4.857-1.345c4.499-2.688,5.966-8.513,3.279-13.012
		C408.643,172.89,387.457,160.868,364.002,160.868z"
        />
        <path
          fill="#4D4D4D"
          d="M187.902,263.977c0-19.358-15.749-35.107-35.107-35.107h-45.004c-5.24,0-9.489,4.248-9.489,9.489
		s4.248,9.489,9.489,9.489h13.837c-2.511,4.834-3.941,10.316-3.941,16.129c0,19.358,15.749,35.107,35.107,35.107
		S187.902,283.334,187.902,263.977z"
        />
        <path
          fill="#4D4D4D"
          d="M379.447,228.871h-45.003c-5.24,0-9.489,4.248-9.489,9.489c0,5.24,4.248,9.489,9.489,9.489h13.837
		c-2.511,4.834-3.941,10.316-3.941,16.129c0,19.358,15.749,35.107,35.107,35.107c19.358,0,35.107-15.749,35.107-35.107
		S398.805,228.871,379.447,228.871z"
        />
        <path
          fill="#4D4D4D"
          d="M256.001,307.482c-32.675,0-62.186,16.746-78.945,44.795c-2.688,4.499-1.22,10.325,3.279,13.012
		c4.5,2.687,10.325,1.22,13.012-3.279c13.301-22.262,36.721-35.552,62.653-35.552s49.353,13.29,62.653,35.552
		c1.778,2.974,4.925,4.624,8.155,4.623c1.655,0,3.332-0.434,4.857-1.345c4.499-2.688,5.966-8.513,3.279-13.012
		C318.187,324.228,288.675,307.482,256.001,307.482z"
        />
      </g>
    </svg>
  );
};

export default Sad;

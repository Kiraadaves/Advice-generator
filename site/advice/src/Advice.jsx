import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const baseURL = "https://api.adviceslip.com/advice";

const Advice = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    generate();
  }, []);
  const generate = () => {
    axios
      .get(baseURL)
      .then((response) => {
        setAdvice(response.data.slip);
      })
      .catch((error) => {
        console.error(`Error fetching advice:`, error);
      });
  };
  return (
    <div
      key={advice.id}
      className="dark-Grayish-Blue container flex flex-col justify-center items-center  p-14  rounded-3xl relative md:w-1/3"
    >
      <h4 className="neon-Green">ADVICE #{advice.id}</h4>
      <h1 className=" light-Cyan my-7 md:mt-5 text-center text-3xl">
        &quot;{advice.advice}&quot;
      </h1>
      <div className="desktop-image mb-7 ">
        <svg
          className=""
          width="444"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
            <g transform="translate(212)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
      </div>
      <div className="mobile-image mb-7">
        <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
            <g transform="translate(138)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
      </div>
      <button
        onClick={generate}
        className="bg-green rounded-full w-14 h-14 flex justify-center items-center absolute -bottom-7 "
      >
        <svg
          className=""
          width="18"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </button>
    </div>
  );
};

export default Advice;

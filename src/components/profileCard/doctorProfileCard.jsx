import "./styles.css";
import profile_pic from "./Assest/101.jpg";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

const DoctorProfileCard = ({
  name,
  description,
  image,
  totalTime,
  type,
  id,
  disease1,
  disease2,
  disease1Name,
  disease2Name,
}) => {
  const [time, setTime] = useState(totalTime);
  const timeId = useRef();

  useEffect(() => {
    timeId.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 60 * 1000);
    return () => clearInterval(timeId.current);
  }, []);
  useEffect(() => {
    if (time <= 0) {
      clearInterval(timeId.current);
    }
  }, [time]);

  const updateTime = async (e, value) => {
    e.preventDefault();
    try {
      const url = "https://ironicinno-ameyfastapi.hf.space/predict";
      const { data: res } = await axios.post(url, value);
      setTime(res.prediction);
      console.log(res);
      return res;
    } catch (err) {
      if (
        err.response &&
        err.response.status >= 400 &&
        err.response.status <= 500
      )
        setError(err.response.message);
    }
  };
  const src = `${profile_pic}/../${image}.jpg`;
  //console.log(src);
  return (
    <div className="dfc">
      <div className="gradient"></div>
      <div className="profile-down">
        <img src={profile_pic} alt="Doctor" />
        <h2 className="profile-title">{name}</h2>
        <p className="profile-descrption">{`${type} ${description}`}</p>
        <button className="profile-time">{`Waiting Time:${time} min for next appointment`}</button>
        <button
          className="profile-button"
          onClick={(e) =>
            updateTime(e, {
              variable1: 1,
              variable2: 2,
              variable3: 2,
              variable4: 2,
            })
          }
        >
          {disease1Name}
        </button>
        <button
          className="profile-button"
          onClick={(e) =>
            updateTime(e, {
              variable1: 1,
              variable2: 2,
              variable3: 2,
              variable4: 2,
            })
          }
        >
          {disease2Name}
        </button>
      </div>
    </div>
  );
};

export default DoctorProfileCard;

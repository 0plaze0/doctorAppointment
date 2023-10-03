import "./styles.css";
import profile_pic from "./Assest/101.jpg";
import { useState, useRef, useEffect } from "react";

const DoctorProfileCard = ({ name, description, image, totalTime, type }) => {
  const [time, setTime] = useState(totalTime);
  const timeId = useRef();

  useEffect(() => {
    timeId.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timeId.current);
  }, []);
  useEffect(() => {
    if (time <= 0) {
      clearInterval(timeId.current);
    }
  }, [time]);
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
        <button className="profile-button">
          <a href="https://github.dev/0plaze0">Contact</a>
        </button>
      </div>
    </div>
  );
};

export default DoctorProfileCard;

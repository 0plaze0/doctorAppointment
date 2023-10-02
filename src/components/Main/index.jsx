import styles from "./styles.module.css";
import DoctorProfileCard from "./../profileCard/doctorProfileCard";
import data from "./../../db/doctor.json";
import BasicExample from "../Navbar";
import { useState } from "react";

const Main = () => {
  const [disease, setDisease] = useState("ENT");
  const docDetails = data.doctor;
  console.log(docDetails);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Doctor Appointment</h1>
        <BasicExample disease={disease} setDisease={setDisease} />
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <ul>
        {docDetails
          .filter((doctor) => doctor.type === disease)
          .sort((doctor1, doctor2) => {
            const doctor1Time =
              doctor1.fever * doctor1.feverWaiting +
              doctor1.skin * doctor1.skingWaiting;

            const doctor2Time =
              doctor2.fever * doctor2.feverWaiting +
              doctor2.skin * doctor2.skingWaiting;

            if (doctor1Time < doctor2Time) return -1;
            else if (doctor1Time > doctor2Time) return 1;
            return 0;
          })
          .map((doctor) => (
            <li key={doctor.id}>
              <DoctorProfileCard
                totalTime={
                  doctor.fever * doctor.feverWaiting +
                  doctor.skin * doctor.skingWaiting
                }
                name={doctor.name}
                description={doctor.description}
                image={doctor.img}
                type={doctor.type}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Main;

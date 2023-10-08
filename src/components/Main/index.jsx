import styles from "./styles.module.css";
import DoctorProfileCard from "./../profileCard/doctorProfileCard";
import data from "./../../db/doctor.json";
import BasicExample from "../Navbar";
import { useState } from "react";

const Main = () => {
  const [disease, setDisease] = useState("ENT");
  const docDetails = data.doctor;

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
              (doctor1.Ear || doctor1.vitiligo) *
                (doctor1.vitiligoWaiting || doctor1.EarWaiting) +
              (doctor1.Nose || doctor1.skinRash) *
                (doctor1.NoseWaiting || doctor1.skinRash);

            const doctor2Time =
              (doctor2.Ear || doctor2.vitiligo) *
                (doctor2.vitiligoWaiting || doctor2.EarWaiting) +
              (doctor2.Nose || doctor2.skinRash) *
                (doctor2.NoseWaiting || doctor2.skinRash);

            if (doctor1Time < doctor2Time) return -1;
            else if (doctor1Time > doctor2Time) return 1;
            return 0;
          })
          .map((doctor) => (
            <li key={doctor.id}>
              <DoctorProfileCard
                totalTime={
                  (doctor.Ear || doctor.vitiligo) *
                    (doctor.vitiligoWaiting || doctor.EarWaiting) +
                  (doctor.Nose || doctor.skinRash) *
                    (doctor.NoseWaiting || doctor.skinRash)
                }
                disease1={doctor.Ear || doctor.vitiligo}
                disease2={doctor.NoseWaiting || doctor.skinRash}
                disease1Name={doctor.Ear ? "Ear" : "vitiligo"}
                disease2Name={doctor.Nose ? "Nose" : "skinRash"}
                id={doctor.id}
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

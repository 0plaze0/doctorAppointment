import styles from "./styles.module.css";
import DoctorProfileCard from "./../profileCard/doctorProfileCard";
import data from "./../../db/doctor.json";
const Main = () => {
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
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <ul>
        {docDetails.map((doctor) => (
          <li key={doctor.id}>
            <DoctorProfileCard
              name={doctor.name}
              description={doctor.description}
              image={doctor.img}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;

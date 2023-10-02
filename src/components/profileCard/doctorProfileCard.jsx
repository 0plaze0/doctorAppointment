import "./styles.css";
import profile_pic from "./Assest/101.jpg";

const DoctorProfileCard = ({ name, description, image }) => {
  const src = `${profile_pic}/../${image}.jpg`;
  console.log(src);
  return (
    <div className="dfc">
      <div className="gradient"></div>
      <div className="profile-down">
        <img src={src} alt="Doctor" />
        <h2 className="profile-title">{name}</h2>
        <p className="profile-descrption">{description}</p>
        <button className="profile-button">
          <a href="https://github.dev/0plaze0">Contact</a>
        </button>
      </div>
    </div>
  );
};

export default DoctorProfileCard;

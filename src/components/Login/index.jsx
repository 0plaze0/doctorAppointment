import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  console.log(data);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://doctorappointment-970x.onrender.com/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (err) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      )
        setError(error.response.data.message);
    }
  };

  return (
    <div>
      <div className={styles.login_container}>
        <div className={styles.login_form_container}>
          <div className={styles.left}>
            <form className={styles.form_container} onSubmit={handleSubmit}>
              <h1>Login to Your Account</h1>
              <input
                className={styles.input}
                type="email"
                placeholder="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
              <input
                className={styles.input}
                type="password"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={handleChange}
              />
              {error && <div className={styles.error_msg}>{error}</div>}
              <button
                type="submit"
                className={styles.green_btn}
                onSubmit={handleSubmit}
              >
                Sign In
              </button>
            </form>
          </div>
          <div className={styles.right}>
            <h1>New Here ?</h1>
            <Link to="/signup">
              <button type="button" className={styles.white_btn}>
                sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

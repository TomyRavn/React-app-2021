import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text, onClick }) {
    // <button style={{ backgroundColor: "tomato", color: "white" }}>
    //   {text}
    // </button>
  return (
    <button className={styles.btn} onClick={onClick}>
        {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;

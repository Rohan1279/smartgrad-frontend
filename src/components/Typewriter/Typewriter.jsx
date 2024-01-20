import PropTypes from "prop-types";
import "./Typewriter.css";
const Typewriter = ({ children }) => {
  return (
    <div className="typewriter">
      <h1>{children}</h1>
    </div>
  );
};

Typewriter.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Typewriter;

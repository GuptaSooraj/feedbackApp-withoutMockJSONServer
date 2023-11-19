import { FaQuestion } from "react-icons/fa6";
import { Link } from "react-router-dom";

function AboutIconLink() {
  return (
    <div className="about-link">
      <Link to="http://localhost:3000/about">
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutIconLink;

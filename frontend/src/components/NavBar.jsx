import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin, AiFillContacts } from "react-icons/ai";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <button type="button" className="button">
        <Link to="/linkedin">
          <AiFillLinkedin />
        </Link>
      </button>
      <button type="button" className="button">
        <Link to="/github">
          <AiFillGithub />
        </Link>
      </button>
      <button type="button" className="button">
        <Link to="/contact">
          <AiFillContacts />
        </Link>
      </button>
    </div>
  );
}

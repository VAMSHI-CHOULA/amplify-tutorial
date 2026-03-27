import { Link } from "react-router-dom";

export default function Header() {
  return (

      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
      </ul>
  );
}

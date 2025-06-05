import { Link } from "react-router-dom";
import '../css/Logo.css';  // Create this CSS file with your styles

function Logo() {
  return (
    <Link to={`/`}>
      <svg className="movieDBLogo"width="100" height="35" viewBox="0 0 250 70" xmlns="http://www.w3.org/2000/svg">
        <rect className="bg" width="250" height="70" rx="10" />
        <g className="logo-group">
          <rect className="dice" x="15" y="15" width="40" height="40" rx="8" />
          <circle className="dot" cx="25" cy="25" r="2.5" />
          <circle className="dot" cx="25" cy="35" r="2.5" />
          <circle className="dot" cx="25" cy="45" r="2.5" />
          <circle className="dot" cx="45" cy="25" r="2.5" />
          <circle className="dot" cx="45" cy="35" r="2.5" />
          <circle className="dot" cx="45" cy="45" r="2.5" />
          <text x="70" y="45" className="title">MovieDB</text>
        </g>
      </svg>
    </Link>
  );
}

export default Logo;
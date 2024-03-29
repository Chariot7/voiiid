import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function navbar() {
  return (
    <nav className="nav">
      <CustomLink to="/" className="site-title">
        VOiiiD
      </CustomLink>
      <ul>
      <CustomLink to="/circle">
          <svg
            className="circle"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44"
            width="22"
            height="22"
          >
            <circle cx="21.9" cy="22" r="20" />
          </svg>
        </CustomLink>
      <CustomLink to="/square">
          <svg
            className="square"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            width="21"
            height="20"
          >
            <rect width="20" height="20" x="0" y="0" />
          </svg>
        </CustomLink>
        <CustomLink to="/particles">
          <svg
            className="particles"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            width="20"
            height="22"
          >
            <rect width="8" height="9" x="2" y="1" />
            <rect width="8" height="9.4" x="10" y="10" />
          </svg>
        </CustomLink>
        <CustomLink to="/triangle">
          <svg
            className="triangle"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 34 29"
            width="34"
            height="21"
          >
            <rect width="30" height="5" x="-16" y="18" transform="rotate(-45)"/>
          </svg>
        </CustomLink>
     
        
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedpath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedpath.pathname, end: true });
  //Check the above for end:true if there are nested routes
  return (
    <li className={isActive ? "active" : ""}>
      <Link className={to.substring(1)} to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

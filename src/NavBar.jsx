import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { List } from 'react-bootstrap-icons';

export default function NavBar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top shadow-sm">
      <div className="container">
        <NavLink
          to="/"
          className="Title text-decoration-none fw-bold fs-2"
          color = "primary"
        >
          <TaskAltIcon/>
          TaskLoop
        </NavLink>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ms-lg-4 fs-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item ms-lg-4 fs-4">
              <NavLink
                to="/todolist"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold" : ""}`
                }
              >
                To-Do-List
              </NavLink>
            </li>
            <li className="nav-item ms-lg-4 fs-4">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold" : ""}`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>

        <Link
          to="/cart"
          className="position-relative text-decoration-none me-5 d-none d-lg-block"
        >
        </Link>
      </div>
    </nav>
  );
}

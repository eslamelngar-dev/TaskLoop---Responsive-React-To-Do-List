import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <>
      <h3>Organize Your Life, One Task at a Time </h3>
      <p>
        Our modern To-Do List app helps you stay on top of your goals with a
        clean, intuitive interface and powerful features.
      </p>
    <Link to="/todolist">
      <button>Get Started</button>
    </Link>
    </>
  );
}

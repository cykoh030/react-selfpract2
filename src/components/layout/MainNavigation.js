import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <div className={classes.header}>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </div>
  );
};

export default MainNavigation;

import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const NotFound = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (timer === 5) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;

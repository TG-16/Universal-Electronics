import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [authorized, setAuthorized] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/check-auth", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Authorized") {
          setAuthorized(true);
        }
        setChecked(true);
      })
      .catch((err) => {
        console.error("Auth error:", err);
        setChecked(true); // still need to finish checking
      });
  }, []);

  if (!checked) return null; // don't render anything until check is done

  return authorized ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

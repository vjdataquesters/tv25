import { useEffect } from "react";

const Redirect = ({ to }) => {
  useEffect(() => {
    window.location.href = to;
  }, []);
  return null;
};

export default Redirect;
import { useEffect, useState } from "react";

const isOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOffline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

export default isOnline;

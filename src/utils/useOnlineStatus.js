import { useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState();
  window.addEventListener("online", () => {
    // console.log("Internet is back!");
    setOnlineStatus(true);
  });
  window.addEventListener("offline", () => {
    // console.log("Connection lost!");
    setOnlineStatus(false);
  });
  return onlineStatus;
};

export default useOnlineStatus;

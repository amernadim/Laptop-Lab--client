import { useEffect, useState } from "react";

const useAccessToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`https://laptop-lab-server.vercel.app/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            localStorage.setItem("token", data.accessToken);
            setToken(data.accessToken);
          }
        });
    }
  }, [email]);
  return [token];
};

export default useAccessToken;

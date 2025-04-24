import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import { useAuth } from './AuthContext';
import axios from "axios";

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const state = params.get("state");
    const error = params.get("error");

    if (error) {
      console.error("Error during authentication:", error);
      // Handle Error: TODO
      return;
    }

    if (code) {
      const fetchAccessToken = async () => {
        try {
          const response = await axios.post("http://localhost:8080/callback", {
            code,
            state,
          });

          const { access_token, expires_in } = response.data;
          console.log("Access Token:", access_token);
          navigate("/dashboard");
        } catch (error) {
          console.error("Error fetching access token:", error);
        }
      };

      fetchAccessToken();
    }
  }, [navigate]);

  return <div>Processing authentication...</div>;
};

export default Callback;

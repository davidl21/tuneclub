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

    // error if user does not accept request or error occurred
    const error = params.get("error");

    if (error) {
      console.error("Error during authentication:", error);
      // Handle Error: TODO
      return;
    }

    if (code) {
      // TODO: request access token, exchange auth code for access token.
    }
  });

  return <div>callback</div>;
};

export default Callback;

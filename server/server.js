require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const querystring = require("querystring");
const crypto = require("crypto");

const CLIENT_ID = process.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.VITE_SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = process.env.VITE_REDIRECT_URI;

const app = express();
const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));

app.get("/login", (req, res) => {
  const scope =
    "user-read-private user-read-email user-library-read user-read-playback-state user-modify-playback-state streaming playlist-read-collaborative";
  const state = crypto.randomBytes(16).toString("hex");

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: CLIENT_ID,
        scope: scope,
        redirect_uri: REDIRECT_URI,
        state: state,
      })
  );
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

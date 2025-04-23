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

app.get("/callback", async (req, res) => {
  const code = req.query.code || null;
  const state = req.query.state || null;

  if (state === null) {
    res.redirect(
      "/#" +
        querystring.stringify({
          error: "state_mismatch",
        })
    );
  } else {
    const authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: code,
        redirect_uri: REDIRECT_URI,
        grant_type: "authorization_code",
      },
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic" +
          new Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
      },
      json: true,
    };

    try {
      const response = await axios.post(
        authOptions.url,
        querystring.stringify(authOptions.form),
        {
          headers: authOptions.headers,
        }
      );

      const { access_token, token_type, scope, expires_in, refresh_token } =
        response.data;
      // TODO: Process tokens/response
    } catch (error) {
      console.error("Error exchanging code for tokens:", error);
      res.status(500).send("Error exchanging code for tokens");
    }
  }
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

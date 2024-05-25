function parseBody(req, callback) {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      callback(null, body);
    });
  };

  function parseBody(req, callback) {
    // Код функции
  req.on("error", (error) => {
    callback(error, null);
  });
}

module.exports = parseBody;
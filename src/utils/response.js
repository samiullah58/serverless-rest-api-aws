const base = (statusCode, body) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
  },
  body: JSON.stringify(body),
});

// ✅ Common response helpers
exports.ok = (body) => base(200, body);
exports.created = (body) => base(201, body);
exports.error = (status = 500, message = "Internal Server Error") =>
  base(status, { error: message });
exports.success = (statusCode, body) => base(statusCode, body);

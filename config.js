"use strict";
exports.DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost/peek-api";
exports.TEST_DATABASE_URL =
  process.env.TEST_DATABASE_URL || "mongodb://localhost/peek-api";
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET || "test";
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || "7d";
exports.CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:3000";
//test

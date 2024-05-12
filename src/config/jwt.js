import jwt from "jsonwebtoken";

export const createToken = (data) => {
  let token = jwt.sign({ data }, "BIMAT", {
    algorithm: "HS256",
    expiresIn: "10m",
  });

  return token;
};

export const checkToken = (token) =>
  jwt.verify(token, "BIMAT", (error, decoded) => error);

export const createRefToken = (data) => {
  let token = jwt.sign({ data }, "KO_BIMAT", {
    algorithm: "HS256",
    expiresIn: "7d",
  });

  return token;
};

export const checkRefToken = (token) =>
  jwt.verify(token, "KO_BIMAT", (error, decoded) => error);

export const decodeToken = (token) => {
  return jwt.decode(token);
};

export const verifyToken = (req, res, next) => {
  let { token } = req.headers;

  let check = checkToken(token);

  if (check == null) {
    // check if token available
    next();
  } else {
    // token is not available
    res.status(401).send(check.name);
  }
};

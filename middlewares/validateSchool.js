export const validateSchool = (req, res, next) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || typeof name !== "string") {
    return res.status(400).json({ error: "Invalid name" });
  }

  if (!address || typeof address !== "string") {
    return res.status(400).json({ error: "Invalid address" });
  }

  if (!latitude || isNaN(latitude) || latitude < -90 || latitude > 90) {
    return res.status(400).json({ error: "Invalid latitude" });
  }

  if (!longitude || isNaN(longitude) || longitude < -180 || longitude > 180) {
    return res.status(400).json({ error: "Invalid longitude" });
  }
  next();
};

export const validateCoordinates = (req, res, next) => {
  const { latitude, longitude } = req.query;
  // TODO+Note: coordinates must be converted to number
  if (!latitude || isNaN(latitude) || latitude < -90 || latitude > 90) {
    return res.status(400).json({ error: "Invalid latitude" });
  }

  if (!longitude || isNaN(longitude) || longitude < -180 || longitude > 180) {
    return res.status(400).json({ error: "Invalid longitude" });
  }
  next();
};

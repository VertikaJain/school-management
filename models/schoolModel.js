import db from "../config/db.js";

export const createSchool = async (data) => {
  const sql = `INSERT INTO schools (name, address, latitude, longitude)
    VALUES(?,?,?,?)`;
  const [result] = await db.execute(sql, data);
  return result;
};

// Formula to find school nearest to user
const DISTANCE_FORMULA = `
  (6371 * ACOS(
    COS(RADIANS(?)) * COS(RADIANS(latitude)) *
    COS(RADIANS(longitude) - RADIANS(?)) +
    SIN(RADIANS(?)) * SIN(RADIANS(latitude))
  ))
`;
export const getNearestSchools = async (latitude, longitude) => {
  const sql = `
  SELECT *, ${DISTANCE_FORMULA} AS distance
  FROM schools
  ORDER BY distance ASC
`;
  const [result] = await db.execute(sql, [latitude, longitude, latitude]);
  return result;
};

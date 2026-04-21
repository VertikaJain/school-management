import db from "../config/db.js";

export const createSchool = async (data) => {
  const sql = `INSERT INTO schools (name, address, latitude, longitude)
    VALUES(?,?,?,?)`;
  const [result] = await db.execute(sql, data);
  return result;
};

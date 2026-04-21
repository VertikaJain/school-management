import { createSchool } from "../models/schoolModel.js";

/*
Add School API:
Endpoint: /addSchool
Method: POST
Payload: Includes name, address, latitude, and longitude.
Functionality: Validates the input data and adds a new school to the schools table.
Validation: Ensure all fields are properly validated before insertion (e.g., non-empty, correct data types).
*/
export const addNewSchool = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  try {
    const result = await createSchool([name, address, latitude, longitude]);
    res
      .status(201)
      .json({ message: "Created new School", id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
};

/*
List Schools API:
Endpoint: /listSchools
Method: GET
Parameters: User's latitude and longitude.
Functionality: Fetches all schools from the database, sorts them based on proximity to the user's location, and returns the sorted list.
Sorting Mechanism: Calculate and sort by the geographical distance between the user's coordinates and each school's coordinates.
*/

export const listSchools = async (req, res) => {};

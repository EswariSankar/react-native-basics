import axios from "axios";

// Function to fetch random users
export const getRandomUsers = async (count = 1) => {
  try {
    const res = await axios.get(`https://randomuser.me/api/?results=${count}`);
    return res.data.results; // returns array of users
  } catch (error) {
    console.error("Error fetching random users:", error);
    return [];
  }
};
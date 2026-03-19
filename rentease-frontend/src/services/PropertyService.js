import axios from "axios";

const API_URL = "https://devops61.onrender.com/api/properties";

class PropertyService {
  getAllProperties() {
    return axios.get(API_URL).catch(err => {
      console.error("Error fetching properties:", err);
      return { data: [] };
    });
  }

  addProperty(property) {
    return axios.post(API_URL, property).catch(err => {
      console.error("Error adding property:", err);
      throw err;
    });
  }

  updateProperty(id, property) {
    return axios.put(`${API_URL}/${id}`, property).catch(err => {
      console.error("Error updating property:", err);
      throw err;
    });
  }

  deleteProperty(id) {
    return axios.delete(`${API_URL}/${id}`).catch(err => {
      console.error("Error deleting property:", err);
      throw err;
    });
  }
}

const propertyService = new PropertyService();
export default propertyService;

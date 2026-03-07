import axios from "axios";

const API_URL = "https://project61-1.onrender.com/api/properties";

class PropertyService {
  getAllProperties() {
    return axios.get(API_URL);
  }

  addProperty(property) {
    return axios.post(API_URL, property);
  }

  updateProperty(id, property) {
    return axios.put(`${API_URL}/${id}`, property);
  }

  deleteProperty(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
}

const propertyService = new PropertyService();
export default propertyService;

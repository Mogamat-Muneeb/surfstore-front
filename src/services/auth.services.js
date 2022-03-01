import axios from "axios";
const API_URL = "https://surfstore-backend.herokuapp.com/users/";
class AuthService {
  async login(user) {
    return axios
      .post(API_URL + "signin", {
        fullname: user.fullname,
        password: user.password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(user) {
    return axios.post(API_URL + "signup", {
      fullname: user.fullname,
      email: user.email,
      password: user.password,
      phone_number: user.phone_number
    });
  }
}
export default new AuthService();
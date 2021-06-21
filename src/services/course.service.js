import http from "../http-common";

class CourseDataService {
  getAll(params) {
    return http.get("/courses", { params });
  }
}

export default new CourseDataService();
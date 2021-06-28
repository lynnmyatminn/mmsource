import http from "../http-common";

class CourseDataService {
  getAll(params) {
    return http.get("/courses", { params });
  }

  getCourseById(params) {
    return http.get("/course", { params });
  }
}

export default new CourseDataService();
import firebase from "../firebase";

const db = firebase.collection("/courses");

class CourseDataService {
  getAll() {
    return db.get();
  }

  getCourseById(params) {
    return db.doc(params).get();
  }
}

export default new CourseDataService();

import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";

const query: IResolvers = {
  Query: {
    getStudents(): any {
      return database.students;
    },
    getStudent(__: void, { id }): any {
      const student = database.students.filter(e => e.id === id)[0];
      if (student === undefined) {
        return {
          id: "-1",
          name: `${id} not found`,
          email: "",
          courses: []
        };
      }
      return student;
    },

    getCourses(): any {
      return database.courses;
    },

    getCourse(__: void, { id }): any {
      const course = database.courses.filter(c => c.id === id)[0];
      if (course === undefined) {
        return {
          id: "-1",
          title: `${id} not found`,
          description: "",
          path: "",
          logo: "",
          teacher: "",
          class: 0,
          time: 0,
          level: "ALL",
          reviews: [
              
          ],
          students: []
        };
      }

      return course;
    }
  }
};

export default query;

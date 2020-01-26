import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";
import _ from "lodash";

const urlUdemy = "https://www.udemy.com";

const type: IResolvers = {
  Student: {
    courses: parent => {
      const listCourses: Array<any> = [];
      parent.courses.map((courseId: string) => {
        listCourses.push(_.filter(database.courses, ["id", courseId])[0]);
      });
      return listCourses;
    }
  },
  Course: {
    students: parent => {
      const listStudents: Array<any> = [];
      const idCourse = parent.id;
      database.students.map((student: any) => {
        if (student.courses.filter((id: any) => id === idCourse))
          listStudents.push(student);
      });
      return listStudents;
    },
    path: parent => urlUdemy + parent.path
  }
};
export default type;

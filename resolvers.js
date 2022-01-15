import Student from "./models/Student.js";

const resolvers = {
  Query: {
    getStudents: async () => {
      const students = await Student.find();
      return students;
    },
    getStudent: async (root, args) => {
      const student = await Student.findById(args.id);
      return student;
    },
  },
  Mutation: {
    addStudent: async (root, args) => {
      const newStudent = new Student({
        name: args.name,
        course: args.course,
        year: args.year,
      });
      await newStudent.save();
      return newStudent;
    },
    updateStudent: async (root, args) => {
      const { id, name, course, year } = args;
      const updatedStudent = {};
      if (name != undefined) {
        updatedStudent.name = name;
      }
      if (course != undefined) {
        updatedStudent.course = course;
      }
      if (year != undefined) {
        updatedStudent.year = year;
      }

      const student = await Student.findByIdAndUpdate(id, updatedStudent, {
        new: true,
      });

      return student;
    },
    deleteStudent: async (root, args) => {
      await Student.findByIdAndDelete(args.id);
      return "Student deleted successfully";
    },
  },
};

export default resolvers;
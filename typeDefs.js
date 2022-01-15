import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Student{
        id:ID
        name:String
        course:String
        year:String
    }

    type Query{
        getStudents:[Student]
        getStudent(id:ID):Student
    }

    type Mutation{
        addStudent(name:String,course:String,year:String):Student
        updateStudent(id:ID,name:String,course:String,year:String):Student
        deleteStudent(id:ID):String
    }
`;

export default typeDefs;

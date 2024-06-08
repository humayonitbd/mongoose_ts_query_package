import QueryBuilder from "mongoose_ts_query_builder";
import { Student } from "./student.model";

const studentSearchableFields = ["name", "email", "studentId"];

const getAllStudentService = async (query: Record<string, unknown>) => {
  const student = Student.find().populate("admissionSemester");

  const studentQuery = new QueryBuilder(student, query)
    .search(studentSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await studentQuery.modelQuery;
  return result;
};

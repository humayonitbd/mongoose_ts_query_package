"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_ts_query_builder_1 = __importDefault(require("mongoose_ts_query_builder"));
const student_model_1 = require("./student.model");
const studentSearchableFields = ["name", "email", "studentId"];
const getAllStudentService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const student = student_model_1.Student.find().populate("admissionSemester");
    const studentQuery = new mongoose_ts_query_builder_1.default(student, query)
        .search(studentSearchableFields)
        .filter()
        .sort()
        .paginate()
        .fields();
    const result = yield studentQuery.modelQuery;
    return result;
});

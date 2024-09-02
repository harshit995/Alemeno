import { ERROR, LOADING, MARK_COMPLETED, SUCCESS } from "./actionTypes";

export const rootReducer = (state, { type, payload }) => {
    switch (type) {
        case SUCCESS:
            return { ...state, isLoading: false, isError: false, courses: payload };
        case ERROR:
            return { ...state, isLoading: false, isError: true };
        case LOADING:
            return { ...state, isLoading: true, isError: false };
        case MARK_COMPLETED:
            const { courseId, studentId } = payload;
            const updatedCourses = state.courses.map((course) => {
                if (course._id === courseId) {
                    const updatedStudents = course.students.map((student) =>
                        student._id === studentId ? { ...student, completed: true } : student
                    );
                    return { ...course, students: updatedStudents };
                }
                return course;
            });
            return { ...state, isLoading: false, isError: false, courses: updatedCourses };
        default:
            return state;
    }
};

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "./index"
import Student from "../types/Student"

const API = "http://localhost:3000/api/students"

type Response = {
    status: "idle" | "loading" | "succeeded" | "failed",
    data: { name: string, students: Student[] },
    error: any
}

interface Action {
    type: string
    payload: {
        id: number
    }
}

const initialState: Response = {
    data: { name: "", students: [] },
    status: "idle",
    error: null
}

export const fetchStudents = createAsyncThunk<{ name: string, students: Student[] }>("student/fetchStudents", async () => {
    const response = await fetch(API);
    const jsonData = await response.json();
    return jsonData;
})

export const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {
        increment(state, action: Action) {
            const { id } = action.payload
            const student = state.data.students.find(student => student.id === id)
            if (student) {
                student.score += 1
            }
        },

        decrement(state, action: Action) {
            const { id } = action.payload
            const student = state.data.students.find(student => student.id === id)
            if (student) {
                student.score -= 1
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchStudents.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchStudents.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.data.name = action.payload.name
                state.data.students = action.payload.students
            })
            .addCase(fetchStudents.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    }
})

export const getName = (state: RootState) => state.student.data.name
export const getStudents = (state: RootState) => state.student.data.students
export const getStatus = (state: RootState) => state.student.status
export const getActiveStudentCount = (state: RootState) => state.student.data.students.filter(student => student.active).length
export const getTotalStudentCount = (state: RootState) => state.student.data.students.length

export const { increment, decrement } = studentSlice.actions

export default studentSlice.reducer
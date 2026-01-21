import { Subject } from "../types"

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer science",
        description: "An introduction course over computer science",
        department: "CS",
        createdAt: new Date().toISOString(),
    },
    {
        id: 2,
        code: "MATH201",
        name: "Calculus II",
        description: "Advanced Study of integrals",
        department: "Math",
        createdAt: new Date().toISOString(),
    },
    {
        id: 3,
        code: "ENG102",
        name: "Literature and composition",
        description: "A course focused on critical english literature",
        department: "English",
        createdAt: new Date().toISOString(),
    },
]

export const LearnbookConfig = {
    apiUrl: 'http://localhost:6776/',
    users: [
        {
            "id": 1,
            "user": "Instructor",
            "nav": [
                {
                    "name": "Courses"
                },
                {
                    "name": "Assignments"
                },
                {
                    "name": "Quizzes"
                },
                {
                    "name": "Reports"
                }
            ]
        },
        {
            "id": 2,
            "user": "Student",
            "nav": [
                {
                    "name": "Courses"
                },
                {
                    "name": "Assignments"
                },
                {
                    "name": "Quizzes"
                },
                {
                    "name": "Grades"
                }
            ]
        }
    ]
};
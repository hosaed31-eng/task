class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    calculateAverage() {
        const total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }

    getGrade() {
        const average = this.calculateAverage();

        if (average >= 90) return "A";
        else if (average >= 80) return "B";
        else if (average >= 70) return "C";
        else if (average >= 60) return "D";
        else if (average >= 50) return "E";
        else return "F";
    }

    getResult() {
        if (this.calculateAverage() >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}

const studentsList = [
    new Student(1, "Ahmed", [90, 85, 95], 90),
    new Student(2, "Mohamed", [45, 48, 42], 80),
    new Student(3, "Ali", [70, 75, 80], 85),
    new Student(4, "Omar", [40, 45, 48], 70)
];

const strugglingStudents = studentsList.filter(student => {
    const average = student.calculateAverage();
    return average >= 40 && average <= 49;
});

const studentsAfterGrace = strugglingStudents.map(student => ({
    name: student.name,
    newAverage: student.calculateAverage() + 5
}));

const totalAfterGrace = studentsAfterGrace.reduce(
    (sum, student) => sum + student.newAverage, 0
);

const graceAverage = studentsAfterGrace.length > 0
    ? totalAfterGrace / studentsAfterGrace.length
    : 0;

console.log("===== STUDENTS REPORT =====");

studentsList.forEach(student => {
    console.log({
        Name: student.name,
        Average: student.calculateAverage(),
        Grade: student.getGrade(),
        Result: student.getResult()
    });
});

console.log("===== STUDENTS AFTER GRACE =====");
console.table(studentsAfterGrace);

console.log("Grace Average:", graceAverage);
class TaskValidator {
    validateTitle(title) {
        if (!title || title.trim().length === 0) {
            throw new Error("Title is required");
        }
        if (title.length < 3) {
            throw new Error("Title must be at least 3 characters");
        }
        if (title.length > 100) {
            throw new Error("Title cannot exceed 100 characters");
        }
        return true;
    }

    validateDueDate(dueDate) {
        const today = new Date();
        const selectedDate = new Date(dueDate);
        if (selectedDate < today) {
            throw new Error("Due date cannot be in the past");
        }
        return true;
    }
}

document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const validator = new TaskValidator();
    const title = document.getElementById('taskTitle').value;
    const dueDate = document.getElementById('dueDate').value;

    try {
        validator.validateTitle(title);
        validator.validateDueDate(dueDate);
        console.log('task submitted to santa claus.');
    } catch (error) {
        document.getElementById('titleError').textContent = error.message;
    }
});
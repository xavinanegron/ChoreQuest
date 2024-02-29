import tasksData from "./TasksData";
import AddTaskForm from "./AddTaskForm";
import { useState } from "react";

function TaskList() {
    const [tasks, setTasks] = useState(tasksData);

    // Function to add new custom task to the task list
    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <div className="task-list row">
            <div className="tasks col-lg-12">
                <h2 className="chore-title">Discover Chores 🔎</h2>
                <h2 className="chore-title-question col-lg-12">Set Sail on Your Chore Quest! Which missions will you conquer?</h2>
                <div className="row">
                    {tasks.map(task => (
                        <div key={task.id} className="col-lg-6">
                            <div className="task d-flex justify-content-between align-items-center">
                                <div>
                                    <h3 className="task-name">{task.name} {task.emoji}</h3>
                                    <h4 className="task-description">{task.description}</h4>
                                    <h2 className="points-earned">Get {task.points} points!</h2>
                                </div>
                                <input type="checkbox" className="task-checkbox"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-lg-12">
                <div className="task-form">
                    <AddTaskForm addTask={addTask} />
                </div>
            </div>
        </div>
    )
};

export default TaskList;

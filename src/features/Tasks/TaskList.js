import tasksData from "./TasksData";
import AddTaskForm from "./AddTaskForm";
import { useState } from "react";
import ViewRewardsButton from "../Rewards/ViewRewardsButton";
import UserProfile from "../User/UserProfile";
import ExploreTaskButton from "./ExploreTaskButton";

function TaskList() {
    const [tasks, setTasks] = useState(tasksData);

    // Fn to add new custom task to the task list
    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <div className="task-list row">
            <div className="menu-chores col-lg-12"> 
                <ExploreTaskButton />
                <ViewRewardsButton />
                <UserProfile />
            </div>
            <div className="tasks col-lg-12">
                <h2 className="chore-title">Discover Chores</h2>
                <div className="row">
                        {tasksData.map(task => (
                        <div key={task.id} className="col-lg-6"> {/* This ensures each task is in a column that takes up half the width of its parent */}
                            <div className="task">
                            <h3 className="task-name">{task.name} {task.emoji}</h3>
                            <h4 className="task-description">{task.description}</h4>
                            <h2 className="points-earned">Get {task.points} points!</h2>
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
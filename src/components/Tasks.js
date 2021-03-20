import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle}) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
                // .map loops through each task, Task inputs a component, task={task} passes each task as a prop
            ))}
        </>
    )
}

export default Tasks

import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle}) => {
    // { task } "catches" the prop from Tasks.js
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}
         onDoubleClick={() => onToggle(task.id)}
        >
            <h3>{task.text} <FaTimes style={{color: 'red',cursor: 'pointer'}}
            onClick={() => onDelete(task.id)}
            /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task

import './displaygrid.css'
import {useState} from "react";
import moment from "moment";

export default function DisplayGrid(props) {
    const [tasks, updateTasks] = useState(props.tasks)

    const elements = tasks.map(task => (
        <article key={task.id} className="task-card">
            <p className="task-item">{task.text}</p>
            <p className="task-dates-info">Created at : {moment(task.created_at).startOf('seconds').fromNow()}</p>
            <p className="task-dates-info">Updated at : {moment(task.updated_at).startOf('seconds').fromNow()}</p>
        </article>
    ))

    return (
        <section className="tasks-grid">
            {elements}
        </section>
    )
}
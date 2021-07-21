import React, {useState} from 'react';



const Form = props => {
    const [inputState, setInputState] = useState ("")
    const {tasks, setTasks} = props

    const handleSubmit = e => 
    {
        e.preventDefault()
        setTasks([
            ...tasks,{
            "entry" : inputState,
            "isComplete": false
            }
        ])
        setInputState("")
        console.log(tasks)
    }


    return(
        <form onSubmit={handleSubmit}>
            <p>
                Todo:
                <input type="text" value={inputState} onChange={e => setInputState(e.target.value)}/>
            </p>
            <button>Add Task</button>
        </form>
    )
}















export default Form;
import {useState} from 'react';

export const Todo = ()  => {
    // const  [tasks, setTasks] = useState(
    //     [
    //         {id:12, title: "Se Calcifier la glande pinéale", isDone: false},
    //         {id:4, title: "Se Calcifier la glande pinéale", isDone: false},
    //         {id:13, title: "Se Calcifier la glande pinéale", isDone: false},
    //         {id:11, title: "Se Calcifier la glande pinéale", isDone: false}
    //     ]
    // );



    const [inputValue, setInputValue] = useState("Nouvelle Tache");

    const addTask = (taskName) => {
        // const newTask ={
        //     id:Date.now(), 
        //     title: taskName, 
        //     isDone: false
        // }
        // setTasks([...tasks, newTask])
    }
    const deleteTask = ( id ) => {
        // const filteredTasks = tasks.filter((task) => { return task.id !== id })
        

        // setTasks(filteredTasks);

    }

    // const findById = (id) => {
    //     return {
    //         realTask :tasks.find((task) => task.id === id),
    //         index : tasks.findIndex(( task ) => task.id === id )
    //     }
    // }
    // const getCopyById = (id) => {
    //     const {realTask, index } = findById(id)

    //     const taskCopy = {...realTask};
    //     const taskListCopy = [...tasks];

    //     return {
    //         realTask:realTask,
    //         index:index,
    //         taskCopy:taskCopy,
    //         taskListCopy:taskListCopy,
    //     }
    // }

    // const executeById = (id, callback, payload = {} ) => {
    //     const {index, taskCopy, taskListCopy} = getCopyById(id)
    //     const copy = callback(taskCopy, payload);

    //     taskListCopy[index] = copy;
    //     return taskListCopy;
    // }
    const toggleTask = ( id ) => {
        
        // let taskListCopy = executeById(id, (copy) => {
        //     copy.isDone = !copy.isDone
        //     return copy;
        // })
        // setTasks(taskListCopy);

        // const taskListCopy = executeById(id, (copy, payload) => {
        //     copy.title = copy.title + payload.textModified
        //     return copy;
        // }, {textModified: "Modifié Z"})


        setTasks(taskListCopy);
    }

    const renderTasks = ( ) => {
        return tasks.map((task) => {
            return <div><span onClick={() => toggleTask(task.id)}>{task.isDone ? "Fait": "Pas fait"}</span> - {task.title} <span onClick={() => deleteTask(task.id)}>X</span> </div>
        })

    }

    const onInputChange = (event, value) => {
        if(value != inputValue ){
            setInputValue(value);
        }
    }


    return (
        <div>
            {
                renderTasks()
            }
            <input onChange={(e) => {
                onInputChange(e, e.target.value)
            }}/>
            <button onClick={() => {
                addTask(inputValue);
            }}>Nouvelle Tache</button>

        </div>
    )

}
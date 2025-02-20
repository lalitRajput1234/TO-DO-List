
import NAvbar from "./components/NAvbar"
import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';



function App() {
  const [todo, settodo] = useState('')
  const [todos, settodos] = useState([])

  useEffect(() => {


    let todostring = localStorage.getItem('todos')
    if (todostring) {
      let savetodos = JSON.parse(localStorage.getItem('todos'))
      settodos(savetodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);



  // const SavetoLocalStorage = (params) => {
  //   localStorage.setItem('todos', JSON.stringify(todos))
  // }





  const handleEdit = (e, id) => {
    let newtodo = todos.filter(itm => itm.id === id)
    settodo(newtodo[0].todo)
    let newtodos = todos.filter((item) => {
      return item.id !== id;
    })
    settodos(newtodos)
    // SavetoLocalStorage()



  }

  const handleDelete = (e, id) => {
    let newtodos = todos.filter((item) => {
      return item.id !== id;
    })
    settodos(newtodos)
    // SavetoLocalStorage()


  }
  const handleAdd = () => {

    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    settodo('')
    // SavetoLocalStorage()

  }
  const handlechange = (e) => {
    settodo(e.target.value)
  }
  const handleCheckbox = (e) => {

    let id = e.target.name;
    let index = todos.findIndex((itm) => {
      return itm.id === id
    })
    let newtodos = [...todos];
    todos[index].isCompleted = !todos[index].isCompleted;
    settodos(newtodos)
    // SavetoLocalStorage()

  }


  return (
    <>
      <NAvbar />

      <div className="container mx-auto my-2 w-3/4 rounded-lg p-7 min-h-[85vh] bg-gray-300">
        <div className="addTodo ">
          <h2 className="text-lg font-bold">Add a todo</h2>
          <input type="text" className="w-1/2 rounded-lg my-3" onChange={handlechange} value={todo} />
          <button onClick={handleAdd} disabled={todo.length<=3} className="mx-3 bg-slate-500 rounded-lg font-medium text-sm p-1 w-12 disabled:bg-violet-400">Save</button>
        </div>

        <div className="showtodos my-10">
          <h2 className="text-lg font-bold"> Your Todos</h2>
          <div className="todos">
            {todos.length === 0 && <div className="flex p-4">No Todo present</div>}

            {todos.map((text) => {
              return <div key={text.id} className="todo flex mt-3 justify-between">
                <div className="flex gap-5">
                  <input type="checkbox" name={text.id} onChange={handleCheckbox} id="" checked={text.isCompleted} />
                  <div className={text.isCompleted ? 'line-through' : ''} >
                    {text.todo}
                  </div>
                </div>
                <div className="buttons mx-4">
                  <button onClick={(e) => { handleEdit(e, text.id) }} className="mx-3 bg-slate-500 rounded-lg font-medium text-sm p-1 w-12">Edit</button>
                  <button onClick={(e) => { handleDelete(e, text.id) }} className="mx-3 bg-slate-500 rounded-lg font-medium text-sm p-1 w-12">Delete</button>
                </div>
              </div>
            })}

          </div>

        </div>
      </div>

    </>
  )
}

export default App

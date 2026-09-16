import { useState, useEffect } from 'react'
import { v4 as uuid4 } from 'uuid';

function App() {

  const [todo, setTodo] = useState("")

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos")

    if (!savedTodos) {
      return []
    }

    try {
      const parsedTodos = JSON.parse(savedTodos)
      return Array.isArray(parsedTodos) ? parsedTodos : []
    } catch {
      // Ignore invalid data instead of preventing the app from loading.
      return []
    }
  })

  useEffect(() => {

    localStorage.setItem("todos", JSON.stringify(todos))

  }, [todos])

  const handleAdd = () => {

    setTodos(
      [
        ...todos,
        {
          id: uuid4(),
          todo,
          isCompleted: false
        }
      ]
    )

    setTodo("")
  }

  const handleEdit = (id) => {

    const item = todos.find(item => item.id === id)

    setTodo(item.todo)

    setTodos(

      todos.filter(
        item => item.id !== id
      )
    )
  }

  const handleDelete = (id) => {

    setTodos(

      todos.filter(
        item => item.id !== id
      )
    )
  }

  const handelChange = (e) => {
    setTodo(e.target.value)
  }

  const handelChangeBox = (id) => {

    setTodos(
      todos.map(item => {

        return (
          item.id === id ? {
            ...item,
            isCompleted: !item.isCompleted
          } : item
        )
      })
    )
  }

  return (
    <>
      <div className='container flex justify-center flex-col bg-violet-50 mx-auto mt-50 p-4 rounded-2xl w-300'>

        <div className='bg-violet-200 p-5 mb-10 space-y-4 rounded-2xl'>

          <h1 className="text-2xl font-medium  tracking-widest uppercase text-gray-700">Your ToDo</h1>

          <div className='flex items-center space-x-3'>

            <input onChange={handelChange} value={todo} type="text" className='w-full outline-1 rounded-lg px-3 text-2xl' />

            <button onClick={handleAdd} disabled={todo.length < 4} className='bg-violet-800 rounded-sm text-white px-2 font-semibold'>Add</button>

          </div>

        </div>

        <div className='bg-violet-200 p-5 rounded-2xl space-y-4'>

          <h2 className='text-2xl font-medium tracking-wider uppercase text-gray-700'>Your ToDo's</h2>

          <div className="flex flex-col gap-3 w-full">
            {todos.length === 0 && <div>No Todo's to Display</div>}
            {todos.map((item) => (

              <div
                key={item.id}
                className="flex items-center gap-3 w-full"
              >
                <input
                  onChange={() => handelChangeBox(item.id)}
                  checked={item.isCompleted}
                  type="checkbox"
                  className='size-5'
                />

                <span
                  className={`${item.isCompleted ? "line-through" : ""} min-w-0 flex-1 wrap-break-words text-lg capitalize sm:text-2xl`}>
                  {item.todo}
                </span>

                <button
                  onClick={() => handleEdit(item.id)}
                  className="bg-violet-800 rounded-sm text-white px-3 py-1 font-semibold"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-violet-800 rounded-sm text-white px-3 py-1 font-semibold"
                >
                  Delete
                </button>

              </div>
            ))}
          </div>

        </div>

      </div>

    </>
  )
}

export default App

import Button from './components/button'
import Task from './components/task'

function App() {
  return (
    <>
      <header className="bg-primary py-8 px-5">
        <h1 className="text-5xl text-center text-white font-bold">Todo List</h1>
      </header>
      <main className="grid sm:justify-center">
        <div className="grid sm:grid-cols-2 sm:justify-between items-center gap-3 sm:max-w-[768px] pt-[100px] pb-5 mx-3 sm:m-0 border-b-2 border-b-secondary">
          <h2 className="text-primary text-2xl font-bold">To Do</h2>
          <div className="grid sm:grid-cols-3 gap-2">
            <Button text="Tasks to do" />
            <Button text="Tasks done" />
            <Button text="Delete all" />
          </div>
        </div>
        <div className="py-5">
          <Task />
        </div>
        <div className="grid place-items-center">
          <button className="border-y text-gray border-gray max-w-max px-2 py-1 ">
            + Add new
          </button>
        </div>
      </main>
    </>
  )
}

export default App

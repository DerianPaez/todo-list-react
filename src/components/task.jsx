export default function Task() {
  return (
    <div className="flex place-items-center gap-4">
      <input
        type="checkbox"
        className="accent-primary border-2 border-red-600 rounded-full w-4 h-4"
      />
      <input type="text" placeholder="New task" className="outline-none" />
    </div>
  )
}

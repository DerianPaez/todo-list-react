/* eslint-disable react/prop-types */
export default function Button({ text }) {
  return (
    <button className="bg-primary hover:bg-buttonHover px-4 py-2 rounded-md text-white outline-none">
      {text}
    </button>
  )
}

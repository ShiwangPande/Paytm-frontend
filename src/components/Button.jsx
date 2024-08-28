
export default function Button({label, onClick}) {

  return (
    <div>
        <button onClick={onClick} className='w-full font-semibold p-2  rounded-lg text-md bg-black text-white text-center'>{label}</button>
    </div>
  )
}

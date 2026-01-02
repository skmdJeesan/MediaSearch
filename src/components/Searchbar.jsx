import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {

  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(setQuery(text))
    //setText('')
  }

  return (
    <div>
      <form onSubmit={(e) => {submitHandler(e)}} className='flex gap-5 p-4'>
        <input
          value={text}
          onChange={(e) => { setText(e.target.value)}}
          required
          className='w-full hover:bg-zinc-800 bg-zinc-700 px-4 py-1 text-base rounded-full outline-none'
          type="text"
          placeholder='Search anything..' 
        />
        <button 
          className='hover:bg-zinc-800 bg-zinc-700 cursor-pointe p-3 text-xl rounded-full outline-none'>
          <CiSearch />
        </button>
      </form>
    </div>
  )
}

export default SearchBar

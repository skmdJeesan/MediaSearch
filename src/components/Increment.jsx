import React from 'react'

function Increment() {
  return (
    <div className="main h-screen bg-zinc-900 text-white">
      <div className="flex items-center justify-center gap-2 text-white">
        <button
          className="bg-green-500 px-4 py-1 rounded-md cursor-pointer active:scale-95"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className="h-7 w-7 flex justify-center items-center bg-zinc-600 rounded-full">
          {count}
        </span>
        <button
          className="bg-green-500 px-4 py-1 rounded-md cursor-pointer active:scale-95"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div className="form-div">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(incrementByAmount(parseInt(amount)))
          }}
          className="flex gap-4 text-white">
          <button
            type="submit"
            className="bg-green-700 px-4 py-1 rounded-md cursor-pointer active:scale-95"
          >
            Increment by Amount
          </button>
          <input
            onChange={(e) => {setAmount(e.target.value);}}
            type="number"
            value={amount}
            className="w-12 h-7 px-1 rounded border-2 border-amber-50 text-white"
          />
        </form>
      </div>
    </div>
  )
}

export default Increment

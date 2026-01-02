import React from 'react'
import Searchbar from '../components/Searchbar'
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from 'react-redux';

function Home() {
  const {query} = useSelector((store) => store.search)
  return (
    <div className="min-h-screen bg-zinc-900 text-white w-[95%] ml-[5%]">
      <Searchbar />
      {query !== '' ? (
        <>
          <Tabs />
          <ResultGrid />
        </>
      ) : ('')}
    </div>
  )
}

export default Home

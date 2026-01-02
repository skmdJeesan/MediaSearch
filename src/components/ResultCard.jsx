import React from "react";
import { useDispatch } from "react-redux";
import { addCollection, addToast } from "../redux/features/collectionSlice";

function ResultCard({item}) {

  const dispatch = useDispatch()
  const addToCollection = (item) => {
    dispatch(addCollection(item))
    dispatch(addToast())
  }

  return (
    <div className="w-60 h-60 rounded-xl overflow-hidden bg-black/50 relative">
      <a target="_blank" className="h-full" href={item.url}>
        {item.type == "photo" ? (
          <img className="h-full w-full object-cover object-center"
            src={item.src} alt=""/>) : ('')}
        {item.type == "video" ? (
          <video className="h-full w-full object-cover object-center"
            autoPlay loop muted src={item.src}></video>) : ("")}
        {item.type == "gif" ? (
          <img className="h-full w-full object-cover object-center"
            src={item.src} alt=""/>) : ('')}
      </a>
      <div id="bottom" className="flex justify-between gap-3 items-center w-full px-2 py-2 absolute bottom-0 text-white">
        <h2 className="text-base font-semibold capitalize h-7 overflow-hidden">{item.title}</h2>
        <button 
        onClick={() => {addToCollection(item)}}
        className="bg-indigo-600 active:scale-95 text-white text-sm rounded-xl px-2 py-1 cursor-pointer font-medium">
          Save
        </button>
      </div>
    </div>
  );
}

export default ResultCard;

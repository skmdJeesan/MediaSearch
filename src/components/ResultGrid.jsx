import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGifs, fetchPhotos, fetchVideos } from "../api/mediaApi";
import ResultCard from "./ResultCard";
import { setError, setLoading, setResults } from "../redux/features/searchSlice";

function ResultGrid() {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );

  useEffect(function () {
      if (!query) return;
      const getData = async () => {
        try {
          dispatch(setLoading());
          let data = [];
          if (activeTab == "photos") {
            let response = await fetchPhotos(query);
            data = response.results.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt_description,
              thumbnail: item.urls.small,
              src: item.urls.full,
              url: item.links.html,
            }));
          }
          else if (activeTab == "videos") {
            let response = await fetchVideos(query);
            data = response.videos.map((item) => ({
              id: item.id,
              type: "video",
              title: item.user.name || "video",
              thumbnail: item.image,
              src: item.video_files[0].link,
              url: item.url,
            }));
          }
          else if (activeTab == "gif") {
            let response = await fetchGifs(query);
            data = response.results.map((item) => ({
              id: item.id,
              title: item.title || "GIF",
              type: "gif",
              thumbnail: item.media_formats.tinygif.url,
              src: item.media_formats.gif.url,
              url: item.url,
            }));
          }
          dispatch(setResults(data));
          //console.log(data)
        } catch (err) {
          dispatch(setError(err.message));
          console.error(err.message)
        }
      };
      getData();
    },
    [query, activeTab, dispatch]
  );

  if (loading) return <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-500">Loading..</h1>;
  if (error) return <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-500">An error occured!</h1>;
  return (
    <div className="mt-5 flex w-full shrink-0 justify-start flex-wrap gap-8 overflow-auto px-10">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
}

export default ResultGrid;

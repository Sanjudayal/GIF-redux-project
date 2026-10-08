import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGifs } from "../api/mediaApi";
import {
  setQuery,
  setLoading,
  setErrror,
  setResults,
} from "../redux/features/searchSlice";
import { useEffect } from "react";
import { ResultCard } from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      if (!query) return;
      const getData = async () => {
        try {
          dispatch(setLoading());
          let data = {};
          if (activeTab == "images") {
            let response = await fetchPhotos(query);
            data = response.results.map((item) => ({
              id: item.id,
              type: "image",
              title: item.description,
              thumbnail: item.urls.small_s3,
              src: item.urls.full,
            }));
          }
          if (activeTab == "videos") {
            let response = await fetchVideos(query);
            data = response.hits.map((item) => ({
              id: item.id,
              type: "video",
              title: item.name,
              thumbnail: item.videos.small.thumbnail,
              src: item.videos.large.url,
            }));
          }
          if (activeTab == "gifs") {
            let response = await fetchGifs(query);
            data = response.data.map((item) => ({
              id: item.id,
              type: "gifs",
              title: item.title,
              thumbnail: item.images.original.url,
              src: item.images.downsized.url,
            }));
          }
          dispatch(setResults(data));
        } catch (err) {
          dispatch(setErrror(err.messege));
        }

        // console.log(data);
      };
      getData();
    },
    [query, activeTab],
  );

  if (error) return <h1> Error</h1>;
  if (loading) return <h1> Loading...</h1>;

  return (
    <div className="flex justify-center w-full flex-wrap gap-6 overflow-auto px-8">
      {" "}
      {results.map((item, idx) => {
        return <ResultCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ResultGrid;

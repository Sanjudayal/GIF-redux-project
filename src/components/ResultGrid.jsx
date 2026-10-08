import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGifs } from "../api/mediaApi";
import {
  setQuery,
  setLoading,
  setErrror,
  setResults,
} from "../redux/features/searchSlice";
import { useEffect } from "react";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      const getData = async () => {
        let data;
        if (activeTab == "images") {
          let response = await fetchPhotos(query);
          data = response.results;
        } else if (activeTab == "videos") {
          let response = await fetchVideos(query);
          data = response.hits;
        } else if (activeTab == "gifs") {
          let response = await fetchGifs(query);
          data = response.data;
        }
        console.log(data);
      };
      getData();
    },
    [query, activeTab],
  );

  return <div></div>;
};

export default ResultGrid;

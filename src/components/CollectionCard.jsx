import React from "react";
import { useDispatch } from "react-redux";
import {
  removeCollection,
  removedToast,
} from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();
  const removeFromColletion = (item) => {
    dispatch(removeCollection(item));
    dispatch(removedToast());
  };

  return (
    <div className="relative w-50 md:w-[17vw] h-60 md:h-40 bg-white rounded overflow-hidden">
      <a target="_blank" href={item.url}>
        <div className="h-full">
          {item.type == "image" ? (
            <img
              className="h-full w-full object-fit object-cover"
              src={item.src}
              alt={item.title}
            />
          ) : (
            ""
          )}

          {item.type == "video" ? (
            <video
              className="h-full w-full object-fit object-cover"
              autoPlay
              loop
              muted
              src={item.src}
            ></video>
          ) : (
            ""
          )}
          {item.type == "gifs" ? (
            <img
              className="h-full w-full object-fit object-cover"
              src={item.src}
              alt={item.title}
            />
          ) : (
            ""
          )}
        </div>
      </a>

      {/* Bottom overlay containing the truncated title and save button */}
      <div
        id="bottom"
        className="w-full px-4 py-3 absolute bottom-0 bg-linear-to-t from-black/80 to-transparent text-white flex items-end justify-between gap-2"
      >
        {/* Title truncated to a maximum of 2 lines */}
        <h2 className="text-xs font-semibold leading-snug line-clamp-2 max-w-[70%]">
          {item.title}
        </h2>

        {/* Save Button */}
        <button
          onClick={() => removeFromColletion(item)}
          className="bg-red-600 hover:bg-red-700 text-white p-1.5 rounded transition-colors duration-200 cursor-pointer flex items-center justify-center shrink-0"
          title="Remove Item"
        >
          {/* Bookmark icon svg */}
          <svg
            xmlns="http://w3.org"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;

import React from "react";

export const ResultCard = ({ item }) => {
  console.log(item);
  const addToColletion = (item) => {
    console.log(item);
    const oldData = JSON.parse(localStorage.getItem("collection")) || [];
    const newData = [...oldData, item];
    localStorage.setItem("collection", JSON.stringify(newData));
    console.log(newData);
  };
  return (
    <div className="relative w-[17vw] h-40 bg-white">
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
          onClick={() => addToColletion(item)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-1.5 rounded transition-colors duration-200 cursor-pointer flex items-center justify-center shrink-0"
          title="Save Item"
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
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

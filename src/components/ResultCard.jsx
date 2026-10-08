import React from "react";

export const ResultCard = ({ item }) => {
  return (
    <div className="relative w-[17vw] h-40 bg-white">
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

        {/* {item.type == "video" ? (
          <video
            className="h-full w-full object-fit object-cover"
            autoPlay
            loop
            muted
            src={item.src}
          ></video>
        ) : (
          ""
        )} */}
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
      <div
        id="bottom"
        className=" w-full px-6 py-5 absolute bottom-0 text-white"
      >
        <h2 className="text-sm font-semibold overflow-hidden">{item.title}</h2>
      </div>
    </div>
  );
};

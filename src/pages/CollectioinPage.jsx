import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import {
  clearCollection,
  clearCollectionToast,
} from "../redux/features/collectionSlice";

export const CollectioinPage = () => {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.collection.items);

  const handleClearCollection = () => {
    dispatch(clearCollection());
    dispatch(clearCollectionToast());
  };

  return (
    <div className="w-full px-8 py-8 flex flex-col gap-6">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-2xl font-bold text-white tracking-wide">
          Your Collection
        </h1>

        {/* Only show the clear button if there are items in the collection */}
        {collection.length > 0 && (
          <button
            onClick={() => handleClearCollection()}
            className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-base rounded-lg shadow-md transition-colors duration-200 cursor-pointer"
          >
            Clear Collection
          </button>
        )}
      </div>

      {collection.length > 0 ? (
        <div className="flex flex-col md:flex-row justify-start items-center w-full flex-wrap gap-6 overflow-auto">
          {collection.map((item) => (
            <CollectionCard item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div className="text-gray-400 mt-10 text-lg flex justify-center">
          Your collection is empty. Start adding some media!
        </div>
      )}
    </div>
  );
};

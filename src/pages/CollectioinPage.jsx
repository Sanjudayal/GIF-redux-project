import React from "react";
import { useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";

export const CollectioinPage = () => {
  const collection = useSelector((state) => state.collection.items);

  return (
    <div className="flex justify-start w-full flex-wrap gap-6 overflow-auto px-8 py-8">
      {collection.map((item) => (
        <CollectionCard item={item} key={item.id} />
      ))}
    </div>
  );
};

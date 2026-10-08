import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  // The three required tabs for your media search project
  const tabs = ["images", "videos", "gifs"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="w-full max-w-md mx-auto mb-8 px-4">
      {/* Container tracking backdrops */}
      <nav className="flex bg-slate-800 p-1 rounded-2xl border border-slate-700 shadow-inner">
        {tabs.map((tab) => {
          //   const isActive = activeTab === tab;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => dispatch(setActiveTabs(tab))}
              className={`flex-1 py-2.5 text-sm font-medium rounded-xl capitalize transition-all duration-200 select-none ${
                activeTab == tab
                  ? "bg-blue-600 text-white shadow-md transform scale-100"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-700/50"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Tabs;

import React from "react";
import "../../App.css";
import FilterButton from "./buttons/filterButton";
import OutlinedChips from "./filterItem";
import Chip from "@material-ui/core/Chip";
import Trash from "./buttons/trash";
import TrashButton from "./buttons/trash";

function Filter() {
  return (
    <div className="content-filter">
      <div className="content-filter__box1">
        <OutlinedChips />
      </div>
      <div className="content-filter__box2">
        <FilterButton />
        <TrashButton />
      </div>
    </div>
  );
}

export default Filter;

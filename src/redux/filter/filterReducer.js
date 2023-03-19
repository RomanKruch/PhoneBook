import { createReducer } from "@reduxjs/toolkit";
import { filterAction } from "./filterAction";

const filterReducer = createReducer('',(builder) => {
    builder.addCase(filterAction, (_,{payload}) => payload)
})

export default filterReducer;
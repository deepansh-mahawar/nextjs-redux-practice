import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FoodState = {
  items: string[];
};

const initialState: FoodState = {
  items: ["Pizza", "Burger"],
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    addFood(state, action: PayloadAction<string>) {
      state.items.push(action.payload);
    },
    removeFood(state, action: PayloadAction<number>) {
      state.items.splice(action.payload, 1);
    },
    loadFoods(state, action: PayloadAction<string[]>) {
      state.items = action.payload;
    },
  },
});

export const { addFood, removeFood, loadFoods } = foodSlice.actions;
export default foodSlice.reducer;
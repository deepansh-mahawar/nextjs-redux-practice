import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostState {
  list: Post[];
  loading: boolean;
  viewType: "list" | "grid";
  currentPage: number;
  postsPerPage: number;
}

const initialState: PostState = {
  list: [],
  loading: false,
  viewType: "list",
  currentPage: 1,
  postsPerPage: 10,
};

export const fetchPosts = createAsyncThunk<Post[]>(
  "post/fetchPosts",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return (await response.json()) as Post[];
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    toggleView: (state) => {
      state.viewType = state.viewType === "list" ? "grid" : "list";
    },
    nextPage: (state) => {
      state.currentPage += 1;
    },
    prevPage: (state) => {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },
    removePost: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((post) => post.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.list = action.payload;
        state.loading = false;
      });
  },
});

export const { toggleView, nextPage, prevPage, removePost } = postSlice.actions;

export default postSlice.reducer;

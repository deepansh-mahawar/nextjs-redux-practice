"use client";

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../store";
import {
  fetchPosts,
  nextPage,
  Post,
  prevPage,
  removePost,
} from "../store/slices/postSlice";

export default function Content() {
  const dispatch = useAppDispatch();

  const { list, loading, viewType, currentPage, postsPerPage } = useAppSelector(
    (state) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <h2 style={{ padding: "20px" }}>Loading...</h2>;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = list.slice(indexOfFirst, indexOfLast);

  return (
    <div style={{ padding: "20px", width: "100%" }}>
      {/* Post list */}
      <div style={viewType === "list" ? styles.list : styles.grid}>
        {currentPosts.map((post: Post) => (
          <div key={post.id} style={styles.card}>
            <button
              style={styles.closeBtn}
              onClick={() => dispatch(removePost(post.id))}
            >
              ✖
            </button>

            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div style={styles.pagination}>
        <button
          onClick={() => dispatch(prevPage())}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <span>Page {currentPage}</span>

        <button
          onClick={() => dispatch(nextPage())}
          disabled={indexOfLast >= list.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

// -----------------------------
// Inline Styles (Typed)
// -----------------------------
interface StyleObject {
  [key: string]: React.CSSProperties;
}

const styles: StyleObject = {
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "15px",
  },
  card: {
    position: "relative",
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    background: "#fff",
  },
  closeBtn: {
    position: "absolute",
    right: "10px",
    top: "10px",
    background: "transparent",
    border: "none",
    fontSize: "18px",
    color: "red",
    cursor: "pointer",
  },
  pagination: {
    marginTop: "20px",
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
};

"use client";

import { toggleView } from "../store/slices/postSlice";
import { useAppDispatch, useAppSelector } from "../store";

export default function Sidebar() {
  const dispatch = useAppDispatch();
  const viewType = useAppSelector((state) => state.posts.viewType);

  return (
    <div style={styles.sidebar}>
      {/* Profile */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://randomuser.me/api/portraits/women/22.jpg"
          style={styles.image}
        />
        <h3>Jane Doe</h3>
        <p>jane.doe@example.com</p>
      </div>

      {/* Toggle button */}
      <button onClick={() => dispatch(toggleView())} style={styles.toggleBtn}>
        Switch to {viewType === "list" ? "Grid" : "List"}
      </button>

      {/* Contact Us */}
      <button style={styles.contactBtn}>Contact Us</button>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "260px",
    height: "100vh",
    padding: "20px",
    background: "#fafafa",
    borderRight: "1px solid #ddd",
  },
  profile: {
    textAlign: "center",
    marginBottom: "30px",
  },
  image: { width: "80px", borderRadius: "50%" },
  toggleBtn: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    cursor: "pointer",
  },
  contactBtn: {
    width: "100%",
    padding: "10px",
    background: "blue",
    color: "#fff",
    cursor: "pointer",
  },
};

"use client"

import { RootState, useAppDispatch, useAppSelector } from "../store";
import { useEffect } from "react";
import { fetchUsers } from "../store/slices/usersSlice";

export const UserList = () => {
  const dispatch = useAppDispatch();
  const { list, loading, error } = useAppSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
<div
  style={{
    padding: "20px",
    backgroundColor: "#f7f7f7",
    borderRadius: "10px",
    width: "350px",
    margin: "20px auto",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  }}
>
  <h2
    style={{
      marginBottom: "15px",
      textAlign: "center",
      color: "#333",
      fontSize: "22px",
    }}
  >
    User List
  </h2>

  <ul
    style={{
      listStyle: "none",
      padding: 0,
      margin: 0,
    }}
  >
    {list.map((user: any) => (
      <li
        key={user.id}
        style={{
          padding: "12px",
          backgroundColor: "#fff",
          marginBottom: "10px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.08)",
        }}
      >
        <strong style={{ fontSize: "16px", color: "#222" }}>
          {user.name}
        </strong>
        <span style={{ fontSize: "14px", color: "#555" }}>{user.email}</span>
      </li>
    ))}
  </ul>
</div>

  );
};

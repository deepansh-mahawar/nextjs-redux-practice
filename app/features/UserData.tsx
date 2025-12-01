"use client";

import { useEffect, useState } from "react";

export default function UserData() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(users);

  const loadUsers = async () => {
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log("Error loading users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((u: any) => (
          <li key={u.id}>
            <strong>{u.name}</strong> — {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

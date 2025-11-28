"use client";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import {
  decrement,
  fetchIncrementAmount,
  increment,
  incrementByAmount,
} from "../store/slices/counterSlice";

export const Counter: React.FC = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.counter.value);
  const status = useAppSelector((state) => state.counter.status);

  const [amount, setAmount] = useState<number>(0);

  const addAmount = () => {
    dispatch(incrementByAmount(Number(amount) || 0));
  };

  const addAsync = () => {
    dispatch(fetchIncrementAmount(Number(amount) || 0));
  };

  return (
    <div
      style={{
        padding: 24,
        maxWidth: 320,
        margin: "40px auto",
        borderRadius: 12,
        background: "#f8f9fa",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        textAlign: "center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h2 style={{ marginBottom: 16, color: "#333" }}>Counter</h2>

      <div
        style={{
          fontSize: 32,
          marginBottom: 16,
          fontWeight: 600,
          color: "#222",
        }}
      >
        Value: {value}
      </div>

      <div>
        <button
          onClick={() => dispatch(decrement())}
          style={{
            width: 50,
            height: 50,
            fontSize: 22,
            borderRadius: 8,
            border: "1px solid #ddd",
            background: "#fff",
            cursor: "pointer",
          }}
        >
          -
        </button>

        <button
          onClick={() => dispatch(increment())}
          style={{
            width: 50,
            height: 50,
            fontSize: 22,
            borderRadius: 8,
            border: "1px solid #ddd",
            background: "#fff",
            marginLeft: 12,
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>

      <div style={{ marginTop: 20 }}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          style={{
            width: 100,
            padding: 8,
            borderRadius: 6,
            border: "1px solid #ccc",
            outline: "none",
            fontSize: 16,
          }}
        />

        <button
          onClick={addAmount}
          style={{
            padding: "8px 14px",
            borderRadius: 6,
            border: "none",
            background: "#007bff",
            color: "#fff",
            marginLeft: 10,
            cursor: "pointer",
          }}
        >
          Add amount
        </button>

        <button
          onClick={addAsync}
          style={{
            padding: "8px 14px",
            borderRadius: 6,
            border: "none",
            background: "#28a745",
            color: "#fff",
            marginLeft: 10,
            cursor: "pointer",
          }}
        >
          Add async
        </button>

        <span style={{ marginLeft: 12, color: "#555" }}>
          {status === "loading" ? "Loading..." : null}
        </span>
      </div>
    </div>
  );
};

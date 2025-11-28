"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { toggle } from "../store/slices/lightSlice";

const LightBulb = () => {
  const dispatch = useAppDispatch();
  const isOn = useAppSelector((state) => state.light.isOn);

  return (
    <div
      style={{
        padding: 30,
        maxWidth: 350,
        margin: "40px auto",
        textAlign: "center",
        fontFamily: "Inter, sans-serif",
        background: "#f5f7fa",
        borderRadius: 16,
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ marginBottom: 20, fontSize: 24, color: "#333" }}>
        💡 Light is:{" "}
        <span style={{ color: isOn ? "#f7d20d" : "#888" }}>
          {isOn ? "ON" : "OFF"}
        </span>
      </h2>

      {/* Bulb circle */}
      <div
        style={{
          width: 120,
          height: 120,
          margin: "0 auto 20px",
          borderRadius: "50%",
          background: isOn ? "#f7d20d" : "#ddd",
          boxShadow: isOn
            ? "0 0 25px 10px rgba(247,210,13,0.6)"
            : "0 0 10px rgba(0,0,0,0.1)",
          transition: "0.3s ease",
        }}
      />

      <button
        onClick={() => dispatch(toggle())}
        style={{
          padding: "10px 20px",
          background: isOn ? "#ff4d4d" : "#4c8bff",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          fontSize: 16,
          cursor: "pointer",
          transition: "0.3s ease",
        }}
      >
        Toggle
      </button>
    </div>
  );
};

export default LightBulb;


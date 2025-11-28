"use client";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { addFood, loadFoods, removeFood } from "../store/slices/foodSlice";

export const FoodList = () => {
  const dispatch = useAppDispatch();
  const foods = useAppSelector((state) => state.food.items);

  const [newFood, setNewFood] = useState("");

  const addNewFood = () => {
    if (!newFood.trim()) return;
    dispatch(addFood(newFood));
    setNewFood("");
  };

  const loadSampleData = () => {
    dispatch(loadFoods(["Sushi", "Tacos", "Pasta"]));
  };

  return (
    <div
      style={{
        padding: 30,
        maxWidth: 420,
        margin: "40px auto",
        background: "#f9fafb",
        borderRadius: 16,
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h2 style={{ marginBottom: 20, color: "#333" }}>🍕 Food List</h2>

      {/* FOOD ITEMS */}
      <div>
        {foods.map((food, index) => (
          <div
            key={index}
            style={{
              padding: "10px 12px",
              background: "#fff",
              borderRadius: 8,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            }}
          >
            <span style={{ fontSize: 16 }}>{food}</span>

            <button
              onClick={() => dispatch(removeFood(index))}
              style={{
                padding: "6px 12px",
                background: "#ff4d4d",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* INPUT + ADD BUTTON */}
      <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
        <input
          type="text"
          value={newFood}
          onChange={(e) => setNewFood(e.target.value)}
          placeholder="Add new food"
          style={{
            flex: 1,
            padding: "10px 12px",
            border: "1px solid #ccc",
            borderRadius: 8,
            outline: "none",
            fontSize: 16,
          }}
        />

        <button
          onClick={addNewFood}
          style={{
            padding: "10px 16px",
            background: "#4c8bff",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            fontSize: 15,
          }}
        >
          Add
        </button>
      </div>

      {/* LOAD SAMPLE FOODS BUTTON */}
      <button
        onClick={loadSampleData}
        style={{
          marginTop: 20,
          width: "100%",
          padding: "12px 16px",
          background: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          fontSize: 16,
        }}
      >
        Load Sample Foods
      </button>
    </div>
  );
};

export default FoodList;

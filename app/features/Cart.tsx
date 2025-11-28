"use client";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import {
  addItem,
  decreaseQty,
  increaseQty,
  removeItem,
} from "../store/slices/cartSlice";

export const Cart = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");

  const addToCart = () => {
    if (!name || !price || !qty) return;

    dispatch(
      addItem({
        id: Date.now(),
        name,
        price: Number(price),
        quantity: Number(qty),
      })
    );

    setName("");
    setPrice("");
    setQty("");
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      style={{
        padding: 30,
        maxWidth: 500,
        margin: "40px auto",
        background: "#f9fafb",
        borderRadius: 16,
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h2 style={{ marginBottom: 20, color: "#333" }}>🛒 Shopping Cart</h2>

      {/* CART ITEMS */}
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            background: "#fff",
            padding: "12px 14px",
            borderRadius: 10,
            marginBottom: 12,
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <strong style={{ fontSize: 16 }}>{item.name}</strong>
            <div style={{ marginTop: 4, fontSize: 14, color: "#555" }}>
              ₹{item.price} × {item.quantity}
            </div>
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => dispatch(increaseQty(item.id))}
              style={{
                padding: "6px 10px",
                background: "#4c8bff",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
                fontSize: 16,
              }}
            >
              +
            </button>

            <button
              onClick={() => dispatch(decreaseQty(item.id))}
              style={{
                padding: "6px 10px",
                background: "#ffb84d",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
                fontSize: 16,
              }}
            >
              –
            </button>

            <button
              onClick={() => dispatch(removeItem(item.id))}
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
        </div>
      ))}

      {/* TOTAL */}
      <h3
        style={{
          marginTop: 20,
          fontSize: 20,
          color: "#222",
        }}
      >
        Total: <span style={{ color: "#4c8bff" }}>₹{total}</span>
      </h3>

      <hr style={{ margin: "20px 0", borderColor: "#ddd" }} />

      {/* ADD ITEM SECTION */}
      <h3 style={{ marginBottom: 10 }}>Add Item</h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "10px 12px",
            border: "1px solid #ccc",
            borderRadius: 8,
            outline: "none",
            fontSize: 15,
            color: "#333",
          }}
        />

        <input
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{
            padding: "10px 12px",
            border: "1px solid #ccc",
            borderRadius: 8,
            outline: "none",
            fontSize: 15,
            color: "#333",
          }}
        />

        <input
          placeholder="Qty"
          type="number"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          style={{
            padding: "10px 12px",
            border: "1px solid #ccc",
            borderRadius: 8,
            outline: "none",
            fontSize: 15,
            color: "#333",
          }}
        />

        <button
          onClick={addToCart}
          style={{
            padding: "12px 16px",
            background: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            fontSize: 16,
            marginTop: 5,
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

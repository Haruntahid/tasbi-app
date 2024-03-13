import React, { useState } from "react";

function TasbiBox({ title, count, onClick }) {
  return (
    <>
      {count > 0 && (
        <div
          style={{
            padding: "15px",
            border: "1px solid tomato",
            textAlign: "center",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>
            Title: <span style={{ color: "#2BAE66FF" }}>{title}</span>
          </h3>
          <h1
            style={{
              background: "#2D2926FF",
              color: "#E94B3CFF",
              padding: "15px",
              width: "50px",
              margin: "10px auto",
              borderRadius: "15px",
            }}
          >
            {count}
          </h1>
          <button
            style={{
              padding: "15px 20px",
              borderRadius: "5px",
              border: "none",
              background: "#5F4B8BFF",
              color: "#fff",
              fontWeight: "600",
              letterSpacing: "1px",
              fontSize: "16px",
            }}
            onClick={onClick}
          >
            Count <span style={{ color: "#FEE715FF" }}>{count}</span> times
          </button>
        </div>
      )}

      {count === 0 && (
        <h3 style={{ textAlign: "center" }}>
          You done <span style={{ color: "#2BAE66FF" }}>{title}!!</span>
        </h3>
      )}
    </>
  );
}

export default TasbiBox;

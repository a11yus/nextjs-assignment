"use client";
import React from "react";

const data = Array.from({ length: 24 }, (_, i) => `Card ${i + 1}`); // Sample data

export default function HorizontalGrid() {
  const storedUsername = localStorage.getItem("username");
  return (
    <>
      {storedUsername ? (
        <div className="main-container">
          <div className="scroll-container">
            <div className="scroll-row">
              {data.slice(0, Math.ceil(data.length / 2)).map((item, index) => (
                <div key={index} className="scroll-item">
                  {item}
                </div>
              ))}
            </div>
            <div className="scroll-row">
              {data.slice(Math.ceil(data.length / 2)).map((item, index) => (
                <div key={index} className="scroll-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

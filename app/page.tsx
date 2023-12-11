"use client";
import styles from "./page.module.css";
import Cell from "./components/cell";
import { useState } from "react";

export default function Home() {
  const [cells, setCells] = useState(Array(9).fill(null));
  return (
    <div className='container'>
      <div className='gameBoard'>
        {cells.map((cell, index) => (
          <Cell key={index} />
        ))}
      </div>
    </div>
  );
}

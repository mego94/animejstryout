import React from "react";

type CardProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, description, children }) => (
  <div
    style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
      background: "#fff",
      maxWidth: "300px",
    }}
  >
    <h3>{title}</h3>
    {description && <p>{description}</p>}
    {children}
  </div>
);

export default Card;

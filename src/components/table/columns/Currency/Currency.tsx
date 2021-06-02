import React from "react";

export interface CurrencyProps {
  value: string;
}

const Currency: React.FC<CurrencyProps> = ({ value }: CurrencyProps) => (
  <span style={{ textAlign: "left", fontWeight: 700 }}>{value}</span>
);

export default Currency;

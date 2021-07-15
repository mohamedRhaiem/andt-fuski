import React from "react";

export interface GroupProps {
  featured: string;
  small: string;
}

const FuskiGroup: React.FC<GroupProps> = ({ featured, small }: GroupProps) => (
  <>
    <div style={{ fontWeight: 900 }}>{featured}</div>
    <div style={{ fontSize: "0.85em", fontWeight: 400 }}>{small}</div>
  </>
);

export default FuskiGroup;

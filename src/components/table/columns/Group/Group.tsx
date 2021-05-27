import React from "react";

export interface GroupProps {
  featured: string;
  small: string;
}

const Group: React.FC<GroupProps> = ({ featured, small }: GroupProps) => (
  <>
    <div style={{ fontWeight: 700 }}>{featured}</div>
    <div style={{ fontSize: "0.85em", fontWeight: 300 }}>{small}</div>
  </>
);

export default Group;

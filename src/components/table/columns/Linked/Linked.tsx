import React from "react";

export interface LinkedProps {
  value: string;
  href: string;
}

const Linked: React.FC<LinkedProps> = ({ value, href }: LinkedProps) => (
  <a href={href}>{value}</a>
);

export default Linked;

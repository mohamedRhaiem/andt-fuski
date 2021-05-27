import React from "react";
import { CalendarOutlined } from "@ant-design/icons";

export interface DateProps {
  value: string;
}

const Date: React.FC<DateProps> = ({ value }: DateProps) => (
  <div>
    <span
      style={{
        fontSize: "0.9em",
        backgroundColor: "rgba(0,0,0,.07)",
        padding: "4px 7px",
        display: "inline-flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: "3px",
        letterSpacing: "-0.5px",
      }}
    >
      <CalendarOutlined style={{ paddingRight: "4px" }} />
      {value}
    </span>
  </div>
);

export default Date;

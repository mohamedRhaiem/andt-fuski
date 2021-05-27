/* eslint-disable react/display-name */
import { SendOutlined } from "@ant-design/icons";
import { message, Space, Tag, Tooltip } from "antd";
import moment from "moment";
import React from "react";
import Date from "../columns/Date/Date";
import Group from "../columns/Group/Group";
import { ConfigTable } from "../utils/configTable";

export const StatusChecking = {
  1: { label: "não iniciada", color: "#999999" },
  2: { label: "elaboração", color: "#F5A623" },
  3: { label: "confirmada", color: "#60B106" },
};

export default {
  columns: [
    {
      title: "Date",
      dataIndex: "chg_Date",
      render: (item: string) => <Date value={item} />,
      width: "15%",
    },
    {
      title: "Place",
      dataIndex: "chg_pla_IdPlace",
      render: (item: any) => (
        <Group
          featured={item?.pla_cha_IdChannel?.cha_Name}
          small={item?.pla_Name}
        />
      ),
      width: "30%",
      sorter: (a: any, b: any) =>
        (a?.chg_pla_IdPlace?.pla_Name).localeCompare(
          b?.chg_pla_IdPlace?.pla_Name
        ),
    },
    {
      title: "Description",
      dataIndex: "chg_Description",
      width: "20%",
    },
    {
      title: "PlayList",
      dataIndex: "chg_plt_IdPlaylistType",
      render: (item: any) => item?.plt_Name,
      width: "15%",
    },
    {
      title: "Status",
      dataIndex: "chg_Status",
      render: (item: number) => (
        <Tag
          style={{ width: "100%", textAlign: "center", cursor: "pointer" }}
          color={StatusChecking[item]?.color}
        >
          {StatusChecking[item]?.label}
        </Tag>
      ),
      width: "10%",
    },
    {
      title: "Actions",
      key: "action",
      render: () => (
        <Space size="middle">
          <a>
            <Tooltip title="Liberar">
              <SendOutlined onClick={() => message.info("comming soon")} />
            </Tooltip>
          </a>
        </Space>
      ),
    },
  ],
  emptyText: "table.empty",
  dataTestid: "checkingTable",
  rowKey: "chg_Id",
} as ConfigTable;

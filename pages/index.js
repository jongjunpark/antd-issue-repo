import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";
import { Tabs } from "antd";

const { TabPane } = Tabs;

export default function Home() {
  return (
    <div style={{ padding: "50px" }}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
}

import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Row, Col, Menu } from "antd";
import {
  HomeOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined
} from "@ant-design/icons";

const { SubMenu } = Menu;

const Home = () => {
  return <div>Home</div>;
}

const About = () => {
  return <div>
    About
  </div>;
}

function App() {
  const [state, setState] = useState({
    current: "mail"
  });

  const handleClick = e => {
    console.log("click ", e);
    setState({
      current: e.key
    });
  };

  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <Menu
            onClick={handleClick}
            selectedKeys={[state.current]}
            mode="horizontal"
          >
            <Menu.Item key="mail">
              <HomeOutlined />
              <a href="/">Charlotte Namsong</a>
            </Menu.Item>
            <Menu.Item key="app" disabled>
              <AppstoreOutlined />
              App
            </Menu.Item>
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                  <SettingOutlined />
                  Settings
                </span>
              }
            >
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1"><MailOutlined />Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="about">
              <a href="/about">About</a>
            </Menu.Item>
          </Menu>

          <BrowserRouter>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
            </Switch>
          </BrowserRouter>
        </Col>
      </Row>
    </>
  );
}

export default App;

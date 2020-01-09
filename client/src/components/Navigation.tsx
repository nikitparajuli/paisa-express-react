/**
 * Navigation is a reusable component
 * responsible for rendering the menu.
 */
import * as React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from 'antd';

type NavigationProps = {};

export const Navigation: React.FC<NavigationProps> = () => {
  const [current, setCurrent] = React.useState('home');

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home">
          <Link to="/home">
            <Icon type="home" /> Home
          </Link>
        </Menu.Item>
        <Menu.Item key="categories" disabled>
          <Icon type="appstore" /> Categories
        </Menu.Item>
      </Menu>
  );
};

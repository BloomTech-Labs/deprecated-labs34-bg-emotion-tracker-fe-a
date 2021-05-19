import React from 'react';
import styled from 'styled-components';
import { Menu, Dropdown, Button } from 'antd';
import {
  MenuOutlined,
  UserOutlined,
  TeamOutlined,
  LineChartOutlined,
  CalendarOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import logo from '../../assets/images/BGC-logo-header.png';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const StyledNavBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background-color: rgb(37, 78, 219);
  text-align: center;
  img,
  .menu-container {
    margin: 1.5rem;
  }
  .menu-container {
    text-align: left;
    width: 109px;
  }
  img {
    height: 60px;
    width: auto;
  }
  h3 {
    color: white;
    margin-bottom: -15px;
    margin-right: 60px;
  }
`;

function NavBar(props) {
  const { userInfo, authService } = props;

  const menu = (
    <Menu>
      <Menu.Item
        key="1"
        icon={<LineChartOutlined />}
        onClick={() => history.push('/')}
      >
        Home
      </Menu.Item>

      <Menu.Item
        key="2"
        icon={<UserOutlined />}
        onClick={() => history.push('/manage-members')}
      >
        Manage Members
      </Menu.Item>

      <Menu.Item
        key="3"
        icon={<CalendarOutlined />}
        onClick={() => history.push('/manage-programs')}
      >
        Manage Programs
      </Menu.Item>

      <Menu.Item
        key="4"
        icon={<TeamOutlined />}
        onClick={() => history.push('/manage-staff')}
      >
        Manage Staff
      </Menu.Item>
      <Menu.Item
        key="5"
        icon={<TeamOutlined />}
        onClick={() => history.push('/manage-clubs')}
      >
        Manage Clubs
      </Menu.Item>

      <Menu.Item
        key="6"
        icon={<LogoutOutlined />}
        onClick={() => history.push('/login')}
      >
        Logout
      </Menu.Item>
    </Menu>
  );
  const history = useHistory();
  return (
    <>
      <StyledNavBar backgroundColor={props.backgroundColor}>
        <div className="menu-container">
          <Dropdown overlay={menu}>
            <Button type="text" style={{ color: 'white', fontSize: '45px' }}>
              <MenuOutlined />
            </Button>
          </Dropdown>
        </div>
        <img src={logo} alt="Boys & Girls Club of Greater Conejo Valley" />
        <Link to="./">
          <h3>{props.titleName}</h3>
        </Link>
      </StyledNavBar>
    </>
  );
}
export default NavBar;

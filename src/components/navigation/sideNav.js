import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  BarChartOutlined,
  UsergroupAddOutlined,
  VideoCameraOutlined,
  CreditCardOutlined,
  ApartmentOutlined,
  TeamOutlined,
  ScheduleOutlined,
  LineChartOutlined,
  PieChartOutlined,
  SearchOutlined,
  CalendarOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

export default function SideNav() {
  return (
    <Menu
      openKeys={[
        "sub1",
        "sub2",
        "sub3",
        "sub4",
        "sub5",
        "sub6",
        "sub7",
        "sub8",
      ]}
      theme="light"
      mode="inline"
    >
      <SubMenu
        style={{ backgroundColor: "white" }}
        key="sub1"
        icon={false}
        title={<span style={{ fontWeight: "bold" }}>Home</span>}
        onTitleClick={() => {}}
      >
        <Menu.Item key="1" icon={<BarChartOutlined />}>
          <Link to="/dashboard">Overview</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        style={{ backgroundColor: "white" }}
        key="sub2"
        icon={false}
        title={<span style={{ fontWeight: "bold" }}>Participants</span>}
      >
        <Menu.Item key="2" icon={<UsergroupAddOutlined />}>
          <Link to="/delegates">Delegates</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<VideoCameraOutlined />}>
          <Link to="/media-partners">Media Partners</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/exhibitors">Exhibitors</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<CreditCardOutlined />}>
          <Link to="/sponsors">Sponsors</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<ApartmentOutlined />}>
          <Link to="/partners">Partners</Link>
        </Menu.Item>
        <Menu.Item key="8" icon={<TeamOutlined />}>
          Attendees
        </Menu.Item>
      </SubMenu>
      <SubMenu
        style={{ backgroundColor: "white" }}
        key="sub3"
        icon={false}
        title={<span style={{ fontWeight: "bold" }}>Conference</span>}
      >
        <Menu.Item key="9" icon={<UserOutlined />}>
          Speakers
        </Menu.Item>
        <Menu.Item key="10" icon={<ScheduleOutlined />}>
          Agenda
        </Menu.Item>
      </SubMenu>
      <SubMenu
        style={{ backgroundColor: "white" }}
        key="sub4"
        icon={false}
        title={<span style={{ fontWeight: "bold" }}>Sales</span>}
      >
        <Menu.Item key="11" icon={<LineChartOutlined />}>
          Overview
        </Menu.Item>
      </SubMenu>
      <SubMenu
        style={{ backgroundColor: "white" }}
        key="sub5"
        icon={false}
        title={<span style={{ fontWeight: "bold" }}>Marketing</span>}
      >
        <Menu.Item key="12" icon={<PieChartOutlined />}>
          Marketing
        </Menu.Item>
      </SubMenu>
      <SubMenu
        style={{ backgroundColor: "white" }}
        key="sub6"
        title={<span style={{ fontWeight: "bold" }}>Data Research</span>}
      >
        <Menu.Item key="12" icon={<SearchOutlined />}>
          Overview
        </Menu.Item>
      </SubMenu>
      <SubMenu
        style={{ backgroundColor: "white" }}
        key="sub7"
        icon={false}
        title={<span style={{ fontWeight: "bold" }}>Ticketing</span>}
      >
        <Menu.Item key="12" icon={<CalendarOutlined />}>
          Ticketing
        </Menu.Item>
      </SubMenu>
      <SubMenu
        style={{ backgroundColor: "white" }}
        key="sub8"
        icon={false}
        title={<span style={{ fontWeight: "bold" }}>Admin</span>}
      >
        <Menu.Item key="12" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
}

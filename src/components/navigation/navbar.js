import { Layout, Menu, Select  } from "antd";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined , LogoutOutlined} from "@ant-design/icons";
import logo from '../../images/icon.jpg'
import SideNav from "./sideNav";
import MainPage from "../pages/homepage/main";
import { Outlet } from "react-router-dom";

const {Header, Content, Sider}=Layout
const {Option} = Select



export default function Navbar(){
    

    return (
<>
        <Layout>
            <Header style={{backgroundColor:'white', paddingLeft:'10px', paddingRight:'10px',position: 'fixed', zIndex: 1, width: '100%'}}>
                
                <Menu mode="horizontal">
                    <Menu.Item>
                    <div style={{width:'45px', height:'40px', marginTop:'10px'}}>
                        <img src={logo} alt="logo" style={{width: '100%', height: 'auto'}} />
                    </div>

                    </Menu.Item>
                    <Menu.Item >
                    
                        <ArrowLeftOutlined />
                        <span style={{marginLeft:'15px', fontSize: '17px'}}>Projects</span>
                        

                    </Menu.Item>
                    <Menu.Item >

                    <span style={{fontWeight:'bold'}}>CEOG SUMMIT</span>


                    </Menu.Item>
                    <Menu.Item >
                    <Select
                            defaultValue="2022"
                            style={{ width: 90 }}
                            bordered={false}
                            options={[
                                { value: '2022', label: '2022' },
                                { value: '2023', label: '2023' },
                                { value: '2024', label: '2024' },
                            ]}
                                />
                    </Menu.Item>
                    <Menu.Item style={{marginLeft:'auto'}}>
                    <Select
                            defaultValue="Abrar Showkat"
                            style={{ width: 150 }}
                            bordered={false}
                        
        
                                >
                                
                                <Option value="Change Project">
                                    <Link to='/dashboard' style={{color:'black'}}>Change Project </Link>  </Option>
                            
                                <Option value="Logout" ><Link to='/login'style={{color:'red'}}><LogoutOutlined /> Logout</Link></Option>
                                </Select>
                    
                    </Menu.Item>

                    
                </Menu>
            </Header>
            <hr style={{fontSize:'1px', color:'black'}}/>
            <Layout>
            <Sider style={{
                overflowY: 'auto',
                height: '100vh',
                position:'fixed',
                left:0,
                top:60,

                
                
    
        }} width={250}>
                <SideNav />
            

            </Sider>
        
            
        
            <Layout style={{marginLeft: 250, marginTop: 50 }}>
            <Content style={{backgroundColor:'white', paddingTop: 60, paddingBottom: 40, paddingLeft: 20, paddingRight: 20}}>
               <Outlet/>
                
                </Content>
                
            </Layout>
           

            </Layout>


        </Layout>
        </>
    )


}
import React from 'react';
import Layout, {Content, Header} from "antd/lib/layout/layout";
import WaterContainer from "../../features/water/WaterContainer";

const WaterPage =()=> {
    return (
        <Layout className="layout">
            <Header>
            </Header>
            <Content style={{padding: '50px',backgroundColor:"cadetblue",height:"1100px"}}>
                    <WaterContainer/>
            </Content>
        </Layout>
    );
}

export default WaterPage;

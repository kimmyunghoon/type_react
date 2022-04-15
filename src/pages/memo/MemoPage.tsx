import React from 'react';
import MemoContainer from "../../features/memo/MemoContainer";
import Layout, {Content, Header} from "antd/lib/layout/layout";
import {Menu} from 'antd';

const MemoPage = () => {
    return (
        <Layout className="layout">
            <Header>
            </Header>
            <Content style={{padding: '50px'}}>
                <div className="site-layout-content">
                    <MemoContainer/>
                </div>
            </Content>
        </Layout>

    );
}

export default MemoPage;

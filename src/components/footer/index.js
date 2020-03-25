import React, { Component } from 'react';
import { Layout } from 'antd';
import './style.scss';

const { Footer } = Layout;

class AppFooter extends Component {
    render() {
        return (
            <Footer className="app-footer">
                Packet Viewer @2020 created by Matias Capuano
            </Footer>
        )
    }
}
export default AppFooter;
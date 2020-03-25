import React, { Component } from 'react';
import { Layout } from 'antd';
import './style.scss';

const { Header } = Layout;

class AppHeader extends Component {
    render() {
        return (
            <Header className="app-header">
                Packets Viewer
            </Header>
        )
    }
}
export default AppHeader;
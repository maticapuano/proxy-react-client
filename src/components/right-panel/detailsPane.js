import React, { Component } from 'react';
import { Tabs  } from 'antd';
import './style.scss';

const { TabPane } = Tabs;

class DetailsPane extends Component {
    callback = (key) => {
        console.log(key);
    };

    render() {
        return (
            <div className="content-panel details-pane">
                details-pane
            </div>
        )
    }
}
export default DetailsPane;
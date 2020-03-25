import React, { Component } from 'react';
import { Tabs  } from 'antd';
import RequestPane from './requestPane';
import ResponsePane from './responsePane';
import DetailsPane from './detailsPane';
import './style.scss';

const { TabPane } = Tabs;

class RightPanel extends Component {
    callback = (key) => {
        console.log(key);
    };

    render() {
        return (
            <div className="right-panel">
                <Tabs onChange={this.callback} type="card">
                    <TabPane tab="Request" key="request">
                        <RequestPane />
                    </TabPane>
                    <TabPane tab="Response" key="response">
                        <ResponsePane />
                    </TabPane>
                    <TabPane tab="Details" key="details">
                        <DetailsPane /> 
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
export default RightPanel;
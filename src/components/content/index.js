import React, { Component } from 'react';
import { Layout } from 'antd';
import ControlBar from '../control-bar';
import SplitPane from "react-split-pane";
import LeftPanel from '../left-panel';
import RightPanel from '../right-panel';
import { connect } from 'react-redux';
import { updateFilter, clearPackets } from '../../redux/actions';
import './style.scss';

const { Content } = Layout;

class AppContent extends Component {
    onFilter = (value) => {
        const { updateFilter } = this.props;
        updateFilter(value);
    };
    
    onOpen = () => {
        console.log("open");
    };

    onDownload = () => {
        console.log("download");
    };

    onClearAll = () => {
        const { clearPackets } = this.props;
        clearPackets();
    };

    render() {
        return (
            <Content className="app-content">
                <ControlBar 
                    onOpen={this.onOpen}
                    onFilter={this.onFilter}
                    onDownload={this.onDownload}
                    onClear={this.onClearAll}
                />
                <div className="content-viewer">
                    <SplitPane split="vertical" minSize={500} defaultSize="50%">
                        <LeftPanel />
                        <RightPanel />
                    </SplitPane>
                </div>
            </Content>
        )
    }
}

const mapStateToProps = (state) => ({
    filter: state.controlState.filter
});

const mapDispatchToProps = (dispatch) => ({
    updateFilter: (filter) => dispatch(updateFilter(filter)),
    clearPackets: () => dispatch(clearPackets())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContent);
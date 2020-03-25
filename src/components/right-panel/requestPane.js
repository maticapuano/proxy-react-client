import React, { Component } from 'react';
import { Tabs, Table, Popconfirm } from 'antd';
import { DownloadOutlined, DeleteOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { deletePacket } from '../../redux/actions';
import './style.scss';

const { TabPane } = Tabs;

class RequestPane extends Component {
    constructor(props) {
        super(props);
        this.dataColumns = [
            {
              title: '',
              dataIndex: 'key',
              width: '160px'
            },
            {
                title: '',
                dataIndex: 'value'
            }
          ];
        this.data = [
            {
                key: 'Host',
                value: 'google.com'
            }, {
                key: 'Proxy-Connection',
                value: 'keep-alive'
            }, {
                key: 'Content-Length',
                value: 30
            }, {
                key: 'User-Agent',
                value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36'
            }, {
                key: 'Content-Type',
                value: 'application/x-www-form-urlencoded'
            }, {
                key: 'Accept',
                value: '*/*'
            }, {
                key: 'Origin',
                value: 'chrome-extension://aejoelaoggembcahagimdiliamlcdmfm'
            }, {
                key: 'Accept-Encoding',
                value: 'gzip, deflate'
            }, {
                key: 'Accept-Language',
                value: 'en-US,en;q=0.9,ko;q=0.8'
            }, {
                key: 'Cookie',
                value: 'SID=uQcsX3SJb1a5_Lya299UDzk4ZY1W9dbZYzHMerDbg9sKEgSSXIw-k2ED5Fq2XxdS-qJbxQ.; HSID=AOAx3bZnB2BmOwf4x; APISID=FXQ1RGtUHsEoJEqx/AmxFdY9pM1X4NPJ9o; SEARCH_SAMESITE=CgQIpY8B; SIDCC=AJi4QfEfN-oaPhqXwywCBae8WMO5RXxC2hKGj7fyHF8zPlsXGDIaoWQcGaHjCIzenRgHhn4p3g'
            }
        ];
    };

    render() {
        const { packets } = this.props;
        return (
            <div className="content-panel request-pane">
                <Table size='small' 
                    showHeader={false}
                    columns={this.dataColumns}
                    dataSource={this.data}
                    pagination={false}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    packets: state.packetsState.packets
});

const mapDispatchToProps = (dispatch) => ({
    deletePacket: (record) => dispatch(deletePacket(record))
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestPane);
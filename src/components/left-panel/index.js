import React, { Component } from 'react';
import { Table, Popconfirm } from 'antd';
import { DownloadOutlined, DeleteOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { deletePacket } from '../../redux/actions';
import './style.scss';
  
class LeftPanel extends Component {
    constructor(props) {
        super(props);
        this.packetColumns = [
            {
              title: '',
              dataIndex: 'icon',
              width: '30px'
            },
            {
                title: 'Path',
                dataIndex: 'path',
                sorter: {
                    compare: (a, b) => a.english - b.english,
                    multiple: 1,
                },
                ellipsis: true,
            },
            {
                title: 'Method',
                dataIndex: 'method',
                sorter: {
                    compare: (a, b) => a.chinese - b.chinese,
                    multiple: 3,
                },
                width: '75px',
                ellipsis: true,
            },
            {
                title: 'Status',
                dataIndex: 'status',
                sorter: {
                    compare: (a, b) => a.math - b.math,
                    multiple: 2,
                },
                ellipsis: true,
                width: '65px'
            },
            {
                title: 'Size',
                dataIndex: 'size',
                sorter: {
                    compare: (a, b) => a.math - b.math,
                    multiple: 2,
                },
                render: (text) => (<span className="size">{text}b</span>),
                ellipsis: true,
                width: '80px'
            },
            {
                title: 'Time',
                dataIndex: 'time',
                sorter: {
                    compare: (a, b) => a.english - b.english,
                    multiple: 1,
                },
                render: (text) => (<span className="size">{text}ms</span>),
                ellipsis: true,
                width: '60px'
            },
            {
                title: 'Action',
                render: (text, record) => (
                    <div className="action-container">
                        <a onClick={() => this.onDownloadRecord(record)}>
                            <DownloadOutlined />
                        </a>
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.onDeleteRecord(record.key)}>
                            <a><DeleteOutlined className="btn-delete"/></a>
                        </Popconfirm>
                    </div>
                ),
                width: '60px'
            }
          ];
    };

    onDeleteRecord = (key) => {
        const { deletePacket } = this.props;
        deletePacket(key);
    };

    onDownloadRecord = (record) => {
        console.log(record);
    };
    
    render() {
        const { packets } = this.props;
        return (
            <div className="left-panel">
                <Table size="small" 
                    columns={this.packetColumns}
                    dataSource={packets}
                    pagination={false}
                    scroll={{ y: "100%" }} 
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

export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);
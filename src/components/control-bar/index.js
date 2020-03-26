import React, { Component } from 'react';
import './style.scss';
import { Input, Button } from 'antd';
import { DownloadOutlined, DeleteOutlined, FolderOpenOutlined } from '@ant-design/icons';

const { Search } = Input;

class ControlBar extends Component {
    render() {
        const { onFilter, onDownload, onOpen, onClear } = this.props;
        return (
            <div className="control-bar">
                <div className="input-filter">
                    <span>Filter: </span>
                    <Search
                        placeholder="Input filter pattern"
                        onSearch={onFilter}
                        className="input-filter"
                    />
                </div>
                <div>
                    <Button type="ghost" 
                        shape="round" 
                        icon={<FolderOpenOutlined />} 
                        size="large"
                        onClick={onOpen}
                    >
                        Open
                    </Button>
                    <Button type="primary" 
                        shape="round" 
                        icon={<DownloadOutlined />} 
                        size="large"
                        onClick={onDownload}
                    >
                        Download
                    </Button>
                    <Button type="danger"
                        shape="round"
                        icon={<DeleteOutlined />}
                        size="large"
                        onClick={onClear}
                    >
                        Clear All
                    </Button>
                </div>
            </div>
        )
    }
}

export default ControlBar;
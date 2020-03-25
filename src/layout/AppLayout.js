import React, { Component } from 'react';
import { Layout } from 'antd';
import AppHeader from '../components/header';
import AppContent from '../components/content';
import AppFooter from '../components/footer';
import io from 'socket.io-client'
import { connect } from 'react-redux';
import { addPacket } from '../redux/actions';
import { SOCKET_SERVER_URL } from '../utils';
import './style.scss';

class AppLayout extends Component {
    state = {
        socket: null
    }

    initSocket = () => {
        const socket= io(SOCKET_SERVER_URL);
        socket.on('connect', () => {
            console.log('#### socket connected....');
        });
        socket.on('new-packet', (packet) => {
            console.log('#### new packet is arrived');
            this.addPacket(packet);
        });
        this.setState({socket});
    }

    render() {
        return (
            <Layout>
                <AppHeader />
                <AppContent />
                <AppFooter />
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    packets: state.packetsState.packets
});

const mapDispatchToProps = (dispatch) => ({
    addPacket: (packet) => dispatch(addPacket(packet))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
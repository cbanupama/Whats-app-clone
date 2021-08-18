import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import React, {useEffect, useState} from 'react';
import './Sidebar.css';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat'
import db from "./firebase";

function Sidebar() {
    const [rooms, setRooms] = useState(['']);

    useEffect(() => {
        const unsubscribe = db.collection('rooms')
            .onSnapshot((snapshot) =>
            setRooms(snapshot.docs.map((doc) => ({
                id:doc.id,
                data:doc.data(),
            }))
            )
            );
            return () => {
                unsubscribe();
            };
    }, []);
    return(
        <div className="sidebar">
            {/* <h1>Sidebar</h1> */}
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                <SearchOutlined />
                <input placeholder="Search or Start new chat" type="text"/>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat/>
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} name={room?.data?.name} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar;
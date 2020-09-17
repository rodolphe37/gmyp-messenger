import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import React, { useEffect, useState } from 'react';
import './sidebar.css';
import SidebarOption from '../sidebarOption/SidebarOption';
import { Apps, ExpandLess, FileCopy, PeopleAlt, InsertComment, Inbox, Drafts, BookmarkBorder, ExpandMore, Add } from '@material-ui/icons';
import db from '../../firebase'

function Sidebar() {
  const [channels, setChannels] = useState([])


  // useEffect(() => {
  //   const unsubscibe = db.collection("rooms").onSnapshot((snapshot) =>
  //     setChannels(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         data: doc.data().name
  //       }))
  //     )
  //   );

  //   return () => {
  //     unsubscibe();
  //   }
  // }, [])
  useEffect(() => {
    // Run this code ONCE when the sidebar component load
    db.collection('rooms').onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name
        }))
      )
    );
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>Developers</h2>
          <h3>
            <FiberManualRecord />
            rodolphe Augusto
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertComment} title="threads" />
      <SidebarOption Icon={Inbox} title="Mentions & reactions" />
      <SidebarOption Icon={Drafts} title="Saved items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
      <SidebarOption Icon={PeopleAlt} title="People & user groups" />
      <SidebarOption Icon={Apps} title="App" />
      <SidebarOption Icon={FileCopy} title="File browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption Icon={Add} addChannelOption={""} title="Add Channel" />

      {/*Connect to db and list all the channels */}
      {/*SidebarOption ... */}
      {channels.map(channel => (
        <SidebarOption title={channel.name} id={channel.id} key={channel.id} />
      ))}
    </div>
  )
}

export default Sidebar

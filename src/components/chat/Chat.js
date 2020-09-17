import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './chat.css';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../../firebase';


function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null)
  useEffect(() => {
    if (roomId) {
      db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
        setRoomDetails(snapshot.data())
      ))
    }
  }, [roomId])
  console.log(roomDetails)

  return (
    <div className="chat">
      <div className="chat_header">
        <div className="chat_headerLeft">
          <h4 className="chat_channelName">
            <strong># {roomDetails?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat_headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
    </div>
  );
}

export default Chat

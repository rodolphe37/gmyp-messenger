import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create'
import React from 'react';
import './sidebar.css';

function Sidebar() {
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
    </div>
  )
}

export default Sidebar

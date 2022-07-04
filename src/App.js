import logo from './logo.svg';
import './App.css';
import React from 'react';
import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {faMobilePhone} from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"



import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import TextField from "@material-ui/core/TextField"
import AssignmentIcon from "@material-ui/icons/Assignment"
import PhoneIcon from "@material-ui/icons/Phone"
//import React, { useEffect, useRef, useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import Peer from "simple-peer"
import io from "socket.io-client"

import Random from "./Random"
import HomePage from "./HomePage"
import VideoChat from "./VideoChat"
import Meeting from "./Meeting"

library.add(faTrash);
library.add(faMobilePhone);




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path ="/" element={<HomePage></HomePage>} />
        <Route path = "/random" element={<Random></Random>} />
        <Route path = "/VideoChat" element= {<VideoChat></VideoChat>} />
        <Route path ="/Meeting" element = {<Meeting></Meeting>} />
    
    </Routes>
    </Router>
  )
}

export default App

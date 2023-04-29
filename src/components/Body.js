import React from 'react';
import { Storage } from '@mui/icons-material';
import { ArrowDropDown } from '@mui/icons-material';
import { FolderOpen } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import docImg from '../images/docimg.png'
import './Body.css'

function Body() {
  return (
    <div className="main_body">
        <div className="body_top">
            <div className="top_left" style={{fontSize:"16px", fontWeight:"500"}}>
                Recent Forms
            </div>
            <div className="top_right">
                <div className="right_center" style={{fontSize:"14px", marginRight:"125px"}}>
                    Owned by Everyone
                    <ArrowDropDown/>
                    <IconButton>
                        <Storage style={{fontSize:"16px", color:"black"}}/>
                    </IconButton>
                    <IconButton>
                        <FolderOpen style={{fontSize:"16px", color:"black"}}/>
                    </IconButton>
                </div>
            </div>
        </div>

        <div className="body_docs">
            <div className="doc_card">
                <img src={docImg} className="doc_img"/>
                <div className="card_content">
                    <h5></h5>
                    <div className="doc_content">
                        <div className="content_left" style={{fontSize:"12px", color:"grey"}}>
                            <Storage style={{color:"white", fontSize:"12px", backgroundColor:"#6E2594", padding:"3px", marginRight:"3px", borderRadius:"2px"}}/>
                        </div>
                        <MoreVert style={{fontSize:"16px", color:"grey"}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import uuid from "react-uuid";
import "./Template.css";
import {useHistory} from "react-router-dom";

import Blank from "../images/gplus.png";

function Template() {
  const createForm = () => {
    const id_ = uuid();
    console.log(id_);

    const history = useHistory();
    history.push("/form/" + id_)
    
  }
  return (
    <div className="template_section">
      <div className="template_top">
        <div className="template_left">
          <span style={{ fontSize: "16px", color: "#202124" }}>
            Start New Form
          </span>
        </div>
        <div className="template_right">
          <div className="icon_right">
            Template gallery
            <UnfoldMoreIcon fontSize="small" />
          </div>
          <IconButton>
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
      <div className="template_body" onClick={createForm}>
        <div className="card">
            <img src={Blank} alt="no-img" className="card_img"/>
            <p className="car">Blank</p>
        </div>
      </div>
    </div>
  );
}

export default Template;

import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { Drawer } from "@mui/material";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import './Drawer.css';
import {FiSettings } from "react-icons/fi";
import {BsQuestionCircle} from "react-icons/bs";

import docimg from "../images/doc.png";
import gformsimg from "../images/google-forms.png";
import gdriveimg from "../images/google-drive.png";
import slidesimg from "../images/google.png";
import xlsimg from "../images/xls.png";

const useStyles = makeStyles({
  listItem: {
    marginLeft: "20px",
    fontSize: "14px",
    fontWeight: "500",
    color: "grey",
  },
  slideImg:{
    height:"20px",
    width:"20px"
  }
});

function TempDraw() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...setState, [anchor]: open });
  };

  const list = (anchor) => (
    <div style={{ width: "250px" }} role="presentation">
      <Divider />
      <List>
        <ListItem>
          <ListItemText style={{ fontSize: "48px", marginLeft: "5px" }}>
            <span>Forms</span>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List
        style={{ marginLeft: "8px", marginRight: "8px", marginTop: "15px" }}
      >
        <ListItem className="list_item">
          <img src={docimg} className={classes.slideImg} />
          <div className={classes.listItem}>Docs</div>
        </ListItem>

        <ListItem className="list_item">
          <img src={xlsimg} className={classes.slideImg} />
          <div className={classes.listItem}>Sheets</div>
        </ListItem>

        <ListItem className="list_item">
          <img src={slidesimg} className={classes.slideImg} />
          <div className={classes.listItem}>Slides</div>
        </ListItem>

        <ListItem className="list_item">
          <img src={gformsimg} className={classes.slideImg} />
          <div className={classes.listItem}>Form</div>
        </ListItem>
      </List>
      <Divider />
      <List
        style={{ marginLeft: "8px", marginRight: "8px", marginTop: "15px" }}
      >
        <ListItem className="list_item">
          <FiSettings />
          <div style={{ marginLeft: "20px", fontSize: "14px" }}>Settings</div>
        </ListItem>
        <ListItem className="list_item">
          <BsQuestionCircle />
          <div
            style={{
              marginLeft: "20px",
              fontSize: "14px",
              fontWeight: "500",
              color: "grey",
            }}
          >
            Help & Feedback
          </div>
        </ListItem>
      </List>
      <Divider />

      <List style={{ marginLeft: "8px", marginRight: "8px", marginTop: "15px" }}>
        <ListItem className="list_item">
            <img src={gdriveimg} style={{width:"20px", height:"20px"}}/>
            <div style={{marginLeft:"20px", fontSize:"14px"}}>Drive</div>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          anchor={"left"}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default TempDraw;

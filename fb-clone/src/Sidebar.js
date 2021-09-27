import React from 'react';
import SidebarRow from './SidebarRow';
import "./Sidebar.css";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibrayIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";


function Sidebar() { 

  const [{ user }, dispatch] = useStateValue();
    
    return (
         <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow  Icon={LocalHospitalIcon} title='Covid-19 Information Center'/>
            <SidebarRow  Icon={EmojiFlagsIcon} title='pages'/>
            <SidebarRow  Icon={PeopleIcon} title='People'/>
            <SidebarRow  Icon={ChatIcon}  title='messenger'/>
            <SidebarRow Icon={StorefrontIcon} title='MarketPlace'/>
            <SidebarRow Icon={VideoLibrayIcon} title='Videos'/>
            <SidebarRow Icon={ ExpandMoreOutlined } title='MarketPlace'/>
          </div>
    )
}
  
export default Sidebar;


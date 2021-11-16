import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import TwitterIcon from "@material-ui/icons/Twitter"
import HomeIcon from "@material-ui/icons/Home";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import BookMarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import PremIdentityIcon from "@material-ui/icons/PermIdentity"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import SearchIcon from "@material-ui/icons/Search";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { Button } from "@material-ui/core";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className='sidebar_twitterIcon'/>
      <SidebarOption active text="Home" Icon={HomeIcon} />
      <SidebarOption text="Explore" Icon={SearchIcon} />
      <SidebarOption text="Notifications" Icon={NotificationsNoneIcon} />
      <SidebarOption text="Messages" Icon={MailOutlineIcon} />
      <SidebarOption text="Bookmarks" Icon={BookMarkBorderIcon} />
      <SidebarOption text="List" Icon={ListAltIcon} />
      <SidebarOption text="Profile" Icon={PremIdentityIcon} />
      <SidebarOption text="More" Icon={MoreHorizIcon} />

      <Button variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>
    </div>
  );
};

export default Sidebar;

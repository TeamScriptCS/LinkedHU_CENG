import { useContext, useEffect, useState } from "react";
import "./leftbar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";

import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AnnouncementIcon from '@mui/icons-material/Announcement';

import { Users } from "../../__mock/dummyData";
import CloseFriend from "./closeFriend";
import { switchPage } from "../../common/helpers";
import { ApplicationContext } from "../../common/context";

export default function Sidebar() {

  const {contextMethods, setContextMethods }  = useContext(ApplicationContext);
  const { currentPage, setCurrentPage } = useState('home');

  useEffect(() => {
    setContextMethods({
        ...contextMethods,
        currentPage: currentPage,
        setCurrentPage: setCurrentPage
    });

}, [currentPage, setCurrentPage]);

  const annClicked = () => {
      setCurrentPage("announcement")
  }
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Lecture Videos</span>
          </li>
          <li className="sidebarListItem">
            <TextSnippetIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Lecture Notes</span>
          </li>
          <li className="sidebarListItem" onClick={annClicked}>
            <AnnouncementIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Announcements</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Student requests and suggestions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Online Meetings & Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
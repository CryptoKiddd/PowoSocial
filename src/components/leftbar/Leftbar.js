import './leftbar.css'
import {RssFeed,} from '@mui/icons-material';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';

export default function Leftbar() {
  return (
    <div className='leftbar' >
        <div className="leftbarWrapper">
          <ul className="leftbarList">
            <li className="leftbarListItem">
              <RssFeed className='leftbarIcon' />
              <span className="leftbarListItemText">Feed</span>

            </li>
            <li className="leftbarListItem">
              <ChatRoundedIcon className='leftbarIcon' />
              <span className="leftbarListItemText">Chats</span>

            </li>
            <li className="leftbarListItem">
              <OndemandVideoRoundedIcon className='leftbarIcon' />
              <span className="leftbarListItemText">Videos</span>

            </li>
            <li className="leftbarListItem">
              <PeopleAltRoundedIcon className='leftbarIcon' />
              <span className="leftbarListItemText">Groups</span>

            </li>
            <li className="leftbarListItem">
              <BookmarkBorderRoundedIcon className='leftbarIcon' />
              <span className="leftbarListItemText">Bookmarks</span>

            </li>
            <li className="leftbarListItem">
              <HelpOutlineRoundedIcon className='leftbarIcon' />
              <span className="leftbarListItemText">Questions</span>

            </li>
            <li className="leftbarListItem">
              <WorkOutlineRoundedIcon className='leftbarIcon' />
              <span className="leftbarListItemText">Jobs</span>

            </li>
            <li className="leftbarListItem">
              <EventNoteRoundedIcon className='leftbarIcon' />
              <span className="leftbarListItemText">Events</span>

            </li>
            <li className="leftbarListItem">
              <SchoolRoundedIcon className='leftbarIcon' />
              <span className="leftbarListItemText">Courses</span>

            </li>
          </ul>


          <button className='leftbarButton' > Show more </button>
          <hr className='leftbarHr' />



          <ul className="leftbarFriendList">

            <li className="leftbarFriend">
              <img src="/assets/person/armazi-profile.jpg" alt="" className="leftbarFriendImg" />
              <span className="leftbarFriendName">Armaz avaliani</span>
            </li>
            <li className="leftbarFriend">
              <img src="/assets/person/armazi-profile.jpg" alt="" className="leftbarFriendImg" />
              <span className="leftbarFriendName">Armaz avaliani</span>
            </li>
            <li className="leftbarFriend">
              <img src="/assets/person/armazi-profile.jpg" alt="" className="leftbarFriendImg" />
              <span className="leftbarFriendName">Armaz avaliani</span>
            </li>
            <li className="leftbarFriend">
              <img src="/assets/person/armazi-profile.jpg" alt="" className="leftbarFriendImg" />
              <span className="leftbarFriendName">Armaz avaliani</span>
            </li>
            <li className="leftbarFriend">
              <img src="/assets/person/armazi-profile.jpg" alt="" className="leftbarFriendImg" />
              <span className="leftbarFriendName">Armaz avaliani</span>
            </li>
            <li className="leftbarFriend">
              <img src="/assets/person/armazi-profile.jpg" alt="" className="leftbarFriendImg" />
              <span className="leftbarFriendName">Armaz avaliani</span>
            </li>
            <li className="leftbarFriend">
              <img src="/assets/person/armazi-profile.jpg" alt="" className="leftbarFriendImg" />
              <span className="leftbarFriendName">Armaz avaliani</span>
            </li>
            <li className="leftbarFriend">
              <img src="/assets/person/armazi-profile.jpg" alt="" className="leftbarFriendImg" />
              <span className="leftbarFriendName">Armaz avaliani</span>
            </li>
            <li className="leftbarFriend">
              <img src="/assets/person/armazi-profile.jpg" alt="" className="leftbarFriendImg" />
              <span className="leftbarFriendName">Armaz avaliani</span>
            </li>
            <li className="leftbarFriend">
              <img src="/assets/person/armazi-profile.jpg" alt="" className="leftbarFriendImg" />
              <span className="leftbarFriendName">Armaz avaliani</span>
            </li>
            <li className="leftbarFriend">
              <img src="/assets/person/armazi-profile.jpg" alt="" className="leftbarFriendImg" />
              <span className="leftbarFriendName">Armaz avaliani</span>
            </li>
            <li className="leftbarFriend">
              <img src="/assets/person/armazi-profile.jpg" alt="" className="leftbarFriendImg" />
              <span className="leftbarFriendName">Armaz avaliani</span>
            </li>

          </ul>


        </div>
    </div>
  )
}

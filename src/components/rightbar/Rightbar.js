import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/online'

export default function Rightbar() {
  return (
    <div className='rightbar' >
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img className='birthdayImg' src="/assets/gift.png" alt="" />
            <span className="birthdayText">
               <b>Armaz Avalian</b> and <b>4 other friends</b> have a birthday today.
            </span>
          </div>
          <img src="/assets/ad.png" alt="" className="righbarAd" />
          <h4 className="rightbarTitle">Friends Online</h4>


          <ul className="rightbarFriendList">

            {Users.map(user=>(
              <Online key={user.id} user={user} />

            ))}
           
          </ul>
        </div>

    </div>
  )
}

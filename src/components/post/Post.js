import './post.css'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { Users } from '../../dummyData'

export default function Post({ post }) {
  console.log(post)
  const user = Users.filter(u=>u.id===1)
  
  return (
    <div className='post' >
      <div className='postWrapper'>
        <div className="postTop">
          <div className="postTopLeft">
            <img className='postProfileImg' src={Users.filter(u=>u.id ===post.userId)[0].profilePicture} alt="" />
            <span className="postUserName">{Users.filter(u=>u.id ===post.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>

          </div>
          <div className="postTopRight">
            <MoreVertRoundedIcon/>

          </div>
        </div>
        <div className="postCenter">
          <span className="posText">{post?.desc}</span>
          <img className='postImg' src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className='likeIcon' src="assets/Facebook-Like-Transparent-Background.png" alt="" />
            <img className='likeIcon'  src="assets/heart.png" alt="" />
            <span className="postLikeCounter">{post.like}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} Commnets</span>
          </div>
        </div>
     </div>

    </div>


  )
}

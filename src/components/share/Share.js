import './share.css'
import PermMediaRoundedIcon from '@mui/icons-material/PermMediaRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';

export default function Share() {
  return (
    <div className='share' >
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src="/assets/person/gvanca.jpg" alt="" />
                <input 
                 placeholder='What is on your mind'
                 className='shareInput' />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                       <PermMediaRoundedIcon htmlColor='tomato' className='shareIcon' />
                        <span className='shareOptionText' >Photo or Video</span>
                        
                    </div>
                    <div className="shareOption">
                       <LocalOfferRoundedIcon htmlColor='blue' className='shareIcon' />
                        <span className='shareOptionText' >Tag</span>
                        
                    </div>
                    <div className="shareOption">
                       <FmdGoodRoundedIcon htmlColor='green' className='shareIcon' />
                        <span className='shareOptionText' >Location</span>
                        
                    </div>
                    <div className="shareOption">
                       <EmojiEmotionsRoundedIcon htmlColor='goldenrod' className='shareIcon' />
                        <span className='shareOptionText' >Feelings</span>
                        
                    </div>
                </div>
                <button className="shareButton">Share</button>
            

            </div>
        </div>

    </div>
  )
}


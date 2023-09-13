import { useState } from "react";
import PropTypes from 'prop-types'
function LikeButton(props) {
    // const defaultLiked= false;
    // const defaultLikedCount = 0;
    const [liked, setLiked] = useState(props.liked);
    const [likedCount, setdefaultLikedCount] = useState(props.likedCount);
    const getButtonText = () => {
        if (liked) {
            return 'cancel like '
        } else {
            return 'like it '
        }
    }
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          padding: "50px",
        }}>
        <button
          onClick={() => {
                    setLiked(!liked);
                    setdefaultLikedCount(liked ? likedCount-1 : likedCount+1)
          }}>
          {getButtonText()}
        </button>
        <span>{likedCount}</span>
      </div>
    );

}

LikeButton.propTypes = {
    liked: PropTypes.bool,
    likedCount:PropTypes.number

}

LikeButton.defaultProps = {
    liked: false,
    likedCount:0
}

export default LikeButton
import React, { forwardRef } from "react";
import "./Post.css";
import Avatar from './Avatar';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="postAvatar">
          <Avatar src={avatar} />
        </div>
        <div className="postBody">
          <div className="postHeader">
            <div className="postHeaderText">
              <h3>
                {displayName}{" "}
                <span className="postHeaderSpecial">
                  {verified && <VerifiedIcon className="postBadge" />} @
                  {username}  
                </span>
              </h3>
            </div>
            <div className="postHeaderDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="postFooter">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
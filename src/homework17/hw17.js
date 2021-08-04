import React from 'react';
import './hw17.css';
import { IoShareOutline} from 'react-icons/io5';
import { FcLike, FcComments, FcRefresh} from 'react-icons/fc';
import  verified  from './verified.svg'

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

const post = {
  authorName: "Anakin Skywalker",
  authorIcon: ANAKIN_IMAGE,
  authorNickname: "@dart_vader",
  content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
  image: RAY_IMAGE,
  date: "26 Feb"
}

function footerValue () {
  return Math.floor(Math.random() * 1000);
}

function Post() {
  return (
    <div className="post">
    <header className="header">
        <div className="header_icon">
            <img src={post.authorIcon} alt="authorIcon"/>
        </div>
        <div className="header_content">
            <div>
                <span className="name">{post.authorName}</span>
                <span className="verified"><img src={verified} alt="verified" /></span>
                <span className="header_additional">{post.authorNickname} - {post.date}</span>
                <span className="reveal_sign"> &#878; </span>
            </div>
            <div className="content">{post.content}</div>
        </div>
    </header>

    <main className="body">
        <div className="image">
            <img src={post.image} alt="post_image"/>
        </div>
    </main>

    <footer className="footer">
        <div className="icons">
            <div className="footer_icon">
                <span className="footer_value"> <FcComments /> {footerValue ()}</span>
            </div>
            <div className="ooter_icon">
                <span className="footer_value"> <FcRefresh /> {footerValue ()}</span>
            </div>
            <div className="footer_icon">
                <span className="footer_value"> <FcLike /> {footerValue ()}</span>
            </div>
            <div className="footer_icon">
                <IoShareOutline />
            </div>
        </div>
    </footer>
</div>
  )
}

export default Post;

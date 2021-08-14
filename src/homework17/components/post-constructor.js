import React from 'react';
import { IoShareOutline} from 'react-icons/io5';
import { FcLike, FcComments, FcRefresh} from 'react-icons/fc';
import  verified  from '../verified.svg';
import '../hw17.css';

function footerValue () {
    return Math.floor(Math.random() * 1000);
}

const PostConstructor = (props) => {
    return (
        <div className="post_hw17">
        <header className="header_hw17">
            <div className="header_icon_hw17">
                <img src={ props.authorIcon } alt="authorIcon"/>
            </div>
            <div className="header_content_hw17">
                <div>
                    <span className="name_hw17">{ props.authorName }</span>
                    <span className="verified"><img src={verified} alt="verified" /></span>
                    <span className="header_additional">{props.authorNickname} - {props.date}</span>
                </div>
                <div className="content_hw17">{props.content}</div>
            </div>
        </header>
    
        <main className="body_hw17">
            <div className="image_hw17">
                <img src={props.image} alt="post_image"/> 
            </div>
        </main>
    
        <footer className="footer_hw17">
            <div className="icons_hw17">
                <div className="footer_icon_hw17">
                    <span className="footer_value"> <FcComments /> {footerValue ()}</span>
                </div>
                <div className="footer_icon_hw17">
                    <span className="footer_value"> <FcRefresh /> {footerValue ()}</span>
                </div>
                <div className="footer_icon_hw17">
                    <span className="footer_value"> <FcLike /> {footerValue ()}</span>
                </div>
                <div className="footer_icon_hw17">
                    <IoShareOutline />
                </div>
            </div>
        </footer>
        </div>
    )
}

export default PostConstructor;
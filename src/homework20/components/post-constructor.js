import React from 'react';
import { IoShareOutline} from 'react-icons/io5';
import { FcLike, FcComments, FcRefresh} from 'react-icons/fc';
import  verified  from './verified.svg';


function footerValue () {
    return Math.floor(Math.random() * 1000);
}

const PostConstructor = (props) => {
    return (
        <div className="post_hw20">
        <header className="header_hw20">
            <div className="header_icon_hw20">
                <img src={ props.authorIcon } alt="authorIcon"/>
            </div>
            <div className="header_content_hw20">
                <div>
                    <span className="name_hw20">{ props.authorName }</span>
                    <span className="verified"><img src={verified} alt="verified" /></span>
                    <span className="header_additional">{props.authorNickname} - {props.date}</span>
                </div>
                <div className="content_hw20">{props.content}</div>
            </div>
        </header>
    
        <main className="body_hw20">
            <div className="image_hw20">
                <img src={props.image} alt="post_image"/> 
            </div>
        </main>
    
        <footer className="footer_hw20">
            <div className="icons_hw20">
                <div className="footer_icon_hw20">
                    <span className="footer_value"> <FcComments /> {footerValue ()}</span>
                </div>
                <div className="footer_icon_hw20">
                    <span className="footer_value"> <FcRefresh /> {footerValue ()}</span>
                </div>
                <div className="footer_icon_hw20">
                    <span className="footer_value"> <FcLike /> {footerValue ()}</span>
                </div>
                <div className="footer_icon_hw20">
                    <IoShareOutline />
                </div>
            </div>
        </footer>
        </div>
    )
}

export default PostConstructor;
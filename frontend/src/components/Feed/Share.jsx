import "./Share.css";
import {PermMedia, Label, EmojiEmotions} from "@material-ui/icons"

import TextSnippetIcon from '@mui/icons-material/TextSnippet';

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/9.jpeg" alt="" />
          <input
            placeholder="What do you want to talk about TeamScript?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Event</span>
                </div>
                <div className="shareOption">
                    <TextSnippetIcon htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Lecture Note</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
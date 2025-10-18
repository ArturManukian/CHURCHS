import './Section1.sass';
import myVideo from "./video/Video_20250827233951065_by_VideoShow.mp4"; // Ձեր վիդեոյի ճանապարհը

function VideoComponent() {
  return (
    <div className="video-container">
      <video src={myVideo} controls autoPlay={true} loop muted>
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoComponent;

export default function VideoPlayer() {
  return (
    <div className="video-player">
      <video
        controls
        width="640"
        height="360"
        preload="metadata"
        loading="lazy" 
      >
        <source src="/video/video.webm" type="video/webm" />
        <source src="/video/video.mp4" type="video/mp4" />

        {/* Fallback */}
        El navegador no soporta la reproduccion de audio.
      </video>
    </div>
  );
}

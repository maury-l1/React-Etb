export default function AudioPlayer() {
  return (
    <div className="audio-player">
      <audio controls>
        <source src="/audio/ella.ogg" type="audio/ogg" />
        <source src="/audio/ella.mp3" type="audio/mpeg" />

        {/* Fallback */}
        Tu navegadpr no soporta el tipo de audio.
      </audio>
    </div>
  );
}

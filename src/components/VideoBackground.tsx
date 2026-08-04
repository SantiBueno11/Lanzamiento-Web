export default function VideoBackground() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="fixed top-1/2 left-1/2 w-screen h-screen object-cover -translate-x-1/2 -translate-y-1/2 -z-10 bg-black [filter:brightness(0.25)_contrast(1.2)]"
    >
      <source src="/images/programacion_video.mp4" type="video/mp4" />
      Tu navegador no soporta videos en HTML5.
    </video>
  )
}

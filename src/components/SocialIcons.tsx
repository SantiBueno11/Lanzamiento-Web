export default function SocialIcons() {
  return (
    <div className="fixed left-5 bottom-5 z-[999] flex flex-col gap-2.5">
      <a
        href="https://www.instagram.com/Lanzamiento.Web"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
        className="w-[50px] h-[50px] flex justify-center items-center rounded-full cursor-pointer transition-transform hover:scale-110"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          onError={(e) => (e.currentTarget.src = 'https://placehold.co/50x50/FFFFFF/C13584?text=IG')}
          alt="Instagram"
          className="w-full h-full object-contain"
        />
      </a>

      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        title="Facebook"
        className="w-[50px] h-[50px] flex justify-center items-center rounded-full cursor-pointer transition-transform hover:scale-110"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
          onError={(e) => (e.currentTarget.src = 'https://placehold.co/50x50/FFFFFF/3b5998?text=FB')}
          alt="Facebook"
          className="w-full h-full object-contain"
        />
      </a>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=lanzamientoweb25@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Gmail"
        className="w-[50px] h-[50px] flex justify-center items-center rounded-full cursor-pointer transition-transform hover:scale-110"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
          onError={(e) => (e.currentTarget.src = 'https://placehold.co/50x50/FFFFFF/FF4500?text=Mail')}
          alt="Gmail"
          className="w-full h-full object-contain"
        />
      </a>
    </div>
  )
}

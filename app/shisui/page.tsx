import CharacterPage from '../components/CharacterPage'

const shisuiImages = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desktop-wallpaper-shisui-shisui-sharingan.jpg-i8Gyv27XFAjVjodLyxGh7y60EOlrVK.jpeg",
    quote: "Self-sacrifice... A nameless shinobi who protects peace within its shadow... That is a true shinobi.",
    voiceUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/self-sacrifice-a-nameless-shinobi-who-protects-peace-within-its-shadow-that-is-a-true-shinobi-101soundboards%20(1)-Rd8jCk1NEkimcmMyZu4CUwpg2pkIyl.mp3"
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5ea8a8fc1a36fc254ecc7948dd0d3fce86e9ed3d_hq.jpg-AaF60eCC1e7guaRXVBqNqFcLWqLxM6.jpeg",
    quote: "The village's safety is more important than my life. Protecting the village... That is what being a shinobi means.",
    voiceUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the-villages-safety-is-more-important-than-my-life-protecting-the-village-that-is-what-being-a-shinobi-means-101soundboards-uA0SZV35z5Q0XOg9vmxQL8D7TTQuWj.mp3"
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shisui_gives_his_eye-krsTflVOhK91endc2ntrRTutGKHatv.webp",
    quote: "Even if my eyes lose their light, my spirit will never die. I will protect the village, and the Uchiha name!",
    voiceUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/even-if-my-eyes-lose-their-light-my-spirit-will-never-die-i-will-protect-the-village-and-the-uchiha-name-101soundboards-AlNkQc27f1cHemyslmkbtBVpDgtD2I.mp3"
  }
]

export default function ShisuiPage() {
  return <CharacterPage images={shisuiImages} title="Uchiha Shisui" />
}


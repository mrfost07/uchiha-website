import CharacterPage from '../components/CharacterPage'

const sasukeImages = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wallpapersden.com_sasuke-uchiha-art-new_1920x1080.jpg-aB3pGmv1fxhC7urq3kyownNgYt6xoP.jpeg",
    quote: "I have long since closed my eyes... My only goal is in the darkness.",
    voiceUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/i-have-long-since-closed-my-eyes-my-only-goal-is-in-the-darkness-101soundboards%20(1)-Gowy8eyqv6pJNv4PYh3EtGvmKO3ST3.mp3"
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2827157c-1d13-4b8f-9935-90884d5b1c90-sasuke-4k-7f1Hlvl1gxHtH6x5DMngACj8tqoH1b.webp",
    quote: "I will admit that you're stronger than before. But I'm also stronger than before.",
    voiceUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/i-will-admit-that-youre-stronger-than-before-but-im-also-stronger-than-before-101soundboards-8No6XX7pg3cOSCYwNR4Y9blxWeJGoo.mp3"
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sasuke-uchiha-4-k-wallpaper-2560x800_59.jpg-UUKGS8AM7Tr710qAJ0BXnmKPHy53Lf.jpeg",
    quote: "Call me foolish if you want. Following Itachi is for those who don’t know true hatred.",
    voiceUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/call-me-foolish-if-you-want-following-itachi-is-for-those-who-dont-know-true-hatred-101soundboards-MTpfkpsCp5UIWxo78RULA5jdD9rV39.mp3"
  }
]

export default function SasukePage() {
  return <CharacterPage images={sasukeImages} title="Uchiha Sasuke" />
}


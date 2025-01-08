import CharacterPage from '../components/CharacterPage'

const madaraImages = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wp13667497-QvDe7DKrzIeFGccJYvY3txkTERIn7m.webp",
    quote: "Wake up to reality! Nothing ever goes as planned in this accursed world.",
    voiceUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wake-up-to-reality-nothing-ever-goes-as-planned-in-this-accursed-world-101soundboards-taejgzI3GCSvomC9HZ1dEYNKGpe2sx.mp3"
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6062dd2ffe78ef365c9cebe8cf827c93.jpg-9GaBhdoGFwjA6kmSTuTjXzZxlDkVGw.jpeg",
    quote: "In this world, wherever there is light - there are also shadows. As long as the concept of winners exists, there must also be losers.",
    voiceUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/in-this-world-wherever-there-is-light-there-are-also-shadows-as-long-as-the-concept-of-winners-exists-there-must-also-be-losers-101soundboards-h7GSkqmn0vvaMn5Y9zvMKgPOYvMVot.mp3"
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0b1eb6ba31b2fd6b1b51e1da200aa4bb.jpg-TgO08FzRnN6UZNzTuC2Ne3qntk42ub.jpeg",
    quote: "The longer you live… The more you realize that reality is just made of pain, suffering and emptiness.",
    voiceUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the-longer-you-live-the-more-you-realize-that-reality-is-just-made-of-pain-suffering-and-emptiness-101soundboards-LqvOUz1bNOm0UdTmSuqDgnNSHK5TH1.mp3"
  }
]

export default function MadaraPage() {
  return <CharacterPage images={madaraImages} title="Uchiha Madara" />
}


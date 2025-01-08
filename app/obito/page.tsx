import CharacterPage from '../components/CharacterPage'

const obitoImages = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wp12180797-xLTplvU2U3oRVeS3brenIJVkoxtCF6.webp",
    quote: "Those who abandon their friends are worse than scum.",
    voiceUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/those-who-abandon-their-friends-are-worse-than-scum-101soundboards-kaCfSavYjyWg0eair9qaye1SowqZvy.mp3"
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/140059-G3VKhoxpQaeoPlHIOPQFg32CrFKmTE.webp",
    quote: "Looking back at it now, I realize that true hope is a lot like cherry blossoms... It's only beautiful because it doesn't last forever.",
    voiceUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/looking-back-at-it-now-i-realize-that-true-hope-is-a-lot-like-cherry-blossoms-its-only-beautiful-because-it-doesnt-last-forever-101soundboards%20(1)-SUcq04WyCsEXzD9tmB8x4UY92RkmTm.mp3"
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desktop-wallpaper-obito-uchiha-obito-sad.jpg-tLARKX8QslqqyZDLF9aTYLlH2r8Vxo.jpeg",
    quote: "This world is full of things that don't go as you wish. The longer you live the more you realize reality is just made of pain, suffering, and emptiness.",
    voiceUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/this-world-is-full-of-things-that-dont-go-as-you-wish-the-longer-you-live-the-more-you-realize-reality-is-just-made-of-pain-suffering-and-emptiness-101soundboards-lY0Qul0r3TdiF6qcr2HSGrvj6UiTCu.mp3"
  }
]

export default function ObitoPage() {
  return <CharacterPage images={obitoImages} title="Uchiha Obito" />
}


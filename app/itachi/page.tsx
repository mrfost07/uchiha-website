import CharacterPage from '../components/CharacterPage'

const itachiImages = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/narutoshippuuden-1736060373767-1722.jpg-XfYVHCDYuLTmvXZS2ECY0P7sCZhr94.jpeg",
    quote: "Those who forgive themselves, and are able to accept their true nature... They are the strong ones!",
    voiceUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/itachi-uchiha-tts-file-h5friP2vX71ppd0ee13RL9G1n5ea5o.wav"
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/naruto-itachi-uchiha-with-red-eyes-desktop-wallpaper-preview.jpg-FE9WsXXSE9Z57ePnEd5IPYRxQ8KpW1.jpeg",
    quote: "People live their lives bound by what they accept as correct and true.",
    voiceUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/itachi-uchiha-tts-file%20(1)-tuAHHtSdARfQoBRUWcxwPXPJ53KXcI.wav"
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/naruto-itachi-uchiha-red-desktop-wallpaper-preview-hbANGlAZWOLbwsuN0CcaWGlGMMzP3a.webp",
    quote: "Knowledge and awareness are vague, and perhaps better called illusions.",
    voiceUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/itachi-uchiha-tts-file%20(2)-2w8iBW8QEWj7SpgyhVP6GjiqQQVtEb.wav"
  }
]

export default function ItachiPage() {
  return <CharacterPage images={itachiImages} title="Uchiha Itachi" />
}


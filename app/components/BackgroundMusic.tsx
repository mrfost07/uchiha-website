'use client'

import { useEffect, useRef } from 'react'

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create a new Audio object when the component mounts
    audioRef.current = new Audio('/Sasori.m4a') // Audio is in the public folder
    audioRef.current.loop = true // Set the audio to loop indefinitely
    audioRef.current.volume = 0.3 // Adjust the volume as necessary

    // Play the audio on page load
    const playAudio = async () => {
      try {
        await audioRef.current?.play()
        console.log("Audio is playing successfully")
      } catch (error) {
        console.error("Autoplay failed:", error)
      }
    }

    playAudio()

    // Cleanup function to stop audio if the component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0 // Reset audio to the start
        audioRef.current = null
      }
    }
  }, [])

  return null // No UI elements are rendered, only background audio
}

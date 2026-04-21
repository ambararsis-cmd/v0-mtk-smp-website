"use client"

import { ChevronUp } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const handleHelpClick = () => {
    alert("Menghubungkan ke Kakak Tutor...")
  }

  return (
    <>
      {/* Help Bubble */}
      <button
        onClick={handleHelpClick}
        className="fixed bottom-5 right-20 z-50 flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm text-accent-foreground shadow-lg transition-transform hover:scale-105"
      >
        <span className="hidden sm:inline">Butuh Bantuan? Tanya Kakak Tutor!</span>
        <span className="sm:hidden">Bantuan</span>
        <Image
          src="/tutor-avatar.svg"
          alt="Tutor"
          width={30}
          height={30}
          className="h-8 w-8 rounded-full bg-white"
        />
      </button>

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
          aria-label="Back to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </>
  )
}

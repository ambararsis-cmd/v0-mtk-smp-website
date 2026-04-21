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
        className="fixed bottom-4 sm:bottom-5 right-16 sm:right-20 z-50 flex items-center gap-1.5 sm:gap-2 rounded-full bg-accent px-2.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-accent-foreground shadow-lg transition-transform active:scale-95 sm:hover:scale-105"
      >
        <span className="hidden sm:inline">Butuh Bantuan? Tanya Kakak Tutor!</span>
        <span className="sm:hidden text-[10px]">Bantuan</span>
        <Image
          src="/tutor-avatar.svg"
          alt="Tutor"
          width={30}
          height={30}
          className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-white"
        />
      </button>

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 sm:bottom-5 right-3 sm:right-5 z-50 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg transition-transform active:scale-90 sm:hover:scale-110"
          aria-label="Back to top"
        >
          <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      )}
    </>
  )
}

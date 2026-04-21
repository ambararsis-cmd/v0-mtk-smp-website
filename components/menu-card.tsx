"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

interface MenuCardProps {
  title: string
  subtitle: string
  description: string
  icon: string
  color: "blue" | "orange" | "green" | "red"
  onMateriClick?: () => void
  onVideoClick?: () => void
  onLatihanClick?: () => void
}

const colorClasses = {
  blue: "bg-card-blue",
  orange: "bg-card-orange",
  green: "bg-card-green",
  red: "bg-card-red",
}

export function MenuCard({
  title,
  subtitle,
  description,
  icon,
  color,
  onMateriClick,
  onVideoClick,
  onLatihanClick,
}: MenuCardProps) {
  return (
    <div className={`${colorClasses[color]} rounded-xl p-4 sm:p-6 text-center text-white shadow-lg transition-transform active:scale-[0.98] sm:hover:scale-105`}>
      <div className="mb-3 sm:mb-4 flex justify-center">
        <Image
          src={icon}
          alt={title}
          width={70}
          height={70}
          className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
        />
      </div>
      <h3 className="mb-1.5 sm:mb-2 text-xs sm:text-sm font-semibold leading-tight md:text-base">
        {title}
        <br />
        <span className="font-normal opacity-90">{subtitle}</span>
      </h3>
      <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs leading-relaxed opacity-90 md:text-sm line-clamp-3">
        {description}
      </p>
      <div className="flex gap-1.5 sm:gap-2 justify-center flex-wrap">
        <Button
          variant="secondary"
          size="sm"
          className="rounded-full bg-white text-foreground hover:bg-white/90 active:bg-white/80 text-[10px] sm:text-xs px-2.5 sm:px-3 h-7 sm:h-8"
          onClick={onMateriClick}
        >
          Materi
        </Button>
        <Button
          variant="secondary"
          size="sm"
          className="rounded-full bg-white text-foreground hover:bg-white/90 active:bg-white/80 text-[10px] sm:text-xs px-2.5 sm:px-3 h-7 sm:h-8"
          onClick={onVideoClick}
        >
          Video
        </Button>
        <Button
          variant="secondary"
          size="sm"
          className="rounded-full bg-white text-foreground hover:bg-white/90 active:bg-white/80 text-[10px] sm:text-xs px-2.5 sm:px-3 h-7 sm:h-8"
          onClick={onLatihanClick}
        >
          Latihan
        </Button>
      </div>
    </div>
  )
}

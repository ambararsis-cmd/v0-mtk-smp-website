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
    <div className={`${colorClasses[color]} rounded-xl p-6 text-center text-white shadow-lg transition-transform hover:scale-105`}>
      <div className="mb-4 flex justify-center">
        <Image
          src={icon}
          alt={title}
          width={70}
          height={70}
          className="h-16 w-16 object-contain"
        />
      </div>
      <h3 className="mb-2 text-sm font-semibold leading-tight md:text-base">
        {title}
        <br />
        <span className="font-normal opacity-90">{subtitle}</span>
      </h3>
      <p className="mb-4 text-xs leading-relaxed opacity-90 md:text-sm">
        {description}
      </p>
      <div className="flex gap-2 justify-center flex-wrap">
        <Button
          variant="secondary"
          size="sm"
          className="rounded-full bg-white text-foreground hover:bg-white/90 text-xs px-3"
          onClick={onMateriClick}
        >
          Materi
        </Button>
        <Button
          variant="secondary"
          size="sm"
          className="rounded-full bg-white text-foreground hover:bg-white/90 text-xs px-3"
          onClick={onVideoClick}
        >
          Video
        </Button>
        <Button
          variant="secondary"
          size="sm"
          className="rounded-full bg-white text-foreground hover:bg-white/90 text-xs px-3"
          onClick={onLatihanClick}
        >
          Latihan
        </Button>
      </div>
    </div>
  )
}

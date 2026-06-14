"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PlayCircle, Clock, BookOpen, ArrowLeft, Search, Filter } from "lucide-react"
import Link from "next/link"

const videos = [
  {
    id: 1,
    title: "Pengenalan Variabel dan Konstanta",
    description: "Memahami konsep dasar variabel, koefisien, dan konstanta dalam aljabar",
    duration: "12:30",
    category: "Pengenalan Aljabar",
    kelas: "Kelas 7",
    thumbnail: "/icons/algebra-intro.svg",
    color: "bg-[#2196f3]",
  },
  {
    id: 2,
    title: "Operasi Penjumlahan dan Pengurangan Aljabar",
    description: "Cara menjumlahkan dan mengurangkan suku-suku sejenis",
    duration: "15:45",
    category: "Pengenalan Aljabar",
    kelas: "Kelas 7",
    thumbnail: "/icons/algebra-intro.svg",
    color: "bg-[#2196f3]",
  },
  {
    id: 3,
    title: "Menyelesaikan PLSV",
    description: "Langkah-langkah menyelesaikan persamaan linear satu variabel",
    duration: "18:20",
    category: "Persamaan Linear",
    kelas: "Kelas 7",
    thumbnail: "/icons/equation.svg",
    color: "bg-[#ff9800]",
  },
  {
    id: 4,
    title: "Metode Substitusi dan Eliminasi",
    description: "Menyelesaikan SPLDV dengan dua metode berbeda",
    duration: "22:15",
    category: "Persamaan Linear",
    kelas: "Kelas 7",
    thumbnail: "/icons/equation.svg",
    color: "bg-[#ff9800]",
  },
]

const categories = ["Semua", "Pengenalan Aljabar", "Persamaan Linear"]

export default function VideoTutorialPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)

  const filteredVideos = videos.filter((video) => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "Semua" || video.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#ff9800] to-[#f57c00] py-12 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Link href="/" className="mb-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Beranda
            </Link>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-white/20 p-4">
                <PlayCircle className="h-10 w-10" />
              </div>
              <div>
                <h1 className="text-2xl font-bold md:text-3xl">Video Tutorial</h1>
                <p className="mt-1 text-white/90">Tonton penjelasan visual untuk pemahaman lebih baik</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            {/* Search and Filter */}
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="relative flex-1 md:max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Cari video..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-input bg-card py-2 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-[#ff9800] hover:bg-[#f57c00]" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-lg bg-card p-4 text-center shadow-sm">
                <p className="text-2xl font-bold text-[#ff9800]">{videos.length}</p>
                <p className="text-sm text-muted-foreground">Total Video</p>
              </div>
              <div className="rounded-lg bg-card p-4 text-center shadow-sm">
                <p className="text-2xl font-bold text-[#4caf50]">4</p>
                <p className="text-sm text-muted-foreground">Kategori</p>
              </div>
              <div className="rounded-lg bg-card p-4 text-center shadow-sm">
                <p className="text-2xl font-bold text-[#2196f3]">2+ jam</p>
                <p className="text-sm text-muted-foreground">Total Durasi</p>
              </div>
              <div className="rounded-lg bg-card p-4 text-center shadow-sm">
                <p className="text-2xl font-bold text-primary">HD</p>
                <p className="text-sm text-muted-foreground">Kualitas Video</p>
              </div>
            </div>

            {/* Video Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  className="group overflow-hidden rounded-xl bg-card shadow-sm transition-all hover:shadow-md"
                >
                  {/* Thumbnail */}
                  <div 
                    className={`relative aspect-video ${video.color} flex cursor-pointer items-center justify-center`}
                    onClick={() => setPlayingVideo(playingVideo === video.id ? null : video.id)}
                  >
                    {playingVideo === video.id ? (
                      <div className="flex h-full w-full items-center justify-center bg-black/80 text-white">
                        <p className="text-sm">Video sedang diputar...</p>
                      </div>
                    ) : (
                      <>
                        <img src={video.thumbnail} alt={video.title} className="h-16 w-16 opacity-30" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="rounded-full bg-white/90 p-3 transition-transform group-hover:scale-110">
                            <PlayCircle className="h-8 w-8 text-gray-800" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
                          {video.duration}
                        </div>
                      </>
                    )}
                  </div>
                  {/* Info */}
                  <div className="p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <span className={`rounded px-2 py-0.5 text-xs text-white ${video.color}`}>
                        {video.kelas}
                      </span>
                    </div>
                    <h3 className="mb-1 font-semibold text-foreground line-clamp-2 group-hover:text-primary">
                      {video.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">{video.description}</p>
                    <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {video.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-3 w-3" />
                        {video.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredVideos.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-muted-foreground">Tidak ada video yang ditemukan</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

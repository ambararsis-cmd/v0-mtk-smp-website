"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  Trophy, 
  Star, 
  Award, 
  Target, 
  Zap, 
  BookOpen, 
  CheckCircle2, 
  Lock,
  Flame,
  Medal,
  Crown,
  Sparkles,
  Clock,
  TrendingUp,
  ArrowLeft
} from "lucide-react"
import Link from "next/link"

// Badge categories
const badgeCategories = [
  { id: "semua", label: "Semua", count: 16 },
  { id: "materi", label: "Materi", count: 4 },
  { id: "kuis", label: "Kuis", count: 4 },
  { id: "streak", label: "Streak", count: 4 },
  { id: "spesial", label: "Spesial", count: 4 },
]

// All achievements data
const allAchievements = [
  // Materi achievements
  {
    id: 1,
    title: "Pemula Aljabar",
    description: "Selesaikan materi pertamamu",
    icon: BookOpen,
    category: "materi",
    earned: true,
    earnedDate: "15 Jan 2026",
    rarity: "common",
    xp: 50,
  },
  {
    id: 2,
    title: "Pembaca Tekun",
    description: "Selesaikan 5 materi pembelajaran",
    icon: BookOpen,
    category: "materi",
    earned: true,
    earnedDate: "20 Jan 2026",
    rarity: "uncommon",
    xp: 100,
  },
  {
    id: 3,
    title: "Ilmuwan Muda",
    description: "Selesaikan 10 materi pembelajaran",
    icon: Star,
    category: "materi",
    earned: false,
    progress: 7,
    total: 10,
    rarity: "rare",
    xp: 200,
  },
  {
    id: 4,
    title: "Master Aljabar",
    description: "Selesaikan semua materi aljabar",
    icon: Crown,
    category: "materi",
    earned: false,
    progress: 2,
    total: 4,
    rarity: "legendary",
    xp: 500,
  },
  // Kuis achievements
  {
    id: 5,
    title: "Jawaban Pertama",
    description: "Selesaikan kuis pertamamu",
    icon: CheckCircle2,
    category: "kuis",
    earned: true,
    earnedDate: "16 Jan 2026",
    rarity: "common",
    xp: 50,
  },
  {
    id: 6,
    title: "Nilai Sempurna",
    description: "Dapatkan nilai 100% di kuis",
    icon: Award,
    category: "kuis",
    earned: true,
    earnedDate: "18 Jan 2026",
    rarity: "rare",
    xp: 150,
  },
  {
    id: 7,
    title: "Quiz Master",
    description: "Selesaikan 20 kuis dengan nilai di atas 80%",
    icon: Trophy,
    category: "kuis",
    earned: false,
    progress: 12,
    total: 20,
    rarity: "epic",
    xp: 300,
  },
  {
    id: 8,
    title: "Jenius Matematika",
    description: "Dapatkan nilai 100% di 10 kuis berbeda",
    icon: Sparkles,
    category: "kuis",
    earned: false,
    progress: 3,
    total: 10,
    rarity: "legendary",
    xp: 500,
  },
  // Streak achievements
  {
    id: 9,
    title: "Awal yang Baik",
    description: "Belajar 3 hari berturut-turut",
    icon: Flame,
    category: "streak",
    earned: true,
    earnedDate: "13 Jan 2026",
    rarity: "common",
    xp: 50,
  },
  {
    id: 10,
    title: "Rajin Belajar",
    description: "Belajar 7 hari berturut-turut",
    icon: Flame,
    category: "streak",
    earned: true,
    earnedDate: "17 Jan 2026",
    rarity: "uncommon",
    xp: 100,
  },
  {
    id: 11,
    title: "Konsisten",
    description: "Belajar 14 hari berturut-turut",
    icon: Zap,
    category: "streak",
    earned: false,
    progress: 7,
    total: 14,
    rarity: "rare",
    xp: 200,
  },
  {
    id: 12,
    title: "Dedikasi Tinggi",
    description: "Belajar 30 hari berturut-turut",
    icon: Medal,
    category: "streak",
    earned: false,
    progress: 7,
    total: 30,
    rarity: "legendary",
    xp: 500,
  },
  // Special achievements
  {
    id: 13,
    title: "Penjelajah",
    description: "Kunjungi semua halaman fitur",
    icon: Target,
    category: "spesial",
    earned: true,
    earnedDate: "14 Jan 2026",
    rarity: "common",
    xp: 30,
  },
  {
    id: 14,
    title: "Penonton Setia",
    description: "Tonton 10 video pembelajaran",
    icon: Star,
    category: "spesial",
    earned: false,
    progress: 6,
    total: 10,
    rarity: "uncommon",
    xp: 100,
  },
  {
    id: 15,
    title: "Speed Runner",
    description: "Selesaikan kuis dalam waktu kurang dari 2 menit",
    icon: Clock,
    category: "spesial",
    earned: false,
    rarity: "rare",
    xp: 150,
  },
  {
    id: 16,
    title: "Legenda MTK",
    description: "Raih semua pencapaian lainnya",
    icon: Crown,
    category: "spesial",
    earned: false,
    progress: 6,
    total: 15,
    rarity: "legendary",
    xp: 1000,
  },
]

const rarityColors = {
  common: {
    bg: "bg-slate-100",
    border: "border-slate-300",
    text: "text-slate-600",
    icon: "text-slate-500",
    label: "Umum",
  },
  uncommon: {
    bg: "bg-green-50",
    border: "border-green-300",
    text: "text-green-700",
    icon: "text-green-500",
    label: "Tidak Umum",
  },
  rare: {
    bg: "bg-blue-50",
    border: "border-blue-300",
    text: "text-blue-700",
    icon: "text-blue-500",
    label: "Langka",
  },
  epic: {
    bg: "bg-purple-50",
    border: "border-purple-300",
    text: "text-purple-700",
    icon: "text-purple-500",
    label: "Epik",
  },
  legendary: {
    bg: "bg-amber-50",
    border: "border-amber-400",
    text: "text-amber-700",
    icon: "text-amber-500",
    label: "Legendaris",
  },
}

export default function PencapaianPage() {
  const earnedCount = allAchievements.filter(a => a.earned).length
  const totalXP = allAchievements.filter(a => a.earned).reduce((sum, a) => sum + a.xp, 0)
  const totalPossibleXP = allAchievements.reduce((sum, a) => sum + a.xp, 0)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-8 sm:py-12 text-white">
          <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
            <Link href="/" className="mb-4 inline-flex items-center gap-2 text-xs sm:text-sm text-white/80 hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Beranda
            </Link>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white/20">
                <Trophy className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Pencapaian</h1>
                <p className="mt-1 text-sm sm:text-base text-white/90">Kumpulkan badge dan raih prestasi</p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-4">
              <div className="rounded-xl bg-white/10 backdrop-blur-sm p-3 sm:p-4 text-center">
                <p className="text-2xl sm:text-3xl font-bold">{earnedCount}</p>
                <p className="text-[10px] sm:text-xs text-white/80">Badge Diraih</p>
              </div>
              <div className="rounded-xl bg-white/10 backdrop-blur-sm p-3 sm:p-4 text-center">
                <p className="text-2xl sm:text-3xl font-bold">{allAchievements.length - earnedCount}</p>
                <p className="text-[10px] sm:text-xs text-white/80">Badge Tersisa</p>
              </div>
              <div className="rounded-xl bg-white/10 backdrop-blur-sm p-3 sm:p-4 text-center">
                <p className="text-2xl sm:text-3xl font-bold">{totalXP}</p>
                <p className="text-[10px] sm:text-xs text-white/80">Total XP</p>
              </div>
            </div>

            {/* XP Progress Bar */}
            <div className="mt-4 sm:mt-6">
              <div className="flex items-center justify-between text-xs sm:text-sm text-white/80 mb-2">
                <span>Progress XP</span>
                <span>{totalXP} / {totalPossibleXP} XP</span>
              </div>
              <div className="h-3 sm:h-4 w-full overflow-hidden rounded-full bg-white/20">
                <div
                  className="h-full bg-white transition-all duration-500"
                  style={{ width: `${(totalXP / totalPossibleXP) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="border-b border-border bg-card sticky top-14 sm:top-16 z-40">
          <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
            <div className="flex gap-1 sm:gap-2 overflow-x-auto py-3 sm:py-4 no-scrollbar">
              {badgeCategories.map((cat) => (
                <button
                  key={cat.id}
                  className={`flex-shrink-0 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-colors ${
                    cat.id === "semua"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat.label}
                  <span className="ml-1.5 text-[10px] sm:text-xs opacity-70">({cat.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Grid */}
        <section className="py-6 sm:py-10">
          <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
            {/* Recently Earned */}
            <div className="mb-8 sm:mb-10">
              <h2 className="mb-4 sm:mb-6 flex items-center gap-2 text-base sm:text-lg font-bold text-foreground">
                <Sparkles className="h-5 w-5 text-amber-500" />
                Baru Diraih
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {allAchievements
                  .filter(a => a.earned)
                  .slice(0, 4)
                  .map((achievement) => {
                    const rarity = rarityColors[achievement.rarity as keyof typeof rarityColors]
                    return (
                      <div
                        key={achievement.id}
                        className={`relative rounded-xl border-2 ${rarity.border} ${rarity.bg} p-3 sm:p-4 transition-transform active:scale-[0.98]`}
                      >
                        <div className="absolute -top-2 -right-2 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-green-500 text-white">
                          <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4" />
                        </div>
                        <div className={`mb-2 sm:mb-3 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full ${rarity.bg}`}>
                          <achievement.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${rarity.icon}`} />
                        </div>
                        <h3 className="text-xs sm:text-sm font-semibold text-foreground line-clamp-1">{achievement.title}</h3>
                        <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-muted-foreground line-clamp-2">{achievement.description}</p>
                        <div className="mt-2 sm:mt-3 flex items-center justify-between">
                          <span className={`text-[10px] sm:text-xs font-medium ${rarity.text}`}>{rarity.label}</span>
                          <span className="text-[10px] sm:text-xs font-medium text-amber-600">+{achievement.xp} XP</span>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>

            {/* In Progress */}
            <div className="mb-8 sm:mb-10">
              <h2 className="mb-4 sm:mb-6 flex items-center gap-2 text-base sm:text-lg font-bold text-foreground">
                <TrendingUp className="h-5 w-5 text-primary" />
                Sedang Dikerjakan
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {allAchievements
                  .filter(a => !a.earned && a.progress !== undefined)
                  .slice(0, 3)
                  .map((achievement) => {
                    const rarity = rarityColors[achievement.rarity as keyof typeof rarityColors]
                    const progressPercent = achievement.progress && achievement.total 
                      ? (achievement.progress / achievement.total) * 100 
                      : 0
                    return (
                      <div
                        key={achievement.id}
                        className="rounded-xl border border-border bg-card p-3 sm:p-4 shadow-sm"
                      >
                        <div className="flex items-start gap-3">
                          <div className={`flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-full ${rarity.bg}`}>
                            <achievement.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${rarity.icon}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xs sm:text-sm font-semibold text-foreground">{achievement.title}</h3>
                            <p className="mt-0.5 text-[10px] sm:text-xs text-muted-foreground">{achievement.description}</p>
                          </div>
                        </div>
                        <div className="mt-3 sm:mt-4">
                          <div className="flex items-center justify-between text-[10px] sm:text-xs mb-1.5">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium text-foreground">{achievement.progress}/{achievement.total}</span>
                          </div>
                          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                            <div
                              className="h-full bg-primary transition-all duration-500"
                              style={{ width: `${progressPercent}%` }}
                            />
                          </div>
                        </div>
                        <div className="mt-2 sm:mt-3 flex items-center justify-between">
                          <span className={`text-[10px] sm:text-xs font-medium ${rarity.text}`}>{rarity.label}</span>
                          <span className="text-[10px] sm:text-xs font-medium text-amber-600">+{achievement.xp} XP</span>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>

            {/* All Achievements */}
            <div>
              <h2 className="mb-4 sm:mb-6 flex items-center gap-2 text-base sm:text-lg font-bold text-foreground">
                <Award className="h-5 w-5 text-purple-500" />
                Semua Pencapaian
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {allAchievements.map((achievement) => {
                  const rarity = rarityColors[achievement.rarity as keyof typeof rarityColors]
                  const isLocked = !achievement.earned && !achievement.progress
                  return (
                    <div
                      key={achievement.id}
                      className={`relative rounded-xl border ${
                        achievement.earned 
                          ? `border-2 ${rarity.border} ${rarity.bg}` 
                          : "border-border bg-card"
                      } p-3 sm:p-4 transition-all ${isLocked ? "opacity-60" : ""}`}
                    >
                      {achievement.earned && (
                        <div className="absolute -top-2 -right-2 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-green-500 text-white">
                          <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4" />
                        </div>
                      )}
                      {isLocked && (
                        <div className="absolute -top-2 -right-2 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-muted text-muted-foreground">
                          <Lock className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        </div>
                      )}
                      <div className={`mb-2 sm:mb-3 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full ${
                        achievement.earned ? rarity.bg : "bg-muted"
                      }`}>
                        <achievement.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${
                          achievement.earned ? rarity.icon : "text-muted-foreground"
                        }`} />
                      </div>
                      <h3 className={`text-xs sm:text-sm font-semibold line-clamp-1 ${
                        achievement.earned ? "text-foreground" : "text-muted-foreground"
                      }`}>{achievement.title}</h3>
                      <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-muted-foreground line-clamp-2">{achievement.description}</p>
                      
                      {/* Progress bar for in-progress achievements */}
                      {!achievement.earned && achievement.progress !== undefined && (
                        <div className="mt-2">
                          <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                            <div
                              className="h-full bg-primary transition-all duration-500"
                              style={{ width: `${(achievement.progress / (achievement.total || 1)) * 100}%` }}
                            />
                          </div>
                          <p className="mt-1 text-[10px] text-muted-foreground">{achievement.progress}/{achievement.total}</p>
                        </div>
                      )}
                      
                      <div className="mt-2 sm:mt-3 flex items-center justify-between">
                        <span className={`text-[10px] sm:text-xs font-medium ${
                          achievement.earned ? rarity.text : "text-muted-foreground"
                        }`}>{rarity.label}</span>
                        <span className={`text-[10px] sm:text-xs font-medium ${
                          achievement.earned ? "text-amber-600" : "text-muted-foreground"
                        }`}>+{achievement.xp} XP</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

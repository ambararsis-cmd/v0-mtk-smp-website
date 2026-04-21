"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrendingUp, ArrowLeft, Trophy, Target, Clock, BookOpen, CheckCircle2, Star, Award } from "lucide-react"
import Link from "next/link"

const progressByCategory = [
  { name: "Pengenalan Aljabar", progress: 75, color: "bg-[#2196f3]" },
  { name: "Persamaan Linear", progress: 50, color: "bg-[#ff9800]" },
  { name: "Aljabar & Faktorisasi", progress: 30, color: "bg-[#4caf50]" },
  { name: "Persamaan Kuadrat", progress: 10, color: "bg-[#f44336]" },
]

const weeklyActivity = [
  { day: "Sen", hours: 1.5 },
  { day: "Sel", hours: 2 },
  { day: "Rab", hours: 0.5 },
  { day: "Kam", hours: 1 },
  { day: "Jum", hours: 2.5 },
  { day: "Sab", hours: 3 },
  { day: "Min", hours: 1 },
]

const achievements = [
  { title: "Pemula Aljabar", description: "Selesaikan materi pertama", icon: Star, earned: true, color: "text-[#ff9800]" },
  { title: "Rajin Belajar", description: "Belajar 7 hari berturut-turut", icon: Trophy, earned: true, color: "text-[#4caf50]" },
  { title: "Quiz Master", description: "Dapatkan nilai 100% di kuis", icon: Award, earned: false, color: "text-muted-foreground" },
  { title: "Matematikawan", description: "Selesaikan semua materi", icon: Target, earned: false, color: "text-muted-foreground" },
]

const recentActivities = [
  { activity: "Menyelesaikan kuis Pengenalan Aljabar", time: "2 jam lalu", score: "90%" },
  { activity: "Menonton video Operasi Aljabar", time: "5 jam lalu", score: null },
  { activity: "Membaca materi Persamaan Linear", time: "1 hari lalu", score: null },
  { activity: "Menyelesaikan kuis Persamaan Linear", time: "1 hari lalu", score: "70%" },
  { activity: "Menonton video PLSV", time: "2 hari lalu", score: null },
]

export default function StatistikPage() {
  const maxHours = Math.max(...weeklyActivity.map(d => d.hours))
  const totalHours = weeklyActivity.reduce((sum, d) => sum + d.hours, 0)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#9c27b0] to-[#7b1fa2] py-12 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Link href="/" className="mb-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Beranda
            </Link>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-white/20 p-4">
                <TrendingUp className="h-10 w-10" />
              </div>
              <div>
                <h1 className="text-2xl font-bold md:text-3xl">Statistik Kemajuan</h1>
                <p className="mt-1 text-white/90">Pantau perkembangan belajarmu</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            {/* Overview Stats */}
            <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-lg bg-card p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2196f3]/10">
                    <BookOpen className="h-5 w-5 text-[#2196f3]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">41%</p>
                    <p className="text-xs text-muted-foreground">Total Progress</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-card p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4caf50]/10">
                    <CheckCircle2 className="h-5 w-5 text-[#4caf50]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">16</p>
                    <p className="text-xs text-muted-foreground">Soal Dikerjakan</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-card p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff9800]/10">
                    <Trophy className="h-5 w-5 text-[#ff9800]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">75%</p>
                    <p className="text-xs text-muted-foreground">Rata-rata Skor</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-card p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9c27b0]/10">
                    <Clock className="h-5 w-5 text-[#9c27b0]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{totalHours.toFixed(1)}</p>
                    <p className="text-xs text-muted-foreground">Jam Minggu Ini</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Progress by Category */}
                <div className="rounded-xl bg-card p-6 shadow-sm">
                  <h2 className="mb-6 text-lg font-bold text-foreground">Progress per Materi</h2>
                  <div className="space-y-5">
                    {progressByCategory.map((category) => (
                      <div key={category.name}>
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">{category.name}</span>
                          <span className="text-sm font-bold text-foreground">{category.progress}%</span>
                        </div>
                        <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
                          <div
                            className={`h-full ${category.color} transition-all duration-500`}
                            style={{ width: `${category.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Weekly Activity Chart */}
                <div className="rounded-xl bg-card p-6 shadow-sm">
                  <h2 className="mb-6 text-lg font-bold text-foreground">Aktivitas Mingguan</h2>
                  <div className="flex items-end justify-between gap-2" style={{ height: "150px" }}>
                    {weeklyActivity.map((day) => (
                      <div key={day.day} className="flex flex-1 flex-col items-center">
                        <div
                          className="mb-2 w-full rounded-t-md bg-gradient-to-t from-[#9c27b0] to-[#ba68c8] transition-all hover:from-[#7b1fa2] hover:to-[#9c27b0]"
                          style={{ height: `${(day.hours / maxHours) * 120}px` }}
                        />
                        <span className="text-xs font-medium text-muted-foreground">{day.day}</span>
                        <span className="text-xs text-muted-foreground">{day.hours}j</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="rounded-xl bg-card p-6 shadow-sm">
                  <h2 className="mb-6 text-lg font-bold text-foreground">Aktivitas Terbaru</h2>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-1 h-2 w-2 rounded-full bg-[#9c27b0]" />
                          <div>
                            <p className="text-sm font-medium text-foreground">{activity.activity}</p>
                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                          </div>
                        </div>
                        {activity.score && (
                          <span className="rounded bg-[#4caf50]/10 px-2 py-1 text-xs font-medium text-[#4caf50]">
                            {activity.score}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Achievements */}
                <div className="rounded-xl bg-card p-6 shadow-sm">
                  <h2 className="mb-4 text-lg font-bold text-foreground">Pencapaian</h2>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-3 rounded-lg p-3 ${achievement.earned ? "bg-[#ff9800]/10" : "bg-muted/50"}`}
                      >
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${achievement.earned ? "bg-[#ff9800]/20" : "bg-muted"}`}>
                          <achievement.icon className={`h-5 w-5 ${achievement.color}`} />
                        </div>
                        <div>
                          <p className={`text-sm font-medium ${achievement.earned ? "text-foreground" : "text-muted-foreground"}`}>
                            {achievement.title}
                          </p>
                          <p className="text-xs text-muted-foreground">{achievement.description}</p>
                        </div>
                        {achievement.earned && (
                          <CheckCircle2 className="ml-auto h-5 w-5 text-[#4caf50]" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learning Streak */}
                <div className="rounded-xl bg-gradient-to-br from-[#ff9800] to-[#f57c00] p-6 text-white shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                      <Trophy className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold">7</p>
                      <p className="text-sm text-white/90">Hari Berturut-turut</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/80">
                    Pertahankan streak belajarmu! Kamu sudah belajar 7 hari berturut-turut.
                  </p>
                </div>

                {/* Tips */}
                <div className="rounded-xl bg-gradient-to-r from-[#9c27b0]/10 to-[#7b1fa2]/10 p-4">
                  <h3 className="mb-2 font-semibold text-foreground">Rekomendasi</h3>
                  <p className="text-sm text-muted-foreground">
                    Berdasarkan progressmu, kami sarankan untuk fokus pada materi{" "}
                    <span className="font-medium text-[#f44336]">Persamaan Kuadrat</span> yang baru 10% dikerjakan.
                  </p>
                  <Link
                    href="/materi/persamaan-kuadrat"
                    className="mt-3 inline-block text-sm font-medium text-[#9c27b0] hover:underline"
                  >
                    Mulai Belajar &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

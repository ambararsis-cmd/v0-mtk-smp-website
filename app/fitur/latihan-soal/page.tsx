"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PenLine, ArrowLeft, Trophy, Target, Clock, CheckCircle2, XCircle, ChevronRight } from "lucide-react"
import Link from "next/link"

const quizCategories = [
  {
    id: 1,
    title: "Pengenalan Aljabar",
    kelas: "Kelas 7",
    description: "Variabel, Koefisien, Konstanta, Suku",
    color: "bg-[#2196f3]",
    totalSoal: 10,
    completed: 8,
    bestScore: 90,
    href: "/materi/pengenalan-aljabar?tab=latihan",
  },
  {
    id: 2,
    title: "Persamaan Linear",
    kelas: "Kelas 7/8",
    description: "PLSV, PLDV, Pertidaksamaan",
    color: "bg-[#ff9800]",
    totalSoal: 10,
    completed: 5,
    bestScore: 70,
    href: "/materi/persamaan-linear?tab=latihan",
  },
  {
    id: 3,
    title: "Aljabar & Faktorisasi",
    kelas: "Kelas 8",
    description: "Pemangkatan, Pembagian, Faktorisasi",
    color: "bg-[#4caf50]",
    totalSoal: 10,
    completed: 3,
    bestScore: 60,
    href: "/materi/aljabar-faktorisasi?tab=latihan",
  },
  {
    id: 4,
    title: "Persamaan Kuadrat",
    kelas: "Kelas 9",
    description: "Rumus ABC, Grafik Fungsi Kuadrat",
    color: "bg-[#f44336]",
    totalSoal: 10,
    completed: 0,
    bestScore: 0,
    href: "/materi/persamaan-kuadrat?tab=latihan",
  },
]

const recentAttempts = [
  { quiz: "Pengenalan Aljabar", score: 90, date: "Hari ini", status: "lulus" },
  { quiz: "Persamaan Linear", score: 70, date: "Kemarin", status: "lulus" },
  { quiz: "Aljabar & Faktorisasi", score: 60, date: "2 hari lalu", status: "perlu perbaikan" },
  { quiz: "Pengenalan Aljabar", score: 80, date: "3 hari lalu", status: "lulus" },
]

export default function LatihanSoalPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#4caf50] to-[#388e3c] py-12 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Link href="/" className="mb-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Beranda
            </Link>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-white/20 p-4">
                <PenLine className="h-10 w-10" />
              </div>
              <div>
                <h1 className="text-2xl font-bold md:text-3xl">Latihan Soal & Kuis</h1>
                <p className="mt-1 text-white/90">Uji pemahamanmu dengan berbagai latihan soal</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            {/* Stats */}
            <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-lg bg-card p-4 text-center shadow-sm">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#4caf50]/10">
                  <Target className="h-5 w-5 text-[#4caf50]" />
                </div>
                <p className="text-2xl font-bold text-foreground">40</p>
                <p className="text-sm text-muted-foreground">Total Soal</p>
              </div>
              <div className="rounded-lg bg-card p-4 text-center shadow-sm">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#2196f3]/10">
                  <CheckCircle2 className="h-5 w-5 text-[#2196f3]" />
                </div>
                <p className="text-2xl font-bold text-foreground">16</p>
                <p className="text-sm text-muted-foreground">Soal Dikerjakan</p>
              </div>
              <div className="rounded-lg bg-card p-4 text-center shadow-sm">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#ff9800]/10">
                  <Trophy className="h-5 w-5 text-[#ff9800]" />
                </div>
                <p className="text-2xl font-bold text-foreground">75%</p>
                <p className="text-sm text-muted-foreground">Rata-rata Skor</p>
              </div>
              <div className="rounded-lg bg-card p-4 text-center shadow-sm">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#f44336]/10">
                  <Clock className="h-5 w-5 text-[#f44336]" />
                </div>
                <p className="text-2xl font-bold text-foreground">4</p>
                <p className="text-sm text-muted-foreground">Kuis Tersedia</p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Quiz Categories */}
              <div className="lg:col-span-2">
                <h2 className="mb-6 text-xl font-bold text-foreground">Pilih Kategori Latihan</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {quizCategories.map((quiz) => (
                    <Link
                      key={quiz.id}
                      href={quiz.href}
                      className="group rounded-xl bg-card p-5 shadow-sm transition-all hover:shadow-md"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <span className={`rounded px-2 py-1 text-xs font-medium text-white ${quiz.color}`}>
                          {quiz.kelas}
                        </span>
                        {quiz.bestScore > 0 && (
                          <span className="flex items-center gap-1 text-xs text-[#ff9800]">
                            <Trophy className="h-3 w-3" />
                            Best: {quiz.bestScore}%
                          </span>
                        )}
                      </div>
                      <h3 className="mb-1 font-semibold text-foreground group-hover:text-primary">
                        {quiz.title}
                      </h3>
                      <p className="mb-3 text-sm text-muted-foreground">{quiz.description}</p>
                      
                      {/* Progress */}
                      <div className="mb-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">
                            {quiz.completed}/{quiz.totalSoal} soal dikerjakan
                          </span>
                          <span className="font-medium text-foreground">
                            {Math.round((quiz.completed / quiz.totalSoal) * 100)}%
                          </span>
                        </div>
                        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-muted">
                          <div
                            className={`h-full ${quiz.color} transition-all`}
                            style={{ width: `${(quiz.completed / quiz.totalSoal) * 100}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{quiz.totalSoal} soal</span>
                        <span className="flex items-center gap-1 text-sm font-medium text-primary">
                          Mulai Latihan
                          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Recent Attempts */}
              <div>
                <h2 className="mb-6 text-xl font-bold text-foreground">Riwayat Terbaru</h2>
                <div className="rounded-xl bg-card p-4 shadow-sm">
                  <div className="space-y-4">
                    {recentAttempts.map((attempt, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
                      >
                        <div>
                          <p className="font-medium text-foreground">{attempt.quiz}</p>
                          <p className="text-xs text-muted-foreground">{attempt.date}</p>
                        </div>
                        <div className="text-right">
                          <p className={`text-lg font-bold ${attempt.score >= 70 ? "text-[#4caf50]" : "text-[#ff9800]"}`}>
                            {attempt.score}%
                          </p>
                          <p className={`text-xs ${attempt.status === "lulus" ? "text-[#4caf50]" : "text-[#ff9800]"}`}>
                            {attempt.status === "lulus" ? (
                              <span className="flex items-center gap-1">
                                <CheckCircle2 className="h-3 w-3" />
                                Lulus
                              </span>
                            ) : (
                              <span className="flex items-center gap-1">
                                <XCircle className="h-3 w-3" />
                                Perlu Perbaikan
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tips */}
                <div className="mt-6 rounded-xl bg-gradient-to-r from-[#4caf50]/10 to-[#388e3c]/10 p-4">
                  <h3 className="mb-2 font-semibold text-foreground">Tips Mengerjakan Kuis</h3>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#4caf50]" />
                      Baca soal dengan teliti sebelum menjawab
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#4caf50]" />
                      Kerjakan soal yang mudah terlebih dahulu
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#4caf50]" />
                      Periksa kembali jawaban sebelum submit
                    </li>
                  </ul>
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

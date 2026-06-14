"use client"

import { useState, useRef } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { RotateCw, Volume2, Home } from "lucide-react"
import Link from "next/link"

interface Question {
  id: number
  text: string
  options: string[]
  correctAnswer: number
  segment: number
}

const questions: Question[] = [
  {
    id: 1,
    text: "Jika x = 3, maka nilai dari 2x + 5 adalah...",
    options: ["8", "10", "11", "12"],
    correctAnswer: 2,
    segment: 0,
  },
  {
    id: 2,
    text: "Sederhanakan 3x + 2x - x",
    options: ["4x", "5x", "3x", "6x"],
    correctAnswer: 1,
    segment: 1,
  },
  {
    id: 3,
    text: "Hasil dari (2x + 3)(x - 1) adalah...",
    options: ["2x² + x - 3", "2x² + 5x - 3", "2x² - x + 3", "2x² + 3x - 1"],
    correctAnswer: 0,
    segment: 2,
  },
  {
    id: 4,
    text: "Jika 3x - 7 = 5, maka x = ...",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2,
    segment: 3,
  },
  {
    id: 5,
    text: "Faktor dari x² - 4 adalah...",
    options: ["(x - 2)(x - 2)", "(x + 2)(x - 2)", "(x + 2)(x + 2)", "(x - 4)(x + 1)"],
    correctAnswer: 1,
    segment: 4,
  },
  {
    id: 6,
    text: "Jika y = 2x + 1 dan x = 5, maka y = ...",
    options: ["10", "11", "12", "13"],
    correctAnswer: 1,
    segment: 5,
  },
  {
    id: 7,
    text: "Bentuk sederhana dari 4x² + 2x² adalah...",
    options: ["6x", "6x²", "8x²", "8x"],
    correctAnswer: 2,
    segment: 6,
  },
  {
    id: 8,
    text: "Penyelesaian dari 2x + 3 = 9 adalah...",
    options: ["x = 2", "x = 3", "x = 4", "x = 5"],
    correctAnswer: 1,
    segment: 7,
  },
]

const SEGMENT_COLORS = [
  "#2196F3",
  "#FF9800",
  "#4CAF50",
  "#F44336",
  "#9C27B0",
  "#00BCD4",
  "#FFEB3B",
  "#795548",
]

export default function RodaBerputarGame() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [currentSegment, setCurrentSegment] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(questions[0])
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const wheelRef = useRef<HTMLDivElement>(null)

  const handleSpin = () => {
    if (isSpinning || selectedAnswer !== null) return

    setIsSpinning(true)
    setShowResult(false)
    setSelectedAnswer(null)

    const randomSegment = Math.floor(Math.random() * questions.length)
    const rotations = 5 + randomSegment / questions.length
    const angle = rotations * 360

    if (wheelRef.current) {
      wheelRef.current.style.transition = "transform 3s ease-out"
      wheelRef.current.style.transform = `rotate(${angle}deg)`
    }

    setTimeout(() => {
      setCurrentSegment(randomSegment)
      setCurrentQuestion(questions[randomSegment])
      setIsSpinning(false)
    }, 3000)
  }

  const handleAnswerSelect = (optionIndex: number) => {
    if (selectedAnswer !== null) return

    setSelectedAnswer(optionIndex)
    setShowResult(true)
    setTotalAnswered(totalAnswered + 1)

    if (optionIndex === currentQuestion?.correctAnswer) {
      setScore(score + 10)
    }
  }

  const handleNext = () => {
    setSelectedAnswer(null)
    setShowResult(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />

      <main className="flex-1 py-6 sm:py-8">
        <div className="mx-auto max-w-4xl px-3 sm:px-4 lg:px-8">
          {/* Header Stats */}
          <div className="mb-6 sm:mb-8 flex items-center justify-between rounded-xl bg-white p-4 sm:p-6 shadow-sm">
            <div className="text-center flex-1">
              <p className="text-xs sm:text-sm text-muted-foreground">Skor</p>
              <p className="text-xl sm:text-2xl font-bold text-primary">{score}</p>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="text-center flex-1">
              <p className="text-xs sm:text-sm text-muted-foreground">Terjawab</p>
              <p className="text-xl sm:text-2xl font-bold text-foreground">{totalAnswered}/{questions.length}</p>
            </div>
          </div>

          {/* Spinning Wheel */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Pointer */}
              <div className="absolute top-0 left-1/2 z-10 -translate-x-1/2 -translate-y-2">
                <div className="w-0 h-0 border-l-4 sm:border-l-6 border-r-4 sm:border-r-6 border-t-6 sm:border-t-8 border-l-transparent border-r-transparent border-t-primary"></div>
              </div>

              {/* Wheel */}
              <div
                ref={wheelRef}
                className="relative w-full aspect-square rounded-full border-4 sm:border-8 border-primary shadow-lg"
                style={{
                  background: `conic-gradient(${SEGMENT_COLORS.map((color, i) => `${color} ${(i / questions.length) * 100}% ${((i + 1) / questions.length) * 100}%`).join(", ")})`,
                  transition: "transform 0.3s ease-out",
                }}
              >
                {/* Center Circle */}
                <div className="absolute inset-1/2 w-16 sm:w-20 h-16 sm:h-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-[10px] sm:text-xs text-muted-foreground">No.</p>
                    <p className="text-lg sm:text-2xl font-bold text-primary">{currentSegment + 1}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spin Button */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <Button
              onClick={handleSpin}
              disabled={isSpinning}
              size="lg"
              className="rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
            >
              <RotateCw className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
              {isSpinning ? "Berputar..." : "Putar"}
            </Button>
          </div>

          {/* Question Section */}
          {currentQuestion && (
            <div className="rounded-xl bg-white p-4 sm:p-6 shadow-sm">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">Soal {currentQuestion.id}:</h3>
                <p className="text-sm sm:text-base text-foreground font-medium">{currentQuestion.text}</p>
              </div>

              {/* Answer Options */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full rounded-lg p-3 sm:p-4 text-left text-sm sm:text-base font-medium transition-all ${
                      selectedAnswer === null
                        ? "bg-slate-100 text-foreground hover:bg-slate-200 active:scale-95"
                        : selectedAnswer === index
                        ? index === currentQuestion.correctAnswer
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                        : index === currentQuestion.correctAnswer
                        ? "bg-green-500 text-white"
                        : "bg-slate-100 text-foreground opacity-50"
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border-2 ${
                        selectedAnswer === null
                          ? "border-slate-300"
                          : selectedAnswer === index
                          ? "border-current"
                          : "border-slate-300"
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Result Message */}
              {showResult && (
                <div className={`mb-4 sm:mb-6 rounded-lg p-3 sm:p-4 ${
                  selectedAnswer === currentQuestion.correctAnswer
                    ? "bg-green-50 border border-green-200 text-green-800"
                    : "bg-red-50 border border-red-200 text-red-800"
                }`}>
                  <p className="text-xs sm:text-sm font-medium">
                    {selectedAnswer === currentQuestion.correctAnswer
                      ? "✓ Jawaban Benar! +10 poin"
                      : `✗ Jawaban Salah. Jawaban yang benar adalah: ${currentQuestion.options[currentQuestion.correctAnswer]}`}
                  </p>
                </div>
              )}

              {/* Next Button */}
              {showResult && (
                <Button
                  onClick={handleNext}
                  variant="outline"
                  className="w-full"
                >
                  Soal Berikutnya
                </Button>
              )}
            </div>
          )}

          {/* Home Button */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <Link href="/">
              <Button variant="outline" size="sm">
                <Home className="mr-2 h-4 w-4" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

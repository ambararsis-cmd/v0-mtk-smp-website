'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ChevronLeft, Check, X } from 'lucide-react'
import Link from 'next/link'

interface Question {
  id: number
  question: string
  options: string[]
  correct: number
  category: string
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: 'Sederhanakan: 3x + 2x = ?',
    options: ['5x', '6x', 'x', '2x'],
    correct: 0,
    category: 'Pengenalan Aljabar',
  },
  {
    id: 2,
    question: 'Hasil dari 4a + 5 - 2a - 3 = ?',
    options: ['2a + 2', '2a - 2', '6a + 2', '2a + 8'],
    correct: 0,
    category: 'Pengenalan Aljabar',
  },
  {
    id: 3,
    question: 'Jika x + 5 = 12, maka x = ?',
    options: ['7', '17', '6', '8'],
    correct: 0,
    category: 'Persamaan Linear',
  },
  {
    id: 4,
    question: 'Tentukan nilai x: 2x - 3 = 7',
    options: ['5', '4', '3', '2'],
    correct: 0,
    category: 'Persamaan Linear',
  },
  {
    id: 5,
    question: 'Hasil dari 5(2a + 3) = ?',
    options: ['10a + 15', '7a + 8', '10a + 3', '5a + 15'],
    correct: 0,
    category: 'Pengenalan Aljabar',
  },
  {
    id: 6,
    question: 'Sederhanakan: 8b - 3b + 2b = ?',
    options: ['7b', '13b', '5b', '3b'],
    correct: 0,
    category: 'Pengenalan Aljabar',
  },
  {
    id: 7,
    question: 'Jika 3y = 21, maka y = ?',
    options: ['7', '24', '18', '6'],
    correct: 0,
    category: 'Persamaan Linear',
  },
  {
    id: 8,
    question: 'Hasil dari 2(3x - 1) + 4 = ?',
    options: ['6x + 2', '5x + 3', '3x + 1', '6x - 2'],
    correct: 0,
    category: 'Persamaan Linear',
  },
]

export default function KuisAljabarPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [quizFinished, setQuizFinished] = useState(false)
  const [answeredCount, setAnsweredCount] = useState(0)

  const question = quizQuestions[currentQuestion]
  const isCorrect = selectedAnswer === question.correct

  const handleAnswerClick = (index: number) => {
    if (!answered) {
      setSelectedAnswer(index)
      setAnswered(true)
      if (index === question.correct) {
        setScore(score + 10)
      }
      setAnsweredCount(answeredCount + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setAnswered(false)
    } else {
      setQuizFinished(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setScore(0)
    setAnswered(false)
    setSelectedAnswer(null)
    setQuizFinished(false)
    setAnsweredCount(0)
  }

  if (quizFinished) {
    const percentage = Math.round((score / (quizQuestions.length * 10)) * 100)
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
          <div className="mx-auto max-w-2xl px-3 sm:px-4 py-8 sm:py-12 lg:px-8">
            <div className="rounded-xl bg-card p-6 sm:p-8 text-center shadow-lg">
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Hasil Kuis Selesai!</h1>
              <div className="mb-6 sm:mb-8">
                <div className="mb-4 text-5xl sm:text-6xl font-bold text-primary">{percentage}%</div>
                <p className="text-lg sm:text-xl text-muted-foreground mb-2">
                  Skor: {score} dari {quizQuestions.length * 10} poin
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {answeredCount} dari {quizQuestions.length} soal dijawab dengan benar
                </p>
              </div>
              <div className="mb-6 sm:mb-8">
                {percentage >= 80 ? (
                  <p className="text-lg font-semibold text-green-600">Luar Biasa! Kamu Hebat!</p>
                ) : percentage >= 60 ? (
                  <p className="text-lg font-semibold text-blue-600">Bagus! Terus belajar!</p>
                ) : (
                  <p className="text-lg font-semibold text-orange-600">Perlu belajar lebih lagi!</p>
                )}
              </div>
              <div className="flex gap-3 flex-col sm:flex-row">
                <Button onClick={handleRestart} className="flex-1 bg-primary hover:bg-primary/90 text-white">
                  Ulangi Kuis
                </Button>
                <Link href="/" className="flex-1">
                  <Button variant="outline" className="w-full">
                    Kembali ke Beranda
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-3 sm:px-4 py-6 sm:py-8 lg:px-8">
          {/* Header dengan progress */}
          <div className="mb-6 sm:mb-8">
            <div className="mb-4 flex items-center justify-between">
              <Link href="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ChevronLeft className="h-4 w-4" />
                  Kembali
                </Button>
              </Link>
              <span className="text-sm sm:text-base font-semibold text-muted-foreground">
                Soal {currentQuestion + 1} dari {quizQuestions.length}
              </span>
            </div>
            {/* Progress bar */}
            <div className="h-2 sm:h-2.5 w-full bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{
                  width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Soal dan pilihan jawaban */}
          <div className="rounded-xl bg-card p-5 sm:p-6 shadow-lg">
            {/* Kategori dan Skor */}
            <div className="mb-4 sm:mb-6 flex items-center justify-between">
              <span className="inline-block rounded-full bg-primary/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold text-primary">
                {question.category}
              </span>
              <span className="text-sm sm:text-base font-semibold text-muted-foreground">
                Skor: <span className="text-primary">{score}</span>
              </span>
            </div>

            {/* Pertanyaan */}
            <h2 className="mb-6 sm:mb-8 text-lg sm:text-xl font-bold text-foreground">
              {question.question}
            </h2>

            {/* Pilihan Jawaban */}
            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index
                const isAnswerRevealed = answered
                const isCorrectOption = index === question.correct
                let buttonStyle =
                  'bg-muted hover:bg-muted/80 text-foreground'

                if (isAnswerRevealed) {
                  if (isCorrectOption) {
                    buttonStyle = 'bg-green-100 border-2 border-green-500 text-foreground'
                  } else if (isSelected && !isCorrect) {
                    buttonStyle = 'bg-red-100 border-2 border-red-500 text-foreground'
                  }
                } else if (isSelected) {
                  buttonStyle = 'bg-primary text-primary-foreground'
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    disabled={answered}
                    className={`w-full flex items-center gap-3 p-3 sm:p-4 rounded-lg transition-all text-left ${buttonStyle} ${
                      answered ? 'cursor-default' : 'cursor-pointer'
                    } ${isSelected ? 'ring-2 ring-offset-2 ring-primary' : ''}`}
                  >
                    <span className="flex h-6 w-6 sm:h-7 sm:w-7 flex-shrink-0 items-center justify-center rounded-full border-2 border-current text-xs sm:text-sm font-bold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1 text-sm sm:text-base">{option}</span>
                    {isAnswerRevealed && isCorrectOption && (
                      <Check className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 text-green-600" />
                    )}
                    {isAnswerRevealed && isSelected && !isCorrect && (
                      <X className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 text-red-600" />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Feedback dan tombol next */}
            {answered && (
              <div
                className={`mb-6 p-3 sm:p-4 rounded-lg ${
                  isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
              >
                <p className="font-semibold text-sm sm:text-base">
                  {isCorrect ? 'Jawaban Benar! +10 poin' : 'Jawaban Salah'}
                </p>
                {!isCorrect && (
                  <p className="mt-1 text-xs sm:text-sm">
                    Jawaban yang benar adalah: <span className="font-bold">{question.options[question.correct]}</span>
                  </p>
                )}
              </div>
            )}

            {/* Tombol Next */}
            {answered && (
              <Button
                onClick={handleNext}
                className="w-full bg-primary hover:bg-primary/90 text-white text-sm sm:text-base"
              >
                {currentQuestion === quizQuestions.length - 1 ? 'Selesai' : 'Soal Berikutnya'}
              </Button>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

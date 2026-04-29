"use client"

import { Shield, Bug, Zap, CheckCircle, Globe, ChevronLeft, ChevronRight, ChevronsUpDown } from "lucide-react"
import { useState } from "react"

export function YaeMikoDashboard() {
  const [targetNumber, setTargetNumber] = useState("62xxxxxxxxxx")
  const [currentBugIndex, setCurrentBugIndex] = useState(0)

  const bugs = [
    { name: "DELAY INVISIBLE", code: "delayLow" },
    { name: "CRASH SYSTEM", code: "crashHigh" },
    { name: "BYPASS SHIELD", code: "bypassMed" },
    { name: "INFINITE LOOP", code: "loopMax" },
    { name: "GHOST MODE", code: "ghostPro" },
    { name: "SPEED HACK", code: "speedX2" },
    { name: "AUTO AIM", code: "aimBot" },
  ]

  const nextBug = () => {
    setCurrentBugIndex((prev) => (prev + 1) % bugs.length)
  }

  const prevBug = () => {
    setCurrentBugIndex((prev) => (prev - 1 + bugs.length) % bugs.length)
  }

  return (
    <div className="min-h-screen bg-[#0a1628] bokeh-bg font-[var(--font-orbitron)]">
      <div className="relative z-10 flex flex-col min-h-screen max-w-md mx-auto px-4 py-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <button className="w-10 h-10 rounded-full bg-[#1a2a40] border border-cyan-500/30 flex items-center justify-center glow-cyan">
            <Shield className="w-5 h-5 text-cyan-400" />
          </button>
          
          <h1 className="text-sm font-bold tracking-wider text-white text-glow-cyan">
            Yae Miko MENU BUG v3.0
          </h1>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-pink-400/50 glow-red">
              <div className="w-full h-full bg-gradient-to-br from-pink-400 via-purple-500 to-pink-600 flex items-center justify-center">
                <span className="text-[8px] font-bold text-white">YM</span>
              </div>
            </div>
            <span className="text-xs text-pink-300 font-medium">Yae Miko</span>
          </div>
        </header>

        {/* Profile Card */}
        <div className="glass-card rounded-2xl p-5 mb-4">
          {/* Avatar Section */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 via-red-700 to-red-900 border-2 border-red-500/50 flex items-center justify-center glow-red mb-2">
              <div className="text-3xl">👹</div>
            </div>
            <span className="text-xs font-bold text-red-400 tracking-widest uppercase text-glow-red">
              FREE BUG
            </span>
          </div>

          {/* Stats Row */}
          <div className="flex justify-around">
            <StatItem 
              icon={<Bug className="w-5 h-5" />}
              value="7"
              label="Total Bugs"
              color="cyan"
            />
            <StatItem 
              icon={<Zap className="w-5 h-5" />}
              value="GACOR"
              label="Success Rate"
              color="green"
            />
            <StatItem 
              icon={<CheckCircle className="w-5 h-5" />}
              value="ACTIVE"
              label="Status"
              color="green"
            />
          </div>
        </div>

        {/* Action Section */}
        <div className="glass-card rounded-2xl p-5 mb-4 flex-1">
          {/* Target Input */}
          <div className="mb-5">
            <label className="flex items-center gap-2 text-xs font-bold text-cyan-400 mb-2 tracking-wider">
              <Globe className="w-4 h-4" />
              NOMOR TARGET
            </label>
            <input
              type="text"
              value={targetNumber}
              onChange={(e) => setTargetNumber(e.target.value)}
              className="w-full bg-[#0d1a2d] border border-cyan-500/30 rounded-xl px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
              placeholder="62xxxxxxxxxx"
            />
          </div>

          {/* Bug Selection Card */}
          <div className="relative">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 mb-3 tracking-wider">
              <Bug className="w-4 h-4" />
              PiLiH BUG
            </div>
            
            <div className="relative flex items-stretch">
              {/* Left Pillar */}
              <div className="w-2 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600 rounded-l-sm" />
              
              {/* Main Card */}
              <div className="flex-1 bg-gradient-to-br from-[#1a2a45] to-[#0f1a2d] border-y border-cyan-500/20 py-6 px-4">
                <div className="flex items-center justify-between">
                  <button 
                    onClick={prevBug}
                    className="w-8 h-8 rounded-full bg-[#0d1a2d] border border-cyan-500/30 flex items-center justify-center hover:bg-cyan-500/10 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4 text-cyan-400" />
                  </button>
                  
                  <div className="text-center flex-1 px-4">
                    <div className="text-lg font-bold text-white tracking-wider mb-1 text-glow-cyan">
                      {bugs[currentBugIndex].name}
                    </div>
                    <div className="text-xs text-cyan-400/70 font-mono">
                      {bugs[currentBugIndex].code}
                    </div>
                  </div>
                  
                  <button 
                    onClick={nextBug}
                    className="w-8 h-8 rounded-full bg-[#0d1a2d] border border-cyan-500/30 flex items-center justify-center hover:bg-cyan-500/10 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-cyan-400" />
                  </button>
                </div>
              </div>
              
              {/* Right Pillar */}
              <div className="w-2 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600 rounded-r-sm" />
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {bugs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBugIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentBugIndex 
                      ? "bg-cyan-400 glow-cyan" 
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="glass-card rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ChevronsUpDown className="w-5 h-5 text-cyan-400" />
              <span className="text-xs font-bold text-cyan-400 tracking-wider">
                PiLiH SENDER
              </span>
            </div>
            
            <div className="flex items-center gap-2 bg-[#0d1a2d] rounded-full px-3 py-1.5 border border-green-500/30">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
              <span className="text-xs text-green-400 font-mono">
                67 sender online
              </span>
            </div>
          </div>
        </div>

        {/* Free Bug Limit */}
        <div className="mt-4 text-center">
          <span className="text-xs text-yellow-400/80 font-mono tracking-wider">
            limit free bug hari ini <span className="text-yellow-300 font-bold">5/5</span>
          </span>
        </div>
      </div>
    </div>
  )
}

function StatItem({ 
  icon, 
  value, 
  label, 
  color 
}: { 
  icon: React.ReactNode
  value: string
  label: string
  color: "cyan" | "green" | "red"
}) {
  const colorClasses = {
    cyan: {
      bg: "bg-cyan-500/20",
      border: "border-cyan-500/30",
      text: "text-cyan-400",
      glow: "glow-cyan"
    },
    green: {
      bg: "bg-green-500/20",
      border: "border-green-500/30",
      text: "text-green-400",
      glow: "glow-green"
    },
    red: {
      bg: "bg-red-500/20",
      border: "border-red-500/30",
      text: "text-red-400",
      glow: "glow-red"
    }
  }

  const classes = colorClasses[color]

  return (
    <div className="flex flex-col items-center">
      <div className={`w-12 h-12 rounded-full ${classes.bg} border ${classes.border} flex items-center justify-center ${classes.glow} mb-2`}>
        <div className={classes.text}>{icon}</div>
      </div>
      <div className={`text-sm font-bold ${classes.text} mb-0.5`}>{value}</div>
      <div className="text-[10px] text-gray-400 uppercase tracking-wider">{label}</div>
    </div>
  )
}

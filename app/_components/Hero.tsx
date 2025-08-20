'use client'
import React from 'react'
import Image from 'next/image'

const LandingPage = () => {
  return (
    <main className="bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Collaborate. Create. <span className="text-teal-400">Anywhere.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-lg">
              A modern workspace for brainstorming, planning, and bringing your ideas to life — all in one place.
              Built for teams, creators, and dreamers.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="px-6 py-3 rounded-md bg-teal-500 hover:bg-teal-600 hover:shadow-[0_0_15px_rgba(20,184,166,0.6)] text-sm font-medium transition-all duration-300"
              >
                Get Started Free
              </a>
              <a
                href="#"
                className="px-6 py-3 rounded-md bg-neutral-900 hover:bg-neutral-800 text-sm font-medium transition-all duration-300"
              >
                Watch Demo
              </a>
            </div>

            <p className="text-sm text-gray-500">
              No credit card required. Cancel anytime.
            </p>
          </div>

          {/* Image / Screenshot */}
          <div className="relative animate-fade-in-up delay-200">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-900 transform transition-transform duration-500 hover:scale-105">
              <Image
                src="/hero.png"
                alt="App Screenshot"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-600 rounded-full blur-3xl opacity-30"></div>
          </div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: 'Real-time Collaboration',
              desc: 'Work together seamlessly with live updates, shared boards, and instant feedback.',
            },
            {
              title: 'Intuitive Interface',
              desc: 'Clean, minimal, and distraction-free design so you can focus on ideas.',
            },
            {
              title: 'Cloud Synced',
              desc: 'Access your work anywhere, anytime, on any device — securely stored in the cloud.',
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-neutral-900 p-6 rounded-xl shadow-lg border border-neutral-800 hover:border-teal-500 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-neutral-950 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Loved by Teams Worldwide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah L.',
                quote: 'This tool has completely changed the way my team works. We are more organized and creative!',
              },
              {
                name: 'Mark R.',
                quote: 'The interface is so clean and easy to use. I can’t imagine planning without it now.',
              },
              {
                name: 'Ananya P.',
                quote: 'Perfect for remote collaboration. It feels like we’re all in the same room!',
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="bg-neutral-900 p-6 rounded-xl shadow-lg border border-neutral-800 hover:border-teal-500 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <p className="text-gray-300 mb-4">"{t.quote}"</p>
                <p className="text-teal-400 font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 text-center animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-6">Ready to bring your ideas to life?</h2>
        <p className="text-gray-400 mb-8">Join thousands of creators using our platform to collaborate smarter.</p>
        <a
          href="#"
          className="px-8 py-4 bg-teal-500 hover:bg-teal-600 hover:shadow-[0_0_20px_rgba(20,184,166,0.6)] rounded-lg text-lg font-semibold transition-all duration-300"
        >
          Get Started Now
        </a>
      </section>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </main>
  )
}

export default LandingPage

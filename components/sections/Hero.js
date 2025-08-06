import React, { useState } from 'react'

export default function Hero() {
    const [email, setEmail] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email) {
            setIsSubmitted(true)
            // Reset after 3 seconds
            setTimeout(() => {
                setIsSubmitted(false)
                setEmail('')
            }, 3000)
        }
    }

    return (
        <div className='min-h-[90vh] bg-black flex mt-[10vh] md:mt-[20vh] justify-center px-4 sm:px-6 lg:px-8'>
            <div className='max-w-8xl mx-auto text-center'>
                {/* Main Heading */}
                <h1 className='text-5xl md:text-8xl  font-bold text-white mb-6 sm:mb-8 lg:mb-12 leading-tight'>
                    The World Of{' '}
                    <span className='text-[#DFF247] inline-block hover:scale-105 transition-transform duration-300'>
                        Game Play
                    </span>
                </h1>

                {/* Subtitle */}
                <p className='text-gray-400 text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-16 leading-relaxed px-4'>
                    Welcome to the world of rare game assets — explore top-tier 
                    creations from world-class creators and uncover hidden gems 
                    for your next game.
                </p>

                {/* Email Signup Form */}
                <div className='max-w-2xl mx-auto'>
                    <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-4 sm:gap-0'>
                        <div className='flex-1 relative'>
                            <input
                                type='email'
                                placeholder='Email Address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='w-full px-6 py-4 sm:py-5 text-lg bg-transparent border-2 border-[#DFF247]/40 rounded-full sm:rounded-l-full sm:rounded-r-none text-white placeholder-gray-400 focus:outline-none focus:border-[#DFF247] focus:bg-[#DFF247]/5 transition-all duration-300'
                                required
                            />
                        </div>
                        <button
                            type='submit'
                            disabled={isSubmitted}
                            className={`px-8 py-4 sm:py-5 text-lg font-bold rounded-3xl sm:rounded-l-none sm:rounded-r-3xl transition-all duration-300 ${
                                isSubmitted 
                                    ? 'bg-green-500 text-white scale-105' 
                                    : 'bg-[#DFF247] text-black hover:bg-[#B8E000] hover:scale-105'
                            } shadow-xl shadow-[#DFF247]/30 hover:shadow-[#DFF247]/50`}
                        >
                            {isSubmitted ? '✓ Submitted!' : 'Submit'}
                        </button>
                    </form>
                    
                    <p className='text-gray-500 text-sm sm:text-base mt-4 sm:mt-6'>
                        Join Our Mailing List
                    </p>
                </div>

                </div>
        </div>
    )
}
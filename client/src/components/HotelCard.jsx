import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const HotelCard = ({room, index}) => {
    const cardRef = useRef(null)
    const [isHover, setIsHover] = useState(false)
    const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)')

    const colors = [
        '255,0,128',
        '0,255,200',
        '0,120,255',
        '180,0,255',
        '255,180,0',
    ]
    const color = colors[index % colors.length]

    const handleMouseMove = (e) => {
        const el = cardRef.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const px = (x / rect.width) - 0.5
        const py = (y / rect.height) - 0.5
        const rotateX = (-py) * 8
        const rotateY = (px) * 8
        setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`)
    }

    const handleMouseLeave = () => {
        setIsHover(false)
        setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)')
    }

    const handleMouseEnter = () => setIsHover(true)

    const boxShadow = isHover
        ? `0 10px 30px rgba(${color},0.18), 0 0 40px rgba(${color},0.12), 0 0 80px rgba(${color},0.08)`
        : '0px 4px 4px rgba(0,0,0,0.05)'

    const glowStyle = {
        background: `radial-gradient(closest-side, rgba(${color},0.22), transparent 40%)`,
        filter: 'blur(40px)',
    }

    return (
        <Link
            to={'/rooms/' + room._id}
            onClick={() => scrollTo(0,0)}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className='relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 transition-transform duration-300'
            style={{ transform: transformStyle, boxShadow }}
        >
            <span aria-hidden className='absolute inset-0 -m-1 rounded-xl pointer-events-none transition-opacity duration-500' style={{ ...glowStyle, opacity: isHover ? 1 : 0 }} />

            <div className='relative z-10'>
                <img src={room.images[0]} alt="" className='w-full block transition-transform duration-700 will-change-transform' style={{ transform: isHover ? 'scale(1.08)' : 'scale(1)' }} />

                {index %2===0 && <p className='px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full'>Best Seller</p>}

                <div className='p-4 pt-5'>
                        <div className='flex items-center justify-between'>
                                <p className='font-playfair text-xl font-medium text-gray-800'>{room.hotel.name}</p>
                                <div className='flex items-center gap-1'>
                                        <img src={assets.starIconFilled} alt="star-icon" /> 4.5
                                </div>
                        </div>
                        <div className='flex item-center gap-1 text-sm'>
                                <img src={assets.locationIcon} alt="location-icon" />
                                <span>{room.hotel.address}</span>
                        </div>
                        <div className='flex items-center justify-between mt-4'>
                                <p><span className='text-xl text-gray-800'>₹{room.pricePerNight}</span>/night</p>
                                <button className='px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer'>Book Now</button>
                        </div>
                </div>
            </div>
        </Link>
    )
}

export default HotelCard
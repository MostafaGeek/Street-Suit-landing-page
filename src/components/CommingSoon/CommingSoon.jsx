import React from 'react'
import './CommingSoon.css'

const CommingSoon = () => {
  return (
    <section className='commingSoon'>
        <h3 className='section-title'>COMING SOON</h3>

        <div className='lg:container mx-auto px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-6 commingSoon-container'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo
            </p>

            <div className="expanding-box grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-6">
                <div className="item">
                    <h6>Feb 20</h6>
                    <p>Expanding the trading feature to cover stocks, indices, commodities, futures and currency pairs</p>
                </div>
                <div className="item">
                    <h6>Feb 20</h6>
                    <p>Expanding the trading feature to cover stocks, indices, commodities, futures and currency pairs</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CommingSoon

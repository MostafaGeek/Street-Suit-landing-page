import React from 'react'
import "./AlertsSection.css"
import RealTimeWhite from '../../assets/realtime1.png'
import RealTimeAnim1 from '../../assets/realtime2.png'
import RealTimeAnim2 from '../../assets/realtime3.png'

import filterWhite from '../../assets/filter1.png'
import filterAnim1 from '../../assets/filter2.png'
import filterAnim2 from '../../assets/filter3.png'

import specialWhite from '../../assets/special1.png'
import specialAnim1 from '../../assets/special2.png'
import specialAnim2 from '../../assets/special3.png'

import scannerWhite from '../../assets/scanner1.png'
import scannerAnim1 from '../../assets/scanner2.png'
import scannerAnim2 from '../../assets/scanner3.png'


const AlertsSection = () => {
  return (
    <section className='alerts'>
      <h3 className='section-title'>Alerts</h3>

      <div className="md:container mx-auto px-4 grid  md:grid-cols-2 grid-cols-1 gap-6 gap-y-6 alerts-container columns-8">
        <div className="alert-card">
            <div className="animat-text realtime">
              <img src={RealTimeWhite} alt="" />
              <img src={RealTimeAnim1} alt="" />
              <img src={RealTimeAnim2} alt="" />
            </div>
            <div className="content">
                <p>Updates every 10 Secs <br /> Phone or PC Notifications</p>
            </div>
        </div>
        <div className="alert-card">
            <div className="animat-text filter">
              <img src={filterWhite} alt="" />
              <img src={filterAnim1} alt="" />
              <img src={filterAnim2} alt="" />
            </div>
            <div className="content">
                <p>High Risk Alerts <br /> Low Risk Alerts</p>
            </div>
        </div>
        <div className="alert-card">
            <div className="animat-text special">
              <img src={specialWhite} alt="" />
              <img src={specialAnim1} alt="" />
              <img src={specialAnim2} alt="" />
            </div>
            <div className="content">
                <p>Updates every 10 Secs <br /> Phone or PC Notifications</p>
            </div>
        </div>
        <div className="alert-card">
            <div className="animat-text scanner">
              <img src={scannerWhite} alt="" />
              <img src={scannerAnim1} alt="" />
              <img src={scannerAnim2} alt="" />
            </div>
            <div className="content">
                <p>Updates every 10 Secs <br /> Phone or PC Notifications</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AlertsSection

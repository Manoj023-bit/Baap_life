import React from 'react';
import './Health.css';
import { useTranslation } from 'react-i18next';
import { withTranslation } from 'react-i18next';
import ScrollToTop from '../ScrollToTop';
const Health = () => {
  const { t } = useTranslation();

  return (
    <>
    <ScrollToTop/>
      <div className='Health-bg-color'>
        <div className="health-center">
          <div className="header-health-main">
          </div>
        </div>

        <div className="container-the-fluid">
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-4 mb-4'>
                <div className='card'>
                  <img src='/images/cycle.png' className='cycle' alt={t('health.cycleAlt')} />
                  <span className='health-text-card'>
                    <div className='card-body'>
                      <p className='card-text-font'>{t('health.cyclingText')}</p>
                    </div>
                  </span>
                </div>
              </div>

              <div className='col-md-4 mb-4'>
                <div className='card'>
                  <img src='/images/jump-rope.png' className='cycle' alt={t('health.jumpRopeAlt')} />
                  <span className='health-text-card'>
                    <div className='card-body'>
                      <p className='card-text-font'>{t('health.jumpingRopeText')}</p>
                    </div>
                  </span>
                </div>
              </div>

              <div className='col-md-4 mb-4'>
                <div className='card'>
                  <img src='/images/pullup.png' className='cycle' alt={t('health.pullUpAlt')} />
                  <span className='health-text-card'>
                    <div className='card-body'>
                      <p className='card-text-font'>{t('health.pullUpText')}</p>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="content-health-paragrph">
            <h6><b>{t('health.centerTitle')}</b></h6>
            <p><b>{t('health.centerHeader')}</b></p>
            <p className='text-content-paragrph'>{t('health.centerDescription')}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default withTranslation() (Health);

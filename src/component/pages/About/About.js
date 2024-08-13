import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';
import { withTranslation } from 'react-i18next';
import ScrollToTop from '../ScrollToTop';
const About = () => {
    const { t } = useTranslation();

    return (
        <>
        <ScrollToTop />
            <div className='About'>
                <div className="aboutcontainer">
                    <div className="about-breadcrumb">
                        <h1 className="about-title">{t('about.title')}</h1>
                    </div>
                </div>

                <div className="about-school-content">
                    <div className="about-content-wrapper row1">
                        <div className="col">
                            <img src="/images/baap-school.png" alt="img" className="school-image" />
                        </div>
                        <div className="col">
                            <p className="text-large">
                                <strong>{t('about.school_name')}</strong><br />
                                {t('about.school_description')}
                            </p>
                        </div>
                    </div>
                    <div className="about-additional-info row1">
                        <div className="col">
                            <p className="text-large">
                                <strong>{t('about.teaching_class')}</strong><br />
                                {t('about.teaching_class_description')}
                            </p>
                        </div>
                        <div className="col">
                            <img src="/images/teaching.jpg" alt="Students in a classroom" className="school-image" />
                        </div>
                    </div>
                    <div className="about-library-info row1">
                        <div className="col">
                            <img src="/images/lab1.jpg" alt="School Library" className="school-image" style={{ height: 300 }} />
                        </div>
                        <div className="col">
                            <p className="text-large">
                                <strong>{t('about.library_info')}</strong><br />
                                {t('about.library_info_description')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withTranslation()(About);

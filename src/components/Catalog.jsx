import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom';

function Catalog() {
    const {t} = useTranslation();

    const navigate = useNavigate();
    const changePage = (path) => {
        navigate(path)
    }
        return (
            <div className='catalog-division'>
                <h1 className='catalog-heading'>Catalog</h1>
                <div className="cards">
                    <div className="card" onClick={() => changePage('/catalog-products')}>
                        <img className='card-image' src="Images/3 Catalog/robots.png" alt="" />
                        <p className='card-text'>{t('personal-robots')}</p>
                    </div>
                    <div className="card">
                        <img className='card-image' src="Images/3 Catalog/laptops.png" alt="" />
                        <p className='card-text'>{t('laptops')}</p>
                    </div>
                    <div className="card" onClick={() => changePage('/catalog-products')}>
                        <img className='card-image' src="Images/3 Catalog/smartphones.png" alt="" />
                        <p className='card-text'>{t('smartphones')}</p>
                    </div>
                    <div className="card">
                        <img className='card-image' src="Images/3 Catalog/headphones.png" alt="" />
                        <p className='card-text'>{t('headphones')}</p>
                    </div>
                    <div className="card">
                        <img className='card-image' src="Images/3 Catalog/watches.png" alt="" />
                        <p className='card-text'>{t('smart-watches')}</p>
                    </div>
                    <div className="card">
                        <img className='card-image' src="Images/3 Catalog/computers.png" alt="" />
                        <p className='card-text'>{t('computers')}</p>
                    </div>
                    <div className="card">
                        <img className='card-image' src="Images/3 Catalog/drones.png" alt="" />
                        <p className='card-text'>{t('drones')}</p>
                    </div>
                    <div className="card">
                        <img className='card-image' src="Images/3 Catalog/accessories.png" alt="" />
                        <p className='card-text'>{t('accessories')}</p>
                    </div>
                </div>
            </div>
        )
    }

export default Catalog
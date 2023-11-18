import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3 className="beats-solo2">{heroBanner.midText}</h3>
        <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            
          </Link>
          <div className="desc">
            <h5>tenemos justo lo que estabas buscando</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
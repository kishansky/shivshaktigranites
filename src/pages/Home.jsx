import PageMeta from '@/components/common/PageMeta'
import Categories from '@/components/home/Categories'
import CTA from '@/components/home/CTA'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import Gallery from '@/components/home/Gallery'
import HeroSection from '@/components/home/HeroSection'
import ImportantMarble from '@/components/home/ImportantMarble'
import ProductShortcuts from '@/components/home/ProductShortcuts'
import Stats from '@/components/home/Stats'
import Testimonials from '@/components/home/Testimonials'
import WhyChooseUs from '@/components/home/WhyChooseUs'

import React from 'react'

function Home() {
    return (<>
        <PageMeta title={"Shiv Sakti Granites"} description={"Shiv Shakti Granites (Rajasthan Wale) is a trusted supplier of premium granite, marble, tiles, and natural stone products from Rajasthan and Madhya Pradesh. We provide high-quality stones for homes, commercial projects, flooring, kitchen countertops, and construction."}  />
        <main className="w-full overflow-x-hidden scroll-smooth">
            <HeroSection />
            <Categories />
            <ProductShortcuts />
            <ImportantMarble />
            <FeaturedProducts />
            <WhyChooseUs />
            <Gallery />
            <Stats />
            <CTA />
            <Testimonials />
        
        </main>
        </>
    )
}

export default Home

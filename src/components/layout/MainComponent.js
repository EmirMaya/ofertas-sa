import Image from 'next/image'
import React from 'react'

const MainComponent = () => {
    return (
        <section className='mt-24 mb-8 mx-4 flex justify-center'>
            <div>
                <h1
                    className='text-3xl font-semibold text-neutral-800 lg:text-5xl'>
                    Las mejores <span className='text-emerald-500'>
                        ofertas,</span> <br /> están acá.
                </h1>
                <p className='mt-4 text-neutral-600 text-sm lg:text-lg'>
                    Las ofertas que te rodean, en un solo lugar.
                </p>
            </div>

            <div className='w-1/3'>
                <Image src={'/ofertas.webp'} alt='ofertas' width={500} height={500} />
            </div>
        </section>
    )
}

export default MainComponent
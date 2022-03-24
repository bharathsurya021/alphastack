import React from 'react'
import './Homepage.css'
const Homepage = () => {
    return (
        < >
            <div className='section-about section-container'>
                <p className='section-about-info'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero alias accusamus iure iste quaerat totam modi neque odio tempora similique. Inventore exercitationem cumque nobis fugiat repellat hic. Corporis dignissimos labore quis fugit quaerat libero, ut assumenda et rem nihil. Dolor deserunt dolorum reiciendis laudantium corporis recusandae aspernatur, tempora laboriosam explicabo.</p>
            </div>
            <div className='section-container section-services'>

                <div className='service-box mr-5 mb-5'>
                    <p className='service-title' >CRYPTO MARKET MAKING</p>
                    <p className='service-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam debitis numquam quas minus repellat culpa perspiciatis deserunt. Repudiandae, sed.</p>
                    <button>LEARN MORE</button>
                </div>
                <div className='service-box mb-5'>
                    <p className='service-title' >CRYPTO LIQUIDITY PROVISION</p>
                    <p className='service-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam debitis numquam quas minus repellat culpa perspiciatis deserunt. Repudiandae, sed.</p>
                    <button>LEARN MORE</button>
                </div>
                <div className='service-box mr-5'>
                    <p className='service-title' >ALOGRITHMIC TRADING</p>
                    <p className='service-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam debitis numquam quas minus repellat culpa perspiciatis deserunt. Repudiandae, sed.</p>
                    <button>LEARN MORE</button>
                </div>
                <div className='service-box'>
                    <p className='service-title ' >RISK MANAGEMENT</p>
                    <p className='service-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam debitis numquam quas minus repellat culpa perspiciatis deserunt. Repudiandae, sed.</p>
                    <button>LEARN MORE</button>
                </div>

            </div>
        </>
    )
}

export default Homepage
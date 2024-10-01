import React from 'react'

const hero = () => {
  return (
    <main className='hero'>
        <div className='hero-content'>
            <h1>your feet deserve the best</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quibusdam dolore libero
                 at fuga corporis consectetur tempora! Ab dolorum praesentium neque! Eius neque inventor
                 e suscipit iusto velit, aspernatur saepe cumque!
            </p>
            <div className='hero-btn'>
                <button>Shop now</button>
                <button> Caegory</button>
            </div>
            <div className='shopping'>
                <p>also available on web</p>
                <div className='shopping-img'>
                    <img src="../src/assets/amazon.png" alt="" />
                    <img src="../src/assets/flipkart.png" alt="" />
                </div>
            </div>
        </div>
        <div className="hero-img">
            <img src="../src/assets/shoes.png" alt="" />
        </div>
      
    </main>
  )
}

export default hero;

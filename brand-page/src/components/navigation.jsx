import React from 'react'

const navigation = () => {
  return (
    <div>
       <nav>
        <div className='logo'>
          <img src="../src/assets/Nike-logo.png" className='h-10 w-10 ' alt=" logo" />
        </div>
        <ul>
          <li href="#">meu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  )
}

export default navigation;

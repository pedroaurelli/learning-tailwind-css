import React from 'react'

function App() {
  return (
    <div className="container h-screen w-screen mx-auto flex items-center justify-center">
      <div className='flex flex-col bg-gray-700 shadow-lg shadow-gray-800 py-4 px-6 mx-4 rounded-md'>

        <div className='flex flex-row items-center'>
          <img className='w-24 rounded-full' alt='User Avatar' src='https://github.com/pedroaurelli.png'/>
          <div className='ml-4'>
            <h1>
              Pedro Aureliano
            </h1>
            <h4 className='text-indigo-400 font-medium pt-2'>
              FullStack Developer
            </h4>
          </div>
        </div>

        <div className='mt-6'>
          <h2>Bio</h2>
          <p className='text-gray-300 font-light mt-1 max-w-lg text-justify'>
          Bro ipsum dolor sit amet 360 beater switch ripper, frontside gapers spread eagle stunt liftie afterbang. Stunt huckfest ACL, bonk poaching heli booter heli free ride Whistler wack taco dust on crust caballerial gondy.
          </p>
        </div>

        <div className='mt-6'>
          <h2>Career</h2>
          <div className='mt-4'>
            <h3 className='text-indigo-400 font-medium'>Indigo Hive</h3>
            <ul className='list-disc list-inside pl-4'>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

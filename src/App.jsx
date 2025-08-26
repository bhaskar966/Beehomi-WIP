import './App.css'

function App() {

  return (
    <>
      <div class="flex flex-col items-center justify-center h-screen px-4">
          <img src='src\assets\BeeWalls_Icon.svg' className='w-64'/>
          <h1 class="text-4xl font-bold text-gray-800 mb-4">Beehomi is coming Soon</h1>
          <p class="text-gray-600 text-lg mb-8">We're working hard to bring you an amazing new website. Stay tuned!</p>
          <div class="flex space-x-4">
              <a href="https://play.google.com/store/apps/dev?id=6486116047942427336"
                  class="bg-amber-400 hover:bg-orange-400 text-black font-medium py-2 px-4 rounded-full shadow-lg transition duration-300">Download Apps</a>
              <a href="https://x.com/BeehomieX"
                  class="bg-black hover:bg-gray-600 text-gray-200 py-2 px-4 rounded-full shadow-lg transition duration-300">Follow on 𝕏</a>
          </div>
      </div>
    </>
  )
}

export default App

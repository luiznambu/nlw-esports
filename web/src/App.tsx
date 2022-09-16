import { MagnifyingGlassPlus } from 'phosphor-react'
import './styles/main.css'

import logoImg from './assets/logo-nlw-esports.svg'

function App() {
  return (
    <div className="max-w-[1134px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.</h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
            <strong className="text text-white font-bold block">League of Legends</strong>
            <span className='text-zinc-300 text-sm'>4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game2.png" alt="" />          
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
            <strong className="text text-white font-bold block">Dota 2</strong>
            <span className='text-zinc-300 text-sm'>4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game3.png" alt="" />          
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
            <strong className="text text-white font-bold block">CSGO</strong>
            <span className='text-zinc-300 text-sm'>4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game4.png" alt="" />          
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
            <strong className="text text-white font-bold block">Apex Legends</strong>
            <span className='text-zinc-300 text-sm'>4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game5.png" alt="" />          
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
            <strong className="text text-white font-bold block">Fortnite</strong>
            <span className='text-zinc-300 text-sm'>4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game6.png" alt="" />          
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
            <strong className="text text-white font-bold block">World of Warcraft</strong>
            <span className='text-zinc-300 text-sm'>4 anúncios</span>
          </div>
        </a>
      </div>

      <div className='pt-1 bg-nlw-gradient rounded-lg self-stretch mt-8 overflow-hidden '>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className='px-4 py-3 bg-violet-500 text-white rounded hover:bg-violet-600 flex item-center gap-3'>
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>
        </div>
      </div>

    </div>
  )
}

export default App

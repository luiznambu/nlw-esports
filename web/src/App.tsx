import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';

import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.svg';

import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { CreateAdModal } from './components/CreateAdModal';

//COMO MELHORAR ESSA APLICACAO?
//deixar ela responsiva, fazer validacao do forms, fazer carrossel nos jogos (6+ jogos), autenticacao de usuario (discord ou twitch)


interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

// Make a request for a user with a given ID

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(response => {
        setGames(response.data)
      })
  },[])

  return (
    <div className="max-w-[1134px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.</h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <GameBanner 
              key={game.id}
              title={game.title} 
              bannerUrl={game.bannerUrl} 
              adsCount={game._count.ads}
            />
          )
        })}

      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App

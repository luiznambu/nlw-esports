import { useEffect, useState } from 'react';
import { View, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';

import { GameCard, GameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps){
    navigation.navigate('game', { id, title, bannerUrl }); //para utilizar game eh preciso exportar globalmente no navigation.d.ts
  }

  useEffect(() => {
    fetch('http://192.168.56.1:3333/games')
    .then(response => response.json())
    .then(data => setGames(data))
  },[])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image 
          source={logoImg}
          style={styles.logo}
        />

        <Heading 
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList 
          data={games}
          keyExtractor={item => item.id} 
          renderItem={({ item }) => ( //renderiza os items baseado no item.id da data={GAMES}
            <GameCard 
              data={item}
              onPress={() => handleOpenGame(item)}
            />
          )}
          showsHorizontalScrollIndicator={false} //some com o scroll bar horizontal
          horizontal //boolean para direcao horizontal
          contentContainerStyle={styles.contentList} //propriedade que estiliza o conteudo da lista
        />

      </SafeAreaView>
    </Background>
  );
}
import { View, Image, FlatList } from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png';
import { GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import { GAMES } from '../../utils/games';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image 
        source={logoImg}
        style={styles.logo}
      />

      <Heading 
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList 
        data={GAMES}
        keyExtractor={item => item.id} 
        renderItem={({ item }) => ( //renderiza os items baseado no item.id da data={GAMES}
          <GameCard 
            data={item}
          />
        )}
        showsHorizontalScrollIndicator={false} //some com o scroll bar horizontal
        horizontal //boolean para direcao horizontal
        contentContainerStyle={styles.contentList} //propriedade que estiliza o conteudo da lista
      />

    </View>
  );
}
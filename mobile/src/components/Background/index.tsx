import { ImageBackground } from 'react-native'; // ImgBackground renderiza imagem e utiliza como background
import backgroundImg from '../../assets/background-galaxy.png'; //para importar .png eh necessario @types -> png.d.ts

import { styles } from './styles';

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground 
      source={backgroundImg} //para n ter delay do background aparecer usamos o defaultSource
      defaultSource = {backgroundImg} //memoriza a img padrao e acelera carregamento da img
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}
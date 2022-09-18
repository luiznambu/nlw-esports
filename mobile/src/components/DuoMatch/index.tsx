import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Activity, CheckCircle, PersonSimpleWalk } from 'phosphor-react-native';
import * as Clipboard from 'expo-clipboard';
import { useState } from 'react';

import { styles } from './styles';
import { THEME } from '../../theme';

import { Heading } from '../Heading';

interface Props extends ModalProps {
    discord: string;
    onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
    const [isCopying, setIsCopying] = useState(false);


  async function handleCopyDiscordToClipboard(){
    setIsCopying (true);
    await Clipboard.setStringAsync(discord);

    Alert.alert('Discord copiado!', 'Agora é só colar no Discord!.');
    setIsCopying(false);
  }


  return (
    <Modal
        animationType='fade'
        transparent
        statusBarTranslucent //modal fica por cima da barra da status
        {...rest}
    >
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity
                    style={styles.closeIcon}
                    onPress={onClose}
                >
                    <MaterialIcons 
                        name="close"
                        size={20}
                        color={THEME.COLORS.CAPTION_500}
                    />
                </TouchableOpacity>

                <CheckCircle 
                    size={64}
                    color={THEME.COLORS.SUCCESS}
                    weight="bold"
                />

                <Heading
                    title="Let's play!"
                    subtitle='Agora é só começar a jogar!'
                    style={{ alignItems:'center', marginTop: 24}}
                />

                <Text style={styles.label}>
                    Adicione no Discord
                </Text>

                <TouchableOpacity
                    style={styles.discordButton}
                    onPress={handleCopyDiscordToClipboard}
                    disabled={isCopying} //desabilita caso esteja no meio do processo de copiar
                >
                    <Text style={styles.discord}>
                        {isCopying ? <ActivityIndicator color={THEME.COLORS.PRIMARY}/> : discord}
                    </Text>
                    
                </TouchableOpacity>

                
            </View>
            
        </View>
    </Modal>
  );
}



















import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ColorValue,
  ActivityIndicator
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';

// pra slecionar props do TouchableOpacity vc importa o 'TouchableOpacityProps' e extende o type colocando oo nome seguido de um "&", pra agregar as opções da propriedade importada
type Props = TouchableOpacityProps & {
  title: string;
  color: ColorValue;
  backgroundColor: ColorValue;
  icon?: React.ComponentProps<typeof AntDesign>['name'];
  isLoading?: boolean;
}

// o operador "...rest" pega o restante das propriedades que não foram mencionadas no props criado 
export function Button({ title, color, backgroundColor, icon, isLoading = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      {
        isLoading ? <ActivityIndicator color={color} /> : //ActivityIndicator é pra efeitos de Loading
          <>
            <AntDesign name={icon} size={24} style={styles.icon} />

            <Text style={[styles.title, { color }]}>
              {title}
            </Text>
          </>
      }
    </TouchableOpacity>
  );
}
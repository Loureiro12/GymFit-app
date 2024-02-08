import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { Text, VStack } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';

import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { Binary } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function AddCoach() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const handleAdd = () => {
    navigation.navigate('OnboardingSuccess');
  };

  return (
    <>
      <StatusBar backgroundColor="#FFD600" barStyle="dark-content" translucent />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFD600' }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : undefined}
            enabled
            style={{
              flex: 1,
            }}
          >
            <VStack flex={1} bg="$yellow10" justifyContent="center" padding={30}>
              <Text
                color="$black100"
                fontSize="$3xl"
                fontWeight="$bold"
                lineHeight="$2xl"
                marginBottom="$5"
                textAlign="center"
              >
                Adicione o código do seu treinador
              </Text>
              <Input placeholder="Código" icon={Binary} />

              <Button
                title="Continuar"
                variant="black"
                marginBottom="$5"
                marginTop="$2.5"
                onPress={handleAdd}
              />

              <TouchableOpacity
                onPress={handleAdd}
                activeOpacity={0.8}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text>Não tenho código de treino</Text>
              </TouchableOpacity>
            </VStack>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </>
  );
}

export default AddCoach;

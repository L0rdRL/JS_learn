import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      // Пароли не совпадают, обработка ошибки
      return;
    }

    // Реализация регистрации пользователя, например, отправка данных на сервер

    // После успешной регистрации, можно перейти на экран входа
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Регистрация</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Подтвердите пароль"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button title="Зарегистрироваться" onPress={handleRegister} />
    </View>
  );
};

// Стили и навигация

export default RegisterScreen;

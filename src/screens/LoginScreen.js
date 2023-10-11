import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Реализация входа пользователя, например, проверка данных на сервере

    // После успешного входа, можно перейти на основной экран приложения
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Вход</Text>
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
      <Button title="Войти" onPress={handleLogin} />
    </View>
  );
};

// Стили

export default LoginScreen;

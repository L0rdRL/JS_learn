import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('');
  const [photo, setPhoto] = useState(null); // Здесь можно хранить фотографию пользователя

  const handleSaveProfile = () => {
    // Реализуйте сохранение профиля пользователя на сервере или в локальной базе данных
  };

  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.profileImage} />
      <Button title="Загрузить фото" onPress={handleUploadPhoto} />
      <TextInput
        style={styles.input}
        placeholder="Имя"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Опыт работы"
        value={experience}
        onChangeText={setExperience}
      />
      <TextInput
        style={styles.input}
        placeholder="Образование"
        value={education}
        onChangeText={setEducation}
      />
      <Button title="Сохранить профиль" onPress={handleSaveProfile} />
    </View>
  );
};

// Стили

export default ProfileScreen;

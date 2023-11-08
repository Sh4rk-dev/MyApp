import { Participant } from "../../components/Participant";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setparticipantName] = useState("");

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante Existe",
        "Já existe um participante cadastrado na lista com esse nome"
      );
    } else if (!participantName.trim()) {
      return Alert.alert("Erro", "Digite um nome.");
    }
    setParticipants((prevState) => [...prevState, participantName]);
    setparticipantName("");
  }

  function handleParticipantRemove(name: string) {

    if (participants.includes(name)) {
      Alert.alert("Remover", `Você quer excluir esse participante: ${name} ?`, [
        {
          text: "sim",
          onPress: () => 
          setParticipants(prevState => prevState.filter(participant => participant !== name))          
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.dateEvent}>Quarta-Feira, 1 de Novembro de 2023.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante..."
          placeholderTextColor={"#6b6b6b"}
          onChangeText={setparticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda ? Adicione participantes a sua lista
            de presença
          </Text>
        )}
      />
    </View>
  );
}

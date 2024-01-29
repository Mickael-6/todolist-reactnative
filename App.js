import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput,Modal,Pressable,ImageBackground,testModal} from 'react-native';
import React, { useState } from 'react';
// import { useState } from 'react';


export default function App() {
  const defaultListes = [
    { name: "Faire les courses" },
    { name: "Aller à la salle de sport 3 fois par semaine" },
    { name: "Monter à plus de 5000m d altitude" },
    { name: "Acheter mon premier appartement" },
    { name: "Perdre 5 kgs" },
    { name: "Gagner en productivité" },
    { name: "Apprendre un nouveau langage" },
    { name: "Faire une mission en freelance" },
    { name: "Organiser un meetup autour de la tech" },
    { name: "Faire un triathlon" },
  ];
  // const [text, onChangeText] = React.useState('');
  
  const [name,  onChangeText] = React.useState('');
  const [listes, setListes] = React.useState(defaultListes)
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [saveid, setSaveId] = useState(null);

  const image = {uri: 'https://www.schoolspecialty.ca/images/038779_ecommfullsize.jpg'};

 

  const onSubmitted = () => {

    console.log("name :",name);
    
    setListes([
      ...listes,
      { name: name }
    ]);
 
  }

  const Delete = () => { 
    console.log(saveid);
    const updatedTasks = [...listes]; 
    updatedTasks.splice(saveid,1); 
    setListes(updatedTasks); 
    setModalVisible(!modalVisible)
}; 
  const openModal = (id) => { 
    setModalVisible(!modalVisible) ,
    setSaveId(id)
 }; 
  const openModalInput = (id) => { 
    setModalVisible2(!modalVisible2) ,
    setSaveId(id)
 }; 
  const closeModal = () => { 
    setModalVisible(!modalVisible)    
 }; 
  const closeModalInput = () => { 
    setModalVisible2(!modalVisible2)    
 }; 

 
 
  return (
<ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
   
      <SafeAreaView style={styles.Safe} >
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeText(text)}
          value={name}
          placeholder="Entrez une tache" />
  <Button
    onPress={onSubmitted}
    title="add"
    color="#841584"
    />

      </SafeAreaView>
  
      <View style={styles.View} >
        {listes.map((liste,i) => {
        //  setid(i)
        //  console.log(i)
     
          return <Text key={i} style={styles.Text}>{liste.name} 
   
    <Button
     onPress={() => openModal(i) }
    // onPress={() => Delete(i)} 
    title="supprimer"
    color="#841584"
    />
    <Button
     onPress={() => openModalInput(i) }
    // onPress={() => Delete(i)} 
    title="edit"
    color="#841584"
    />
      </Text>;
        })}
      </View>
      <View >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>êtes vous sur de vouloir supprimer la tache ?</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => Delete()}>
              <Text style={styles.textStyle}>Oui</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => closeModal()}>
              <Text style={styles.textStyle}>Non</Text>
            </Pressable>

          </View>
        </View>
      </Modal>
      {/* commentaire */}
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible2(!modalVisible2);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <SafeAreaView>
  
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeText(text)}
        value={name}
        placeholder={name}
       
      />
      <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => closeModalInput()}>
              <Text style={styles.textStyle}>X</Text>
            </Pressable>
    </SafeAreaView>
            

          </View>
        </View>
      </Modal>
    </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  Text: {
    textAlign: "center",
    color: "green", 
  },
  input: {
    textAlign: "center",
    marginRight : 50,
  
  },

  Safe: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 42,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },




});

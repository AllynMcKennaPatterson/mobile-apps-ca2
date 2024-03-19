import * as React from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { updateItem } from '../../sql'

const UpdateProduct = () => {
  const [updateDetails, setUpdateDetails] = React.useState({
    id: null,
    title: '',
  })

  const handleIdChange = (text) => {
    setUpdateDetails((prevDetails) => ({
      ...prevDetails,
      id: text,
    }))
  }

  const handleTitleChange = (text) => {
    setUpdateDetails((prevDetails) => ({
      ...prevDetails,
      title: text,
    }))
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Product id:</Text>
        <TextInput
          style={styles.textBox}
          keyboardType={'default'}
          onChangeText={handleIdChange}
          placeholder={'Enter Product Id to Update:'}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>New Title:</Text>
        <TextInput
          style={styles.textBox}
          keyboardType={'default'}
          onChangeText={handleTitleChange}
          placeholder={'Enter New Product Title:'}
        />
      </View>
      <Pressable style={styles.button} onPress={() => updateItem(updateDetails)}>
        <Text style={styles.buttonText}>Delete Product</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
  },
  text: {
    marginTop: 50,
    fontSize: 20,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#db1d1d',
    borderRadius: 5,
    marginTop: 20,
    width: 180,
    height: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  textBox: {
    width: 200,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 300,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  inputText: {
    fontSize: 16,
    textAlign: 'center',
    marginRight: 10,
  },
})
export default UpdateProduct

import * as React from "react";
import { Text, Button, View, StyleSheet, Pressable } from "react-native";

const HomeScreen = ({ navigation, route }) => {
    let text = route.params;
    if (text === undefined) {
        text = ''
    }
    else {
        text = route.params.paramKey;
        console.log("Home " + JSON.stringify(text))
    }
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => navigation.navigate("ViewProducts")}>
                <Text style={styles.buttonText}>View all Products</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate("AddProduct")}>
            <Text style={styles.buttonText}>Add a new Product</Text>

            </Pressable>
        </View>
    );
};

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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#6f2da8',
        borderRadius: 5,
        marginBottom: 20,
        width: 180,
        height: 40,

    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default HomeScreen;

import * as React from "react";
import { Text, Button, View, StyleSheet, Pressable } from "react-native";

import { fetchItems } from '../../sql';

const ViewProduct = ({ navigation, route }) => {
    const [products, setProducts] = React.useState([])
    async function listAllDbRecords() {
        
        let result = await fetchItems()
        setProducts(result)
        console.log(JSON.stringify(JSON.stringify(products)));
    }
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={listAllDbRecords}>
                <Text style={styles.buttonText}>Show Products</Text>
            </Pressable>
            <View>
                {products.map((product) => (
                    <Text>{product.id}: {product.title}</Text>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 30
    },
    text: {
        marginTop: 50,
        fontSize: 20,
    },
    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#db1d1d',
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

export default ViewProduct;


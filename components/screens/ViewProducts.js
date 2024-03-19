import * as React from "react";
import { Text, Button, View, StyleSheet, Pressable } from "react-native";
import * as Notifications from "expo-notifications";

import { fetchItems } from "../../sql";

// Notifications.setNotificationHandler({
//   handleNotification: async () => {
//     return {
//       shouldPlaySound: false,
//       shouldSetBadge: false,
//       shouldShowAlert: true,
//     };
//   },
// });

const ViewProduct = ({ navigation, route }) => {
  const [products, setProducts] = React.useState([]);

  async function listAllDbRecords() {
    console.log("Get")
    let result = await fetchItems();
    setProducts(result);
    console.log(JSON.stringify(JSON.stringify(products)));
    console.log()
  }
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={listAllDbRecords}>
        <Text style={styles.buttonText}>Show Products</Text>
      </Pressable>
      <View>
        {products.map((product) => (
          <Text>
            {product.id}: {product.title}
          </Text>
        ))}
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
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
    backgroundColor: "#6f2da8",
    borderRadius: 5,
    marginBottom: 20,
    width: 180,
    height: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default ViewProduct;

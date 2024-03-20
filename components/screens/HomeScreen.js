import * as React from "react";
import {
  Text,
  Button,
  View,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { fetchItems, deleteItem } from "../../sql";

const HomeScreen = ({ navigation, route }) => {
  const [products, setProducts] = React.useState([
    // {
    //   title: "title",
    //   id: 0,
    //   imageUri:
    //     "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg",
    // },
    // {
    //   title: "title",
    //   id: 1,
    //   imageUri:
    //     "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg",
    // },
  ]);
  const [itemCount, setItemCount] = React.useState(0);

  React.useEffect(() => {
    console.log("UseEffect");
    listAllDbRecords();
    setItemCount(products.length)
  }, []);

  async function listAllDbRecords() {
    console.log("Get");
    let result = await fetchItems();
    setProducts(result);
    setItemCount(products.length)
    console.log(JSON.stringify("Products" + JSON.stringify(products)));
    console.log();
  }

  async function deleteHandler(id) {
    console.log("Delete: " + id);
    let result = await deleteItem(id);
    // let result2 = await fetchItems();
    // setProducts(result2);
    console.log(JSON.stringify(result));
  }

  return (
    <View>
      <View style={styles.itemCounter}>
            <Text style={styles.itemCounterText}>{itemCount}</Text>
          </View>
      <ScrollView>
        <View style={styles.container}>
          
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("AddProduct")}
          >
            <Text style={styles.buttonText}>Add a new item</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("UpdateProduct")}
          >
            <Text style={styles.buttonText}>Update </Text>
          </Pressable>
          <View>
            {products.map((product) => {
              <View style={styles.itemContainer}>
                <Text style={styles.title}>
                  ID:{product.id} Title:{product.title}
                </Text>
                
                <Image
                  style={styles.itemImage}
                  source={{
                    uri: product.imageUri,
                  }}
                />
                <Pressable
                  style={styles.deleteButton}
                  onPress={() => deleteHandler(product.id)}
                >
                  <Text style={styles.buttonText}>Delete Item</Text>
                </Pressable>
              </View>
            })}
          </View>
        </View>
      </ScrollView>
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
    backgroundColor: "#00b3ff",
    borderRadius: 5,
    marginBottom: 20,
    width: 180,
    height: 40,
  },
  deleteButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e30000",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    width: 180,
    height: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  itemImage: {
    width: 250,
    height: 250,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: "#999999",
    borderWidth: 1,
  },
  itemContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d1d1d1",
    width: 300,
    height: 370,
    borderRadius: 10,
    borderColor: "#999999",
    borderWidth: 2,
    marginBottom: 20,
  },
  title: {
    marginBottom: 10,
  },
  itemCounter: {
    zIndex: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 10,
    right: 10,
    width: 50,
    height: 50,
    backgroundColor: "#c20000",

    borderRadius: 50,
  },
  itemCounterText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700'
  }
});

export default HomeScreen;

import React from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import Notifications from "../components/Notifications";
import Susurro from "../components/Susurro";
import { useNavigation } from "@react-navigation/native";
import { Feather, AntDesign, Ionicons } from "@expo/vector-icons";

const windowHeight = Dimensions.get("window").height;
const Header = ({ saldo }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={styles.search}>
        <View style={styles.inputArea}>
          <AntDesign name="wallet" size={24} color="white" />
          <Text style={styles.currecySymbol}>R$</Text>
          <Text style={styles.balance}>{saldo}</Text>
        </View>
      </View>
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Bank")}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Ionicons name="add" size={24} color="white" />
          <Text style={{ color: "#fff" }}>Adicionar Saldo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  currecySymbol: {
    color: "#fff",
    marginRight: 6,
    fontSize: 22,
    marginLeft: 16,
  },
  balance: {
    fontSize: 22,
    color: "#2ecc71",
  },
  header: {
    height: windowHeight / 10,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
  },
  input: {
    color: "#fff",
  },
  inputArea: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    width: "98%",

    elevation: 2,
    paddingHorizontal: 10,
    height: 37,
    borderRadius: 10,
  },
  search: {
    flex: 2,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 20,
  },
  tinyLogo: {
    width: 32,
    height: 32,
    borderRadius: 20,
  },
  buttonsWrapper: {
    width: 50,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: { marginLeft: 10 },
});

export default Header;

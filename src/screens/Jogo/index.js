import { Feather, AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import {
  Text,
  View,
  Assets,
  Avatar,
  Badge,
  Constants,
  Button,
  Colors,
  ActionSheet,
  Chip,
  Typography,
} from "react-native-ui-lib"; //eslint-disable-line
const carteira = require("../../../assets/img/carteira.jpeg");
const dadosR = require("../../../assets/img/dadosR.gif");
import { FlatGrid } from "react-native-super-grid";
import axios from "axios";
import YoutubePlayer from "react-native-youtube-iframe";
import { Center,Spinner } from "native-base";
//import Header from "./components/Header";

const dadop1 = require("../../../assets/img/dadoP1.png");
const dadop2 = require("../../../assets/img/dadoP2.png");
const dadop3 = require("../../../assets/img/dadoP3.png");
const dadop4 = require("../../../assets/img/dadoP4.png");
const dadop5 = require("../../../assets/img/dadoP5.png");
const dadop6 = require("../../../assets/img/dadoP6.png");

const dadov1 = require("../../../assets/img/dadoV1.png");
const dadov2 = require("../../../assets/img/dadoV2.png");
const dadov3 = require("../../../assets/img/dadoV3.png");
const dadov4 = require("../../../assets/img/dadoV4.png");
const dadov5 = require("../../../assets/img/dadoV5.png");
const dadov6 = require("../../../assets/img/dadoV6.png");

export default function Index({ navigation }) {
  const [visible, setVisible] = React.useState(false);
  const [select, setSelect] = React.useState([]);
  const [ids, setIds] = React.useState();
  const [valor, setValor] = React.useState(false);
  const [ganhos, setGanhos] = React.useState(0);

  const [carteira, setCarteira] = React.useState(100);
  const [numeros, setNumeros] = React.useState([{id:"dadop6"},{id:"dadov6"}]);
  const [dadoj, setDadoj] = React.useState("Preto 4 , Vermelho 3 , Preto 2");


  const [resultado, setResultado] = React.useState();
  const [dados, setDados] = React.useState([
    {
      id: "dadop1",
      nome: "dadop1",
      mult: 2,
      imagem: dadop1,
      color: "#0c0c0e",
      colorSelect: "#0fe17b",
      colorGain: "#fee672",
      mult: 2,
    },

    {
      id: "dadop2",
      nome: "dadop2",
      imagem: dadop2,
      color: "#0c0c0e",
      colorSelect: "#0fe17b",
      colorGain: "#fee672",
      mult: 2,
    },

    {
      id: "dadop3",
      nome: "dadop3",
      imagem: dadop3,
      color: "#0c0c0e",
      colorSelect: "#0fe17b",
      colorGain: "#fee672",
      mult: 2,
    },

    {
      id: "dadop4",
      nome: "dadop4",
      imagem: dadop4,
      color: "#0c0c0e",
      colorSelect: "#0fe17b",
      colorGain: "#fee672",
      mult: 2,
    },

    {
      id: "dadop5",
      nome: "dadop5",
      imagem: dadop5,
      color: "#0c0c0e",
      colorSelect: "#0fe17b",
      colorGain: "#fee672",
      mult: 2,
    },

    {
      id: "dadop6",
      nome: "dadop6",
      imagem: dadop6,
      color: "#0c0c0e",
      colorSelect: "#0fe17b",
      colorGain: "#fee672",
      mult: 2,
    },

    {
      id: "dadov1",
      nome: "dadov1",
      imagem: dadov1,
      color: "#0c0c0e",
      colorSelect: "#0fe17b",
      colorGain: "#fee672",
      mult: 4,
    },

    {
      id: "dadov2",
      nome: "dadov2",
      imagem: dadov2,
      color: "#0c0c0e",
      colorSelect: "#0fe17b",
      colorGain: "#fee672",
      mult: 4,
    },

    {
      id: "dadov3",
      nome: "dadov3",
      imagem: dadov3,
      color: "#0c0c0e",
      colorSelect: "#0fe17b",
      colorGain: "#fee672",
      mult: 4,
    },

    {
      id: "dadov4",
      nome: "dadov4",
      imagem: dadov4,
      color: "#0c0c0e",
      colorSelect: "#0fe17b",
      colorGain: "#fee672",
      mult: 4,
    },

    {
      id: "dadov5",
      nome: "dadov5",
      imagem: dadov5,
      color: "#0c0c0e",
      colorSelect: "#0fe17b",
      colorGain: "#fee672",
      mult: 4,
    },

    {
      id: "dadov6",
      nome: "dadov6",
      imagem: dadov6,
      color: "#0c0c0e",
      colorSelect: "#0fe17b",
      colorGain: "#fee672",
      mult: 4,
    },
  ]);

  //functions
  function dado(data) {
    setIds(data.id);
    setVisible(true);
    console.log(ids);
  }

  function selecionar(data) {
    let dado = select.find((dado) => dado.id === data.id);
    console.log(dado);
    if (!dado) {
      select.push(data);
      console.log(select);
    }
  }

  function cancel(data) {
    for (let index = 0; index < select.length; index++) {
      const element = select[index].id;

      if (element == data.id) {
        select.splice(index, 1);
      }

      console.log(element);
    }
  }


  function apostar() {
    const soma = select
      .map((item) => item.valor)
      .reduce((prev, curr) => prev + curr, 0);
    setValor(soma);

    let valorDv = select
      .filter((dado) => dado.cor === "v")
      .map((dado) => (dado.valor *= 4));

    let valorDp = select
      .filter((dado) => dado.cor === "p")
      .map((dado) => (dado.valor *= 2));

    let ganho = valorDp.concat(valorDv);
    const somatotal = ganho
      .map((item) => item)
      .reduce((prev, curr) => prev + curr, 0);
    setGanhos(somatotal);
  }

  function novaaposta() {
    setGanhos(0);
    setIds();
    setSelect([]);
    setValor(0);
    set;
  }


  function jogarD(){

    setValor(!valor)
    const obj2 = select;
    const obj1 =  numeros;
    const result = obj2.map((obj) => ({
      ...obj,
      isPresent: obj1.some(({ id }) => id === obj.id),
    }));
    //console.log(result);

    let redCars = result.filter(car => car.isPresent === true);
    //console.log(redCars);
   // console.log(select)
    //console.log(res2)


   
    
    var total = redCars.reduce(getTotal, 0);
    function getTotal(total, item) {
     return total + (item.valor * item.mult);
    }


      alert(`Parabens Voce ganhou R$, ${total.toFixed(2)} Dados sorteados Preto 1 , vermelho 2 , preto 4`);


    






  }

  function resultados() {
    const obj1 = select;
    const obj2 = resultado;
    const result = obj2.map((obj) => ({
      ...obj,
      isPresent: obj1.some(({ id }) => id === obj.id),
    }));
    console.log(result);

    let redCars = result.filter((car) => car.isPresent === true);
    console.log(redCars);

    var total = redCars.reduce(getTotal, 0);
    function getTotal(total, item) {
      return total + item.valor * item.mult;
    }

    alert(`Parabens Voce ganhou, ${total.toFixed(2)} dados sorteados Preto 1 , vermelho 2 , preto 4` );

    // setResultado(redCars);
  }

  function getjogo() {
    const options = { method: "GET", url: "http://dado.rutherles.site/api" };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setDados(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    setTimeout(getjogo, 3000);
  }

  return (
    <View backgroundColor="#0c0c0e" flex>
      <View style={styles.title1}>
        <TouchableOpacity onPress={() => navigation.navigate("Início")}>
          <AntDesign style={styles.iconRight} name="left" />
        </TouchableOpacity>
        <Text style={styles.title}>Lance sua sorte</Text>
      </View>


      <View>
        <YoutubePlayer height={200} play={true} videoId={"AccCr6dU44s"} />
        <Center>
          {!valor ? <Text style={styles.title}>Escolha seus números</Text> :<Text style={styles.title}>Aguardando Resultado</Text> }
          
        </Center>
      </View>

      { !valor ?

      <FlatGrid
        verti
        itemDimension={50}
        data={dados}
        style={styles.gridView}
        spacing={10}
        renderItem={({ item }) => (
          <View
            style={[
              styles.itemContainer,
              {
                backgroundColor: select.find((car) => car.id === item.id)
                  ? "#40e796"
                  : item.color,
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => dado({ id: item.id })}
            >
              <Image style={{ width: 60, height: 60 }} source={item.imagem} />
            </TouchableOpacity>

            {item.id == ids ? (
              <ActionSheet
                title={"Escolha o valor"}
                message={"teste"}
                useNativeIOS={false}
                options={[
                  {
                    label: "Cancelar Aposta",
                    onPress: () => cancel({ id: item.id }),
                  },
                  {
                    label: "R$ 2,00",
                    onPress: () =>
                      selecionar({
                        id: item.id,
                        valor: 2,
                        cor: item.cor,
                        mult: item.mult,
                      }),
                  },
                  {
                    label: "R$ 5,00",
                    onPress: () =>
                      selecionar({
                        id: item.id,
                        valor: 5,
                        cor: item.cor,
                        mult: item.mult,
                      }),
                  },
                  {
                    label: "R$ 10,00",
                    onPress: () =>
                      selecionar({
                        id: item.id,
                        valor: 10,
                        cor: item.cor,
                        mult: item.mult,
                      }),
                  },
                ]}
                visible={visible}
                onDismiss={() => setVisible(false)}
              />
            ) : (
              <View></View>
            )}
          </View>
        )}
      />

          : <View style={{height:250,marginTop:50 }}>
      <Spinner color="emerald.500" size="lg"  accessibilityLabel="Esperando resultado" />


          </View>  }

      <View style={styles.button}>
        <Button
          onPress={jogarD}
          color="#000"
          backgroundColor="#40e796"
          style={{ marginBottom: 10, width: "90%", borderRadius: 7 }}
          label="Apostar"
        ></Button>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  gridView: {
    marginTop: 30,
    flex: 1,
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 0,
    padding: 0,
    height: 70,
    width: 70,
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  title1: {
    marginTop: 35,
    flexDirection: "row",
    alignItems: "center",
  },
  iconRight: {
    fontSize: 20,
    marginRight: 30,
    marginTop: 20,
    marginLeft: "23%",
    marginRight: 12,
    color: "#fff",
  },
});

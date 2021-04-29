import React from 'react';
import { ImageBackground,StyleSheet,Text,TouchableOpacity, View } from 'react-native';

function Home ({history}) {
    return (
        <View style={styles.container}>

<Text style={styles.home}>Home</Text>
<TouchableOpacity style={styles.btn} onPress={()=>history.push("/login")}><Text>login</Text></TouchableOpacity>
<TouchableOpacity  style={styles.btn} onPress={()=>history.push("/singUp")}><Text>SingUp</Text></TouchableOpacity>
<TouchableOpacity  style={styles.btn} onPress={()=>history.push("/aide")}><Text>Add Futor </Text></TouchableOpacity>
<TouchableOpacity  style={styles.btn} onPress={()=>history.push("/place")}><Text>Add Place </Text></TouchableOpacity>
<TouchableOpacity  style={styles.btn} onPress={()=>history.push("/login")}><Text>Place list </Text></TouchableOpacity>
<TouchableOpacity  style={styles.btn} onPress={()=>history.push("/login")}><Text>Futor list </Text></TouchableOpacity>

        </View>


    )
}
const styles = StyleSheet.create({
    btn:{
      marginTop:60,
      width:"80%",
      backgroundColor:"beige",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10,
      marginLeft:40,

    },
    home :{
     marginTop:50,
      marginLeft:140,
      fontSize:26
    }
})
export default Home;
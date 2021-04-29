
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

function aide ({history}) { 
    return (
      <View style={styles.container}>
        <Text style={styles.logo} onPress={()=>history.push("/")}>Add aide</Text>
        <View style={styles.inputView} >
        <TextInput
      style={styles.inputDescription}
      placeholder="Description..." 
      placeholderTextColor="#003f5c"
    //   numberOfLines={10}
    //   multiline={true}
    />
    
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="latitude..." 
            placeholderTextColor="#003f5c"
           />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="longitude..." 
            placeholderTextColor="#003f5c"
           />
        </View>
       
       
      
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Add </Text>
        </TouchableOpacity>
      
      
  
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"white",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"black",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:10,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white",
  },
  loginSingup:{
    marginTop:15
  },
  inputDescription:{
height:150,
// backgroundColor:"black"
  }
});

export default aide;
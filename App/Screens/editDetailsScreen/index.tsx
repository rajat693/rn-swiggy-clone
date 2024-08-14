import React,{ useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { CloneContext } from '../../usingContextApi';
import Snackbar from "react-native-snackbar";
import styles from './styles';

export function EditDetailsScreen({navigation}:{navigation:any}) {

    const { name, setName, number, setNumber, email, setEmail }: any = useContext(CloneContext);
    // console.log(  CloneContext);

    const [inpnameval, setInpnameVal] = React.useState(`${name}`); //initially input box mei text show karega and update textinput data
    const [inpnoval, setInpnoVal] = React.useState(`${number}`);
    const [inpemailval, setInpemailVal] = React.useState(`${email}`);

    const [editinp, changeinpEdit] = useState(false);
    const [focusinp, focusinpEdit] = useState(false);

    const ChangedVal= () => {
      setName(inpnameval);
      setNumber(inpnoval);
      setEmail(inpemailval);
    }
    const PreviousVal= () => {
      // setName(name);
      setInpnameVal(name);
      // setNumber(number);
      setInpnoVal(number);
      // setEmail(email);
      setInpemailVal(email);
    }
    const InputEditableTrue= () => {
      changeinpEdit(true);
    }
    const InputEditableFalse= () => {
      changeinpEdit(false);
    }
    const InputFocusTrue= () => {
      focusinpEdit(true);
    }

    const [nameedit, setNameEdit] = useState(true);
    const [noedit, setNoEdit] = useState(true);
    const [emailedit, setEmailEdit] = useState(true);
    const [editnameVal, setNameEditVal] = useState("EDIT");
    const [editnoVal, setNoEditVal] = useState("EDIT");
    const [editemailVal, setEmailEditVal] = useState("EDIT");

    const handlingNameEditText = () =>{
      if(nameedit==true)
      {setNameEdit(false);
        setNameEditVal("");
      }
      else
      {setNameEdit(true);
        setNameEditVal("EDIT");
      }
    }
    const handlingNoEditText = () =>{
      if(noedit==true)
      {setNoEdit(false);
        setNoEditVal("");
      }
      else
      {setNoEdit(true);
        setNoEditVal("EDIT");
      }
    }
    const handlingEmailEditText = () =>{
      if(emailedit==true)
      {setEmailEdit(false);
        setEmailEditVal("");
      }
      else
      {setEmailEdit(true);
        setEmailEditVal("EDIT");
      }
    }


    const [namestate, setNameState]= useState(false);
    const [nostate, setNoState]= useState(false);
    const [emailstate, setEmailState]= useState(false);
    const handlingNameEdit = () =>{
      if(namestate==true)
      setNameState(false);
      else
      setNameState(true);
    }
    const handlingNoEdit = () =>{
      if(nostate==true)
      setNoState(false);
      else
      setNoState(true);
    }
    const handlingEmailEdit = () =>{
      if(emailstate==true)
      setEmailState(false);
      else
      setEmailState(true);
    }

    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
      setTimeout(()=>{
        setLoading(false);
      },1000);
    }, []);

  return (

    <View style={styles.container}>

      <>
        { isLoading ? (
          <ActivityIndicator style={{flex:1, justifyContent:"center", alignItems:"center"}} size="large" color="#ff6600"/>
        ) : (
          <>
          <View style={styles.view0}>
          </View>

          <View style={styles.view1}>
            <View style={styles.view1a}>
            <Text>
                <Text onPress={()=>{navigation.navigate("PersonalDetails") }}>
                <AntDesignIcon name="arrowleft" size={25} color="black"/>
                </Text>
                <Text style={{paddingBottom:15,fontWeight:"bold",fontSize:18,}}>  EDIT ACCOUNT</Text>
            </Text>
            </View>
            <View style={styles.view1b}>
            
            </View>
          </View>

          <View style={{ width:"100%", borderColor: '#C2C1C1', borderWidth:.5 }}/>

          <View style={styles.view3}>
            <View style={styles.view3a}>
                <Text style={{ fontSize:14, color:"#6F6E6E"}}>NAME{"\n"}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setInpnameVal}
                    value={inpnameval}
                    editable={editinp}
                    autoFocus={focusinp} 
                />
            </View>
            <View style={styles.view3b}>
                <TouchableOpacity onPress={()=>{InputEditableTrue(), InputFocusTrue(), handlingNameEdit(), handlingNameEditText() }}>
                  {
                    (nameedit)?(
                      <Text style={{color:"#ff6600", fontWeight:"bold", fontSize:16}}>
                        {editnameVal}
                      </Text>
                    ) : (
                      <Text style={{color:"#ff6600", fontWeight:"bold", fontSize:16}}>
                        {editnameVal}
                      </Text>
                    )
                  }
                </TouchableOpacity>
              </View>
          </View>
          { (namestate) ? (
            <>
            <View style={styles.orangelineview}/>

            <View style={styles.newview}>
                <View style={{width:"45%"}}>
                  <TouchableOpacity style={styles.updatebtn} onPress={()=>{ InputEditableTrue(), InputFocusTrue(), ChangedVal(), InputEditableFalse(), handlingNameEdit(), handlingNameEditText(), Snackbar.show({
                    text:"Name updated.",
                    duration: Snackbar.LENGTH_SHORT,
                  }) 
                  }}>
                  <Text style={{color:"white", fontWeight:"bold", fontSize:16,}}> UPDATE </Text>
                  </TouchableOpacity>
                </View>
                <View style={{width:"45%"}}>
                  <TouchableOpacity style={styles.cancelbtn} onPress={()=>{ InputEditableFalse(), PreviousVal(), handlingNameEdit(), handlingNameEditText() }}>
                  <Text style={{color:"#ff6600", fontWeight:"bold", fontSize:16,}}> CANCEL </Text>
                  </TouchableOpacity>
                </View>
            </View>
            </>
          ) :(null)
          }

          <View style={styles.greylineview}/>
          <View style={styles.view3}>
            <View style={styles.view3a}>
                <Text style={{ fontSize:14, color:"#6F6E6E"}}>PHONE NUMBER{"\n"}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setInpnoVal}
                    value={inpnoval}
                    editable={editinp}
                    autoFocus={focusinp} 
                />
            </View>
            <View style={styles.view3b}>
                <TouchableOpacity onPress={()=>{InputEditableTrue(), InputFocusTrue(), handlingNoEdit(), handlingNoEditText() }}>
                  {
                    (noedit)?(
                      <Text style={{color:"#ff6600", fontWeight:"bold", fontSize:16}}>
                        {editnoVal}
                      </Text>
                    ): (
                      <Text style={{color:"#ff6600", fontWeight:"bold", fontSize:16}}>
                        {editnoVal}
                      </Text>
                    )
                  }
                </TouchableOpacity>
              </View>
          </View>
          { (nostate) ? (
            <>
            <View style={styles.orangelineview}/>
            
            <View style={styles.newview}>
                <View style={{width:"45%"}}>
                  <TouchableOpacity style={styles.updatebtn} onPress={()=>{ InputEditableTrue(), InputFocusTrue(), ChangedVal(), InputEditableFalse(), handlingNoEdit(), handlingNoEditText(),
                  Snackbar.show({
                    text:"Phone Number updated.",
                    duration: Snackbar.LENGTH_SHORT,
                  }) 
                   }}>
                  <Text style={{color:"white", fontWeight:"bold", fontSize:16,}}> UPDATE </Text>
                  </TouchableOpacity>
                </View>
                <View style={{width:"45%"}}>
                  <TouchableOpacity style={styles.cancelbtn} onPress={()=>{ InputEditableFalse(), PreviousVal(), handlingNoEdit(), handlingNoEditText() }}>
                  <Text style={{color:"#ff6600", fontWeight:"bold", fontSize:16,}}> CANCEL </Text>
                  </TouchableOpacity>
                </View>
            </View>
            </>
          ) :(null)
          }

          <View style={styles.greylineview}/>
          <View style={styles.view3}>
            <View style={styles.view3a}>
                <Text style={{ fontSize:14, color:"#6F6E6E"}}>EMAIL ADDRESS{"\n"}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setInpemailVal}
                    value={inpemailval}
                    editable={editinp}
                    autoFocus={focusinp} 
                />
            </View>
            <View style={styles.view3b}>
                <TouchableOpacity onPress={()=>{InputEditableTrue(), InputFocusTrue(), handlingEmailEdit(), handlingEmailEditText() }}>
                  {
                    (emailedit)?(
                      <Text style={{color:"#ff6600", fontWeight:"bold", fontSize:16}}>
                        {editemailVal}
                      </Text>
                    ): (
                      <Text style={{color:"#ff6600", fontWeight:"bold", fontSize:16}}>
                        {editemailVal}
                      </Text>
                    )
                  }
                </TouchableOpacity>
              </View>
          </View>

          <View style={styles.greylineview}/>

          { (emailstate) ? (
            <>
            <View style={styles.orangelineview}/>
          
            <View style={styles.newview}>
                <View style={{width:"45%"}}>
                  <TouchableOpacity style={styles.updatebtn} onPress={()=>{ InputEditableTrue(), InputFocusTrue(), ChangedVal(), InputEditableFalse(), handlingEmailEdit(), handlingEmailEditText(),
                  Snackbar.show({
                    text:"Email Address updated.",
                    duration: Snackbar.LENGTH_SHORT,
                  }) 
                   }}>
                  <Text style={{color:"white", fontWeight:"bold", fontSize:16,}}> UPDATE </Text>
                  </TouchableOpacity>
                </View>
                <View style={{width:"45%"}}>
                  <TouchableOpacity style={styles.cancelbtn} onPress={()=>{ InputEditableFalse(), PreviousVal(), handlingEmailEdit(), handlingEmailEditText() }}>
                  <Text style={{color:"#ff6600", fontWeight:"bold", fontSize:16,}}> CANCEL </Text>
                  </TouchableOpacity>
                </View>
            </View>
            </>
          ) :(null)
          }
          </>
        )}
      </>
      
    </View>
  );
};


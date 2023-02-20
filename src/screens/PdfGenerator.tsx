
import {
    
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";
import { Colors } from "../Colors";

const GeneratePdf =()=>{
    
    const styles = StyleSheet.create({
        quest:{
         
          fontSize:"15px",
          marginBottom:"5px"

        },
        options:{
          alignItems:"center",
          marginBottom:"5px",
          fontSize:"14px"
          
          ,color:Colors.textColor2,
          marginLeft:10,
          fontWeight:"light",

        },
        watertext:{
          fontSize:"120px",
          opacity:0.1,
          
        
          

        },


        page: {
          position:"relative",
          backgroundColor: "white",
          color: "black",
          
          paddingVertical:"30px",
          paddingHorizontal:"10px",
        
        
        },
        waterdrop:{
          position:"absolute",
          
          width:"100%",
          height:"100%",
          justifyContent:"center",
          alignItems:"center",


        },
        option_box:{
          width:"18",height:"18",
          borderRadius:"9px",
          backgroundColor:Colors.textColor1,
          justifyContent:"center",
          alignItems:"center"
        },
        creator_box:{
          position:"absolute",
          bottom:"10px",
          right:"20px"
        },
        creator_text:{
          fontStyle:"italic",
          color:Colors.textColor1,
          textDecorationLine: 'underline',
        },
        section: {
        paddingHorizontal:"12",
        
        marginBottom:"10"
        },
        viewer: {
          width: window.innerWidth, //the pdf viewer will take up all of the width and height
          height: window.innerHeight,
        },

       
      });


    return (
       <div>
  <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document 
      author="Muzamil Hussain"
      title="Mcqs  "
      creator="Muzamil Hussain"
      >
        {/*render a single page*/}
        <Page wrap={true} size="A4" style={styles.page}>
        {
              [...Array(10)].map((_,i)=>(
                <View style={styles.section}>
          
                <Text style={styles.quest} >Q-{1} What is your name Tell me about that</Text>
                {
                   [...Array(4)].map((_,i)=>(
                   
                   <View  style={{flexDirection:"row"}}  key={i}>
                    
                    <View style={styles.option_box} >
                      <Text style={{fontSize:"11px",color:"white",fontWeight:"semibold"}} >{i===0 && "a"}{i===1 && "b"}{i===2&& "c"}{i===3 && "d"}</Text>
                    </View>
                    <Text style={styles.options} >Muzamil Hussain</Text>
                    
                   </View>
          
                   ))
           }
               
               </View>
             
              ))
      }

         
         <View style ={styles.waterdrop} >
            <Text style={styles.watertext}>Examica</Text>
         </View>
         <View style ={styles.creator_box} >
            <Text style={styles.creator_text}>Created by : Muzamil hussain</Text>
         </View>

        </Page>
      </Document>
    </PDFViewer>

       </div>
    )
}

export default GeneratePdf
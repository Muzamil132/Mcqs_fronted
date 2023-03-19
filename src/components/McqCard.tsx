import { Colors } from "../Colors"
import {Box,Typography ,Paper, Button} from "@mui/material"
import { QuestType} from "../actions/addQuestion"
import { useNavigate } from "react-router"

interface IProps{
  
    questionItem:QuestType,
    key1:number,
 


}


const McQCard =({questionItem}:IProps)=>{
  const navigate = useNavigate()
    return(
        <Box>
        <Paper sx={{
          p:2,
          mt:1
        }}  >
         <Typography className="grad" fontWeight="600" sx={{marginRight:"5px",color:"white",borderRadius:"5px",width:"90px",px:"5px",py:"2px",textAlign:"center",fontSize:"15px",marginBottom:"5px"}}   variant="body1" >
                 Question-{(2-1)*10 +1}
         </Typography> 
         <Typography sx={{fontSize:"16px",fontWeight:"500",fontFamily:"Roboto"}} variant="body1"  >{questionItem.question}</Typography>
         { 
            questionItem.options.map((option,i)=>(
                <div key={i} className="option_box" >
                  
                  <div className="option">
                      {i===0 && <span>A</span>}
                      {i===1 && <span>B</span>}
                      {i===2 && <span>C</span>}
                      {i===3 && <span>D</span>}
                  </div>

                 <Box
                 sx={{
                 
                  display:"flex",
                  justifyContent:"space-between",
                  alignItems:"center",
                  px:0.5,
                  py:0.5,
                  maxWidth:"280px",
                  width:"90%",
                  marginLeft:"5px",
                 
                  
                  borderRadius:"10px"
                 }}
                 >
                <Typography   key={i}  sx={{cursor:"pointer",fontSize:"15px",marginLeft:"5px",fontWeight:option.optionvalue===questionItem.answer?"600":"500"}} >
                 {option.optionvalue}
                </Typography>

              
                
                </Box>
                  
                 
                
                </div>
              
              ))
               
             } 
             {
               
             } 
            
             
               <div className="btn_box" >
                
                 <Button 
                   onClick={()=>navigate(`/questions/edit/${questionItem.id}`)}
                  sx={{
                  borderRadius:"10px",
                  marginTop:"10px",
                 
                  background:Colors.purple,
                  
                  color:"white","&:hover":{
                    background:Colors.bggray,
                    color:"black",
                    border:"1px solid black"
                  }
                }}>
                  EDIT
                 </Button>
                 </div>
         </Paper>
    </Box>

    )

}

export default McQCard
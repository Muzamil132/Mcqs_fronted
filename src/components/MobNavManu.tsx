import { Button } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { sideItemList } from './SIdeItems'

const MobNavManu = () => {
  return (
   
        <Stack  
         direction="row"
    
         sx={{
            px:2,
           
            overflowY:"auto",
            flexDirection:'row'
                  ,
           backgroundColor:"blue"
        }}
        >
            {
                sideItemList.map((item,i)=>(

                    <p
                     style={{marginLeft:"20px",width:"300px"}}
                    >
                        {item.title}
                    </p>

                ))
            }

        </Stack>
   
  )
}

export default MobNavManu

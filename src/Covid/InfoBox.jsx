import { Avatar, Card, CardContent, Typography } from '@material-ui/core'

import React from 'react'

const InfoBox = ( {title , cases , todayCases } ) => {
          return (
                    <div>
                 
                    <Card>
     <CardContent>
       <Typography>
        <h1>{title}</h1> 
       
       </Typography>

       <Typography color='secondary'>
        Total: {cases}
       </Typography>

       <Typography color='primary'>
        Today: {todayCases}
       </Typography>
       

     </CardContent>
 
                   </Card>    

                   
                    </div>
          )
}

export default InfoBox

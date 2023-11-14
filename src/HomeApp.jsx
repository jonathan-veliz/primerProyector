import { Button } from "@mui/material"


 const name="Lucas"
  
   
   const HomeApp = () => {
     return (
      <div>
        <h1>Hola mundo!</h1>
        <p>{name}</p>
        <Button variant="contained">enviar</Button>
        
      </div>
    

      
     )
   }
   
   export default HomeApp
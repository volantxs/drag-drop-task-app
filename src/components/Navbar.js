import { Button } from "@chakra-ui/react";
import React, { useState } from "react";

export function Navbar() {
    return(
    <Button 
      margin={7} 
      bg={"purple.200"} 
      color={"purple.600"} 
      onClick={(e) => handleNewCard(e)}>
        New Card
    </Button>
    );
    
}

function handleNewCard() {
  
}


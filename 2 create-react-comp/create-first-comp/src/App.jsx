// normal functional components
import * as React from "react";
import { Button } from "@chakra-ui/react";
import AnuragButton from "./AnuragButton";
import Hello from "./hello";
import Random from "./random";
function App() {
  let name = "Anurag";
  let fullName = () => {
    return "anurag Rai";
  };
  let number = 456;
  return (
    <>
      <h1> `this is the {name}"s computer.'`</h1>
      <h1> `this is the {fullName()}"s computer.'`</h1>
      <h1> `this is the {number}"s computer.'`</h1>
      <Button> please click </Button>
      <Button> please click </Button>
      <Button> please click </Button>
      <Random />
      <Random />
    </>
  );
}

export default App;

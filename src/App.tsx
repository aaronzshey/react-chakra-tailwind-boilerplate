import "./App.css";
import { Text, Center } from "@chakra-ui/react";
function App() {
  return (
    <>
      <Center className="w-screen h-screen absolute">
        <Text className="bg-purple-100 text-black text-6xl font-black">
          Hello World!
        </Text>
      </Center>
    </>
  );
}

export default App;

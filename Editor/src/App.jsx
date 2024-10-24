import { Box } from "@chakra-ui/react";
import { CodeEditor } from "./components/codeeditor";
function App() {
  return (
    <Box minH={"100vh"} bg={"#0f0a19"} color={"gray.500"} px={6} py={4}>
      <CodeEditor />
    </Box>
  );
}

export default App;

import React from "react";
import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { ExecuteCode } from "../api";
import { useState } from "react";

const Output = ({ editorRef, language }) => {
  const [output, setoutput] = useState(null);
  const [loading, setloading] = useState(false);
  const [iserror, setiserror] = useState(false);
  const toast = useToast();
  const RunCode = async () => {
    const SourceCode = editorRef.current.getValue();
    if (!SourceCode) {
      return;
    }
    try {
      setloading(true);
      const { run: result } = await ExecuteCode(language, SourceCode);
      setoutput(result.output.split("\n"));
      result.stderr ? setiserror(true) : setiserror(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "An error occured",
        description: error.message || "unable to run code",
        status: "error",
        duration: 6000,
      });
    } finally {
      setloading(false);
    }
  };

  return (
    <Box w={"50%"}>
      <Text mb={2} fontSize={"lg"}>
        Output
      </Text>
      <Button variant={"outline"} colorScheme="green" mb={4} onClick={RunCode}>
        Run code
      </Button>
      <Box
        height={"75vh"}
        p={2}
        color={iserror ? "red.400" : ""}
        border={"1px solid"}
        borderRadius={4}
        borderColor={iserror ? "red.500" : "#333"}
      >
        {output
          ? output.map((line, i) => <Text key={i}>{line}</Text>)
          : 'Click "Run Code" to see the output here'}
      </Box>
    </Box>
  );
};

export default Output;

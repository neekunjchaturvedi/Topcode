import { Box, HStack } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./languageselector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";

export const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setvalue] = useState("");
  const [lang, setlang] = useState("javascript");
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (lang) => {
    setlang(lang);
    setvalue(CODE_SNIPPETS[lang]);
  };

  return (
    <Box>
      <HStack spacing={4}>
        <Box w={"50%"}>
          <LanguageSelector lang={lang} onSelect={onSelect} />
          <Editor
            height="70vh"
            language={lang}
            defaultValue={CODE_SNIPPETS[lang]}
            theme="vs-dark"
            onMount={onMount}
            value={value}
            onChange={(value) => setvalue(value)}
          ></Editor>
        </Box>
        <Output editorRef={editorRef} language={lang} />
      </HStack>
    </Box>
  );
};

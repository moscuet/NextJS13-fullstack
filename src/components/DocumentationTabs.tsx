"use client";
import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import CodeSnippet from "./CodeSnippet";
import { nodejs, php, python } from "@/const/code-snippet";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

const DocumentationTabs: FC = () => {
  return (
    <Tabs defaultValue="nodejs" className="w-full lg:text-left text-center text-sm  md:text-md lg:text-lg">
      <TabsList className="pl-0 mb-5 flex justify-center">
        <TabsTrigger  className="text-xs sm:text:sm md:text-md lg:text-lg min-w-[70px] sm:min-w-[80px] md:min-w-[100px]" value={"nodejs"}> Node JS</TabsTrigger>
        <TabsTrigger className="text-xs sm:text:sm md:text-md lg:text-lg min-w-[70px] sm:min-w-[80px] md:min-w-[100px]"  value={"php"}> Php</TabsTrigger>
        <TabsTrigger className="text-xs sm:text:sm md:text-md lg:text-lg min-w-[70px] sm:min-w-[80px] md:min-w-[100px]"  value={"python"}> Python</TabsTrigger>
      </TabsList>
      <TabsContent value={"nodejs"}>
        <SimpleBar>
          <CodeSnippet
            animated
            CodeSnippet={nodejs}
            language={"nodejs"}
            show
          ></CodeSnippet>
        </SimpleBar>
      </TabsContent>
      <TabsContent value={"php"}>
        <SimpleBar>
          <CodeSnippet
            animated
            CodeSnippet={php}
            language={"php"}
            show
          ></CodeSnippet>
        </SimpleBar>
      </TabsContent>
      <TabsContent value={"python"}>
        <SimpleBar>
          <CodeSnippet
            animated
            CodeSnippet={python}
            language={"python"}
            show
          ></CodeSnippet>
        </SimpleBar>
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;

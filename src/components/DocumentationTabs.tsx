'use client'
import { FC } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs'
import CodeSnippet from './CodeSnippet'
import { nodejs, php, python } from '@/const/code-snippet'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';


const DocumentationTabs: FC = () => {
    return <Tabs defaultValue='nodejs' className='w-full lg:text-left text-center'>
        <TabsList className='pl-0'>
            <TabsTrigger value={'nodejs'}> Node JS</TabsTrigger>
            <TabsTrigger value={'php'}> Php</TabsTrigger>
            <TabsTrigger value={'python'}> Python</TabsTrigger>
        </TabsList>
        <TabsContent value={'nodejs'}>
            <SimpleBar>
            <CodeSnippet animated CodeSnippet={nodejs} language={'nodejs'} show></CodeSnippet>
            </SimpleBar>
      </TabsContent>
        <TabsContent value={'php'}>
            <SimpleBar>
            <CodeSnippet animated CodeSnippet={php} language={'php'} show></CodeSnippet>
            </SimpleBar>
      </TabsContent>
        <TabsContent value={'python'}>
            <SimpleBar>
            <CodeSnippet animated CodeSnippet={python} language={'python'} show></CodeSnippet>
            </SimpleBar>
      </TabsContent>
    </Tabs> 
}

export default DocumentationTabs
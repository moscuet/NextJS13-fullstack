import { FC } from 'react'
import { Tabs, TabsList, TabsTrigger } from './ui/Tabs'

interface DocumentationTabsProps {

}

const DocumentationTabs: FC = () => {
    return <Tabs className='max-w-2xl w-full'>
        <TabsList>
            <TabsTrigger value={'React'}> React</TabsTrigger>
            <TabsTrigger value={'TypeScript'}> TypeScript</TabsTrigger>
            <TabsTrigger value={'Python'}> Python</TabsTrigger>
        </TabsList>
    </Tabs> 
}

export default DocumentationTabs
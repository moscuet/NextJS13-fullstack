'use client'

import { useTheme } from 'next-themes'
import { Highlight, themes, type Language } from 'prism-react-renderer';
import { FC, useEffect, useState } from 'react'

interface CodeSnippetProps {
  CodeSnippet: string
  language: Language
  show: boolean
  animated?: boolean
  animationDelay?: number
}

const CodeSnippet: FC<CodeSnippetProps> = ({
  CodeSnippet,
  language,
  show,
  animated,
  animationDelay,
}) => {
  const { theme: applicationTheme } = useTheme()
  const [text, setText] = useState<string>(animated ? '' : CodeSnippet)
  const { nightOwl: darkTheme , nightOwlLight: lightTheme } = themes;

  useEffect(() => {
    if (show && animated) {
      let i = 0
      setTimeout(() => {
        const intervalId = setInterval(() => {
          setText(CodeSnippet.slice(0, i))
          i++
          if (i > CodeSnippet.length) {
            clearInterval(intervalId)
          }
        }, 15)

        return () => clearInterval(intervalId)
      }, animationDelay || 150)
    }
  }, [CodeSnippet, show, animated, animationDelay])

  const numberOfline = text.split(/\r\n|\r|\n/).length

  const theme = applicationTheme === 'light' ? lightTheme : darkTheme

  return (
        <Highlight code={text} language={language} theme={theme}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={
            className +
            'transition-all w-fit bg-transparent duration-100 py-0 no-scrollbar'
          }
          style={{
            maxHeight: show ? numberOfline * 24 : 0,
            opacity: show ? 1 : 0,
          }}>
          {tokens.map((line, i) => {
            const { key, ...rest } = getLineProps({ line, key: i })
            return (
              <div key={`line-${i}`} style={{ position: 'relative' }} {...rest}>
                {line.map((token, index) => {
                  const { key, ...props } = getTokenProps({ token, i })
                  return <span key={index} {...props} />
                })}
              </div>
            )
          })}
        </pre>
      )}
    </Highlight>
  
  )


}

export default CodeSnippet
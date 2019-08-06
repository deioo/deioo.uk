import App, { Container } from 'next/app'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { DefaultSeo } from 'next-seo'

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(245, 246, 244, 0);
    background-color: #ffffff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    scroll-behavior: smooth;
  }
`

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <GlobalStyle />
        <DefaultSeo
          title="Front-end Developer. London."
          titleTemplate="Andrei Popa | %s"
          description="Front-end developer based in London. Proud Featurist."
          keywords="react, react native, tailwind css, HTML5, CSS3, animations, javascript, sass, node, agile, bdd, tdd"
          openGraph={{
            type: 'website',
            locale: 'en_IE',
            url: 'https://deioo.uk/',
            site_name: 'Andrei Popa',
          }}
          twitter={{
            handle: '@deioo',
            site: '@deioo',
            cardType: 'summary_large_image',
          }}
        />
        <Component {...pageProps} />
      </Container>
    )
  }
}

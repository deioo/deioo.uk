/* eslint-disable react/no-array-index-key */
import React from 'react'
import styled, { css } from 'styled-components'
import tw from 'tailwind.macro'
import theme from 'tailwindcss/defaultTheme'
import { Parallax } from 'react-spring/addons.cjs'
import Hero from '../components/Hero'
import Container from '../components/Container'
import Inner from '../elements/Inner'
import { UpDown } from '../styles/animations'
import { DividerMiddle } from '../elements/Dividers'

const { screens } = theme

const screenMd = screens.md

const H1Styles = css`
  ${tw`text-center text-white font-serif`};
  ${tw`text-4xl md:text-6xl`};
  text-shadow: -3px -3px 0 rgba(0, 0, 0, 0.02), 3px -3px 0 rgba(0, 0, 0, 0.02), -3px 3px 0 rgba(0, 0, 0, 0.02),
    3px 3px 0 rgba(0, 0, 0, 0.02);
`

const H1 = styled.h1`
  ${H1Styles};
`

const Text = styled.p`
  ${tw`md:text-left text-gray-300 font-sans tracking-wide leading-relaxed`};
  ${tw`text-lg md:text-2xl`};
  ${props => props.center && tw`text-center md:text-center`}
`

const WrapBlock = tw.span`block md:inline-block`

const Char = styled(UpDown)``

const Links = tw.div`md:flex md:items-center md:justify-center md:justify-start`

const Link = styled.a`
  ${tw`block md:inline-block md:text-left text-white font-sans font-semibold`};
  ${tw`text-lg md:text-2xl`};
  ${tw`hover:text-black`};

  @media only screen and (min-width: ${screenMd}) {
    &:not(:last-child)::after {
      content: '';
      margin-left: 20px;
      margin-right: 20px;
    }
  }
`

const animatedText = (text, drop) =>
  text.split('').map((c, index) => (
    <Char key={`char-${c}-${index}`} drop={drop} duration={5 + Math.random() * 10} delay={100 * Math.random() * 15}>
      {c}
    </Char>
  ))

function Index() {
  return (
    <Parallax pages={2}>
      <Hero offset={0}>
        <Inner>
          <H1>
            <WrapBlock>{animatedText('ANDREI', true)}</WrapBlock> <WrapBlock>{animatedText('POPA', true)}</WrapBlock>
          </H1>
          <Text center style={{ marginBottom: 100 }}>
            Front-end Developer • London
          </Text>
        </Inner>
      </Hero>
      <DividerMiddle
        bg="linear-gradient(90deg, rgb(111, 34, 83),rgb(253, 64, 149))"
        speed={0.1}
        offset={0.6}
        factor={2}
        clipPath="polygon(0 15%, 100% 5%, 100% 35%, 0 95%);"
      />
      <DividerMiddle
        bg="linear-gradient(90deg, rgb(252, 108, 53),rgb(170, 18, 159))"
        speed={0.2}
        offset={0.7}
        factor={2}
      />
      <Container offset={1} speed={0}>
        <Inner>
          <Text>
            Hi,
            <br />
            <br />
            I'm Andrei, a self-taught front-end developer with over 10 years experience in the media/advertising
            industry, never afraid of exploring new technologies and keen to solve challenging problems every day.
          </Text>

          <Text>Get in touch!</Text>

          <Links>
            <Link href="https://twitter.com/deioo" target="_blank">
              {animatedText('@deioo')}
            </Link>
            <Link href="mailto:therealdeioo@gmail.com">{animatedText('therealdeioo@gmail.com')}</Link>
          </Links>
        </Inner>
      </Container>
    </Parallax>
  )
}

export default Index

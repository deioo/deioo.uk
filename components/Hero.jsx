import React from 'react'
import PropTypes from 'prop-types'
import theme from 'tailwindcss/defaultTheme'
import { Divider } from '../elements/Dividers'
import Content, { Wrapper } from '../elements/Content'

const { colors } = theme

const grayDarkest = colors.gray['800']
const grayDarker = colors.gray['900']

const Hero = ({ children, offset }) => (
  <>
    <Divider bg={`linear-gradient(to bottom, ${grayDarkest} 0%, ${grayDarker} 100%)`} speed={0} offset={offset} />
    <Content speed={0.4} offset={offset}>
      <Wrapper>{children}</Wrapper>
    </Content>
  </>
)

export default Hero

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}

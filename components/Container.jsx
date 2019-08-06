import React from 'react'
import PropTypes from 'prop-types'
import Content, { Wrapper } from '../elements/Content'

const Container = ({ children, offset, speed }) => (
  <>
    <Content speed={speed} offset={offset}>
      <Wrapper>{children}</Wrapper>
    </Content>
  </>
)

export default Container

Container.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
  speed: PropTypes.number,
}

Container.defaultProps = {
  speed: 0.4,
}

import styled from 'styled-components'
import tw from 'tailwind.macro'
import { ParallaxLayer } from 'react-spring/addons.cjs'

const Content = styled(ParallaxLayer)`
  ${tw`px-6 md:px-12 lg:px-24 w-screen h-screen justify-center items-center flex z-50`};
`
const Wrapper = tw.div`w-full xl:w-2/3`

export default Content
export { Wrapper }

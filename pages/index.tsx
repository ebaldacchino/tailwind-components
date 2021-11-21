import tw from 'twin.macro'
import { Button, Logo } from '../components'
import IconButton from '../components/IconButton/styles'
import { AiOutlineUser } from 'react-icons/ai'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}
const App = () => (
  <div css={styles.container({ hasBackground: true })}>
    <div tw="flex flex-col justify-center h-full gap-y-5">
      <Button href="">Submit</Button>
      <Button href="" variant="outline">
        Cancel
      </Button>
      <Button href="" size="medium">
        Close
      </Button>
      <Button href="" variant="textOnly">
        Text Only
      </Button>
      <IconButton>
        <AiOutlineUser />
      </IconButton>
    </div>
    <Logo />
  </div>
)

export default App

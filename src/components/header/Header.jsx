import { Title } from './title/Title'
import { SearchBar } from './search-bar/SearchBar'
import WhiteLogo from '@/images/CNES_bleu.png'
import MTELogo from '@/images/min_transtion_ecologique_rvb_0.webp'
import IGEDDLogo from '@/images/IGEDD.png'
import { styled, theme } from '@/stitches.config'

const SDiv = styled('div', {
  height: '8vh',
  minHeight: '4rem',
  width: '100vw',
  backgroundColor: '$background',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.space.sm,
})

const LogoContainer = styled('div', {
  display: 'flex',
  height: '100%',
  minWidth: '28rem',
  maxWidth: '28rem',
})
const SImg = styled('img', {
  marginRight: '1rem',
  objectFit: 'contain',
})
export const Header = () => {
  return (
    <SDiv>
      <LogoContainer>
        <SImg src={WhiteLogo} alt="logo" />
        <SImg src={MTELogo} alt="logo" />
        <SImg src={IGEDDLogo} alt="logo" />
      </LogoContainer>
      <Title />
      <SearchBar />
    </SDiv>
  )
}

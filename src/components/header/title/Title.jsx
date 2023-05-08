import { styled } from '@/stitches.config'
const H1 = styled('h1', {
  'color': '$text',
  'fontSize': '2.2rem',
  'fontFamily': 'montserrat',
  'textTransform': 'uppercase',
  'letterSpacing': '.3rem',
  // adapt the font size to the screen size
  '@media (max-width: 1600px)': {
    fontSize: '2.0rem',
  },
  '@media (max-width: 1400px)': {
    fontSize: '1.8rem',
  },
  '@media (max-width: 1200px)': {
    fontSize: '1.6rem',
  },
  '@media (max-width: 1000px)': {
    fontSize: '1.4rem',
  },
  '@media (max-width: 800px)': {
    fontSize: '1.0rem',
  },
})

export const Title = () => {
  return <H1>Tableau de bord des volumes stockés</H1>
}

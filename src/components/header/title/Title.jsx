import { styled } from '@/stitches.config'
const H1 = styled('h1', {
  color: '$text',
  fontSize: 'clamp(0.875rem, 2vw - 0.25rem, 2.25rem)',
  fontFamily: 'montserrat',
  textTransform: 'uppercase',
  letterSpacing: '.3rem',
})

export const Title = () => {
  return <H1>Tableau de bord des volumes stockés</H1>
}

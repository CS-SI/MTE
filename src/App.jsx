/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import { useAppHook } from './AppHook'
import { Map } from '@components/map/Map'
import { Chart } from '@components/chart/Chart'
import { Dashboard } from '@components/dashboard/Dashboard'
import { Modal } from './components/modal/Modal'
import { globalStyles, styled, darkTheme } from '@/stitches.config'
globalStyles()
import 'leaflet/dist/leaflet.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import { Header } from './components/header/Header'
import { ErrorBoundary } from 'react-error-boundary'

const SAppContainer = styled('div', {
  display: 'flex',
  width: '100ww',
  height: '92vh',
})

const SMapChartContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '92vh',
  width: '87vw',
  position: 'relative',
})

const Container = styled('div', {
  backgroundColor: '$background',
  color: '$text',
})
const themeMap = {
  light: null,
  dark: darkTheme,
}
const ErrorDiv = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -20%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: 'auto',
  width: 'max-content',
  padding: '1rem',
  borderRadius: '5px',
  backgroundColor: 'white',
  color: 'black',
  border: '1px solid red',
  fontFamily: 'sans-serif',
  gap: '1rem',
})
const Button = styled('button', {
  'borderStyle': 'none',
  'cursor': 'pointer',
  'height': '60%',
  'padding': '0',
  'display': 'grid',
  'placeItems': 'center',
  'width': 'max-content',
  'backgroundColor': 'lightgray',
  'borderRadius': '5px',
  'border': '1px solid red',
  'padding': '0.5rem',

  '&:hover': { backgroundColor: 'gray' },
})
const ButtonContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
})

const ErrorFallBack = ({ error, resetErrorBoundary }) => {
  return (
    <ErrorDiv role="alert">
      <p>Une erreur s'est produite :</p>
      <p>
        Erreur: <br />
        <span>{error.message}</span>
      </p>

      <ButtonContainer>
        <Button onClick={resetErrorBoundary}>Reinitialiser</Button>
      </ButtonContainer>
    </ErrorDiv>
  )
}
const App = () => {
  const {
    toggleTheme,
    theme,
    showLakeInfo,
    isOneLakeActive,
    handleSetNoData,
    handleCanvas,
    canvas,
    noData,
    noDataFound,
    resetErrorBoundary,
  } = useAppHook()
  return (
    <Container className={themeMap[theme]}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      {showLakeInfo && <LakeCard />}
      <SAppContainer>
        <Dashboard canvas={canvas} />
        <SMapChartContainer>
          {noData && (
            <Modal
              isOpen={noData}
              handleSetNoData={handleSetNoData}
              noDataFound={noDataFound}
            />
          )}
          <Map isOneLakeActive={isOneLakeActive} />
          <ErrorBoundary
            FallbackComponent={ErrorFallBack}
            onReset={resetErrorBoundary}
          >
            {' '}
            {isOneLakeActive && <Chart handleCanvas={handleCanvas} />}
          </ErrorBoundary>
        </SMapChartContainer>
      </SAppContainer>
    </Container>
  )
}

export default App

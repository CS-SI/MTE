import useFormHook from './FormHook'
import { Checkbox } from '@components/checkbox/Checkbox'
import { Select } from '@components/select/Select'
import { SelectOption } from '@components/select/SelectOption'
import { styled, theme } from '@/stitches.config'
import { DataTypes, ChartTypes } from '../../config'
import { CarbonDocumentDownload, CarbonZoomReset } from '../carbon-icons'
import ReactTooltip from 'react-tooltip'
import {
  toggleOptic,
  toggleRadar,
  toggleDay,
  togglePeriod,
  setChartType,
  setAttributeValue,
  toggleReference,
  toggleVolume,
  toggleYear,
} from '../../stores/formSlice'
import { Radiobox } from '../radiobox/RadioBox'
import { Link } from 'react-router-dom'

const StyledContainer = styled('div', {
  fontFamily: 'sans-serif',
  color: '$text',
  display: 'flex',
  flexDirection: 'column',
  height: '50%',
  padding: theme.space.sm,
  minWidth: '100%',
  maxWidth: '100%',
})

const Div = styled('div', {
  marginBottom: theme.space.base,
})

const DivFlexRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-evenly',
  fontSize: theme.fontSizes.base,
})

const H3 = styled('h3', {
  fontFamily: 'sans-serif',
  marginBottom: theme.space.sm,
  fontSize: theme.fontSizes.base,
})
const ButtonIconContainer = styled('div', {
  marginTop: theme.space.xl,
  width: '100%',
  display: 'flex',
  justifyContent: 'end',
})

const ButtonIcon = styled('button', {
  'backgroundColor': '$background',
  'color': '$iconColor',
  'cursor': 'pointer',
  'borderColor': '$iconColor',
  'borderRadius': theme.borderRadius.xs,
  'marginLeft': theme.space.xs,
  '&:hover': {
    borderColor: '$iconHoverColor',
    color: '$iconHoverColor',
  },
})

const Tooltip = styled(ReactTooltip, {
  fontFamily: 'sans-serif',
  fontSize: `${theme.fontSizes.xs}!important`,
  marginTop: '0 !important',
  padding: '4px 8px !important',
  zIndex: '1111 !important',
})

const StickyP = styled('p', {
  position: 'fixed',
  bottom: 0,
  marginBottom: theme.space.xs,
  fontSize: theme.fontSizes.xs,
  color: '$text',
  textAlign: 'center',
})

const StyledLink = styled(Link, {
  'position': 'fixed',
  'bottom': '30px',
  'color': '$text',
  'fontSize': theme.fontSizes.xs,
  'textDecoration': 'none',
  'width': 'fit-content',
  'border': '1px solid $text',
  'borderRadius': theme.borderRadius.xs,
  'padding': theme.space.xs + ' ' + theme.space.sm,
  'opacity': 1,
  '&:hover': {
    opacity: 0.8,
    backgroundColor: '#00aaff',
    textDecoration: 'none',
  },
})

export const Form = ({ canvas }) => {
  const {
    chartTypesValues,
    dataTypesValues,
    observationTypesValues,
    durationValues,
    form,
    modeTypesValues,
    downloadChartImage,
    resetZoomChart,
    active,
  } = useFormHook({ canvas })
  return (
    <form action="">
      <StyledContainer>
        <Div>
          <H3>Type d'observation</H3>
          <DivFlexRow>
            <Checkbox
              storeAction={toggleOptic}
              id={observationTypesValues.OPTIC.abbr}
              label={observationTypesValues.OPTIC.label}
              abbr={observationTypesValues.OPTIC.abbr}
              value={form.OPTIC}
            />
            <Checkbox
              storeAction={toggleRadar}
              id={observationTypesValues.RADAR.abbr}
              label={observationTypesValues.RADAR.label}
              abbr={observationTypesValues.RADAR.abbr}
              value={form.RADAR}
            />
            <Checkbox
              storeAction={toggleReference}
              id={observationTypesValues.REFERENCE.label}
              label={observationTypesValues.REFERENCE.label}
              abbr={observationTypesValues.REFERENCE.label}
              value={form.REFERENCE}
            />
          </DivFlexRow>
        </Div>
        <Div>
          <H3>Période d'observation</H3>
          <DivFlexRow>
            <Radiobox
              storeAction={toggleDay}
              id={durationValues.DAY.abbr}
              name="duration"
              label={durationValues.DAY.label}
              abbr={durationValues.DAY.abbr}
              value={form.DAY}
            />
            <Radiobox
              storeAction={togglePeriod}
              id={durationValues.PERIOD.abbr}
              name="duration"
              label={durationValues.PERIOD.label}
              abbr={durationValues.PERIOD.abbr}
              value={form.PERIOD}
            />
          </DivFlexRow>
        </Div>
        <Div>
          <H3>Mode</H3>
          <DivFlexRow>
            <Checkbox
              storeAction={toggleVolume}
              id={modeTypesValues.VOLUME.label}
              label={modeTypesValues.VOLUME.label}
              abbr={modeTypesValues.VOLUME.label}
              value={form.VOLUME}
            />
            <Checkbox
              storeAction={toggleYear}
              id={modeTypesValues.YEAR.label}
              label={modeTypesValues.YEAR.label}
              abbr={modeTypesValues.YEAR.label}
              value={form.YEAR}
            />
          </DivFlexRow>
        </Div>
        <Div>
          <H3>Attribut</H3>
          <Select
            setAttributeValue={setAttributeValue}
            value={form.dataType}
            disabled={form.VOLUME}
          >
            <SelectOption
              value={DataTypes.FILLING_RATE}
              label={dataTypesValues.FILLING_RATE.label}
              disabled={form.VOLUME}
            />
            <SelectOption
              value={DataTypes.SURFACE}
              label={dataTypesValues.SURFACE.label}
              disabled={form.VOLUME}
            />
            <SelectOption
              value={DataTypes.VOLUME}
              label={dataTypesValues.VOLUME.label}
            />
          </Select>
        </Div>
        <Div>
          <H3>Type de graphique</H3>
          <Select setAttributeValue={setChartType} value={form.chartType}>
            <SelectOption
              value={ChartTypes.LINE}
              label={chartTypesValues.LINE.label}
            />
            <SelectOption
              value={ChartTypes.SCATTER}
              label={chartTypesValues.SCATTER.label}
            />
          </Select>
        </Div>
        {active.length > 0 && (
          <ButtonIconContainer>
            <ButtonIcon data-tip data-for="reset-zoom" onClick={resetZoomChart}>
              <CarbonZoomReset fontSize={20} />
            </ButtonIcon>
            <Tooltip id="reset-zoom" place="top" effect="solid">
              <span>Réinitialiser le zoom</span>
            </Tooltip>
            <ButtonIcon
              data-tip
              data-for="download"
              onClick={downloadChartImage}
            >
              <CarbonDocumentDownload fontSize={20} />
            </ButtonIcon>
            <Tooltip id="download" place="top" effect="solid">
              <span>Télécharger l'image du graphique</span>
            </Tooltip>
          </ButtonIconContainer>
        )}
        <StyledLink to="/about">À propos</StyledLink>
        <StickyP>Propulsé par CS Group</StickyP>
      </StyledContainer>
    </form>
  )
}

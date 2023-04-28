import DATA_TYPES from './DataTypes'
import OBSERVATION_TYPES from './ObservationTypes'
import DURATION_TYPES from './DurationTypes'
import CHART_TYPES from './ChartTypes'
import MODE_TYPES from './ModeTypes'

const config = {
  attributes: {
    [DATA_TYPES.FILLING_RATE]: {
      style: [
        {
          borderColor: 'rgb(255, 0, 0)',
          backgroundColor: 'rgba(255, 0, 0)',
          //pointBackgroundColor: "#760000",
        },
        {
          borderColor: 'rgb(126, 0, 0)',
          backgroundColor: 'rgba(126, 0, 0 )',
          // pointBackgroundColor: "#5C0000",
        },
      ],
      borderWidth: 1.2,
      tension: 0,
      pointRadius: 1.4,
      // pointRadius: 0,
      label: 'Taux de remplissage',
      filePath: 'filling_rate_raw',
      unit: '%',
      actionReducers: 'setAttributes',
    },
    [DATA_TYPES.SURFACE]: {
      style: [
        {
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235)',
          // pointBackgroundColor: "#000F45",
        },
        {
          borderColor: 'rgb(155, 100, 186)',
          backgroundColor: 'rgba(155, 100, 186)',
          // pointBackgroundColor: "#65368C",
        },
      ],
      borderWidth: 1.2,
      tension: 0,
      pointRadius: 1.4,
      label: 'Surface',
      filePath: 'surface_raw',
      unit: 'ha',
    },
    [DATA_TYPES.VOLUME]: {
      style: [
        {
          borderColor: 'rgb(127, 255, 0)',
          backgroundColor: 'rgba(127, 255, 0)',
          // pointBackgroundColor: "#006900",
        },
        {
          borderColor: 'rgb(222, 237, 25)',
          backgroundColor: 'rgba(222, 237, 25)',
          // pointBackgroundColor: "#465  }, []),,
        },
      ],
      borderWidth: 1.2,
      tension: 0,
      pointRadius: 1.4,
      label: 'Volume',
      filePath: 'volume_raw',
      unit: 'hm³',
    },
  },
  observationTypes: {
    [OBSERVATION_TYPES.OPTIC]: {
      abbr: 'MO',
      label: 'Optique',
    },
    [OBSERVATION_TYPES.RADAR]: {
      abbr: 'MR',
      label: 'Radar',
    },
    [OBSERVATION_TYPES.REFERENCE]: {
      abbr: 'ZSV_timeseries',
      label: 'Référence',
    },
  },
  duration: {
    [DURATION_TYPES.DAY]: {
      abbr: '1',
      label: '1 jour',
    },
    [DURATION_TYPES.PERIOD]: {
      abbr: '2',
      label: '10 jours',
    },
  },
  chartTypes: {
    [CHART_TYPES.LINE]: {
      label: 'Ligne',
    },
    [CHART_TYPES.SCATTER]: {
      label: 'Points',
    },
  },
  modeTypes: {
    [MODE_TYPES.VOLUME]: {
      label: 'Volume',
    },
    [MODE_TYPES.YEAR]: {
      label: 'Année',
    },
  },
}
export default config

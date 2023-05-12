import { AppConfig } from './../config'
export const getSeriePathByAttribute = (serie, attribute) => {
  return serie.filter(el => el.includes(attribute))
}

export const getSeriePathByObsTypeAndObsDepth = (serie, obsType, obsDepth) => {
  return serie.filter(el => el.includes(`${obsType}${obsDepth}`))
}

export const getSeriePath = (seriePath, form) => {
  const { dataType, DAY, PERIOD, OPTIC, RADAR, REFERENCE } = form
  const tmp = { radar: [], optic: [], ref: [] }
  const allSeriePaths = seriePath
    .filter(path => {
      return (
        path.includes(dataType.toLowerCase()) ||
        path.includes(AppConfig.observationTypes['REFERENCE'].abbr)
      )
    })
    .map(path => {
      if (DAY && RADAR) {
        tmp.radar.push('NoRadarData')
      }
      if (PERIOD && RADAR) {
        tmp.radar.push('NoRadarData')
      }
      if (
        DAY &&
        OPTIC &&
        path.includes(
          `${AppConfig.observationTypes['OPTIC'].abbr}${AppConfig.duration['DAY'].abbr}`
        )
      ) {
        tmp.optic.push(path)
      }
      if (
        PERIOD &&
        OPTIC &&
        path.includes(
          `${AppConfig.observationTypes['OPTIC'].abbr}${AppConfig.duration['PERIOD'].abbr}`
        )
      ) {
        tmp.optic.push(path)
      }
      if (REFERENCE) {
        tmp.ref.push('NoRefData')
      }
      return tmp
    })
  return tmp
}

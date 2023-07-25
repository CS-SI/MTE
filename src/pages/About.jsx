import { styled, theme } from '@/stitches.config'
import { Link } from 'react-router-dom'
const Container = styled('div', {
  fontFamily: 'sans-serif',
  color: '$text',
  display: 'flex',
  width: '100%',
  maxWidth: '1200px',
  flexDirection: 'column',
  margin: 'auto',
})

const Section = styled('section', {
  'marginBottom': theme.space.lg,
  'fontSize': theme.fontSizes.base,

  '& h2': {
    fontFamily: 'sans-serif',
    marginBottom: theme.space.lg,
    fontSize: theme.fontSizes.xl,
  },

  '& ul > li': {
    listStyleType: 'square',
  },

  '& ul > ul > li': {
    listStyleType: 'circle',
  },
})

const H1 = styled('h1', {
  fontFamily: 'sans-serif',
  marginTop: theme.space.lg,
  marginBottom: theme.space.lg,
  fontSize: theme.fontSizes.xxxl,
  textAlign: 'center',
})

const FigureContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.space.lg,
  width: '100%',
  maxWidth: '1200px',
  margin: 'auto',
})
const Figure = styled('figure', {
  display: 'flex',
  alignItems: 'center',
  marginTop: theme.space.lg,
  marginBottom: theme.space.xs,
  width: '50%',
  flexDirection: 'column',
})

const LilFigure = styled('figure', {
  display: 'flex',
  alignItems: 'center',
  marginTop: theme.space.lg,
  width: '25%',
  flexDirection: 'column',
})

const Img = styled('img', {
  width: '100%',
  height: 'auto',
})

const Figcaption = styled('figcaption', {
  fontFamily: 'sans-serif',
  fontSize: theme.fontSizes.base,
  textAlign: 'center',
  marginTop: theme.space.xs,
})

const StickyLink = styled(Link, {
  'position': 'fixed',
  'top': '80px',
  'left': '50px',
  'textDecoration': 'none',
  'color': '$text',
  '& span': {
    fontWeight: 'bold',
    marginRight: theme.space.xs,
  },
})
const About = () => {
  return (
    <Container>
      <StickyLink to="/">
        <span>&#8630;</span>Retour au tableau
      </StickyLink>
      <Section>
        <H1>FRANCE - SUIVI SATELITAIRE DE RESERVOIRS</H1>
        <p>
          Bienvenue sur le site web du Tableau de bord de suivi satellitaire des
          taux de remplissage des retenues.
        </p>
      </Section>
      <Section>
        <h2>Objectif et contexte</h2>
        <p>
          Ce tableau de bord est un démonstrateur. Il fournit une information
          régulièrement actualisée sur l'état de remplissage des principales
          retenues d'eau du territoire nationale, estimé à partir de l'imagerie
          satellitaire.
        </p>
        <p>
          Il a été développé dans le cadre de l'Inventaire National des Plans
          d'Eau (INPE), à la demande de la Direction de l'Eau et la Biodiversité
          du Ministère de la Transition Ecologique et de la Cohésion des
          Territoires (MTECT/DEB). Il repose sur des travaux menés par
          l'Inspection Générale de l'Environnement et du Développement Durable
          (IGEDD) et le Centre National d'Etudes Spatiales (CNES), avec l'appui
          de la Direction Régionale de l'Environnement, de l'Aménagement et du
          Logement (DREAL) d'Occitanie.
        </p>
      </Section>
      <Section>
        <h2>Méthode et données sources</h2>
        <p>
          La méthode repose sur (1) la mesure satellitaire de la superficie en
          eau des retenues, (2) l'établissement pour chaque retenue de sa
          relation entre superficie en eau et volume stocké, (3) la conversion
          des superficies en estimation des volumes stockés et taux de
          remplissage.
        </p>
        <ol>
          <li>
            la mesure satellitaire de la superficie en eau des retenues est
            obtenue par traitement des images optique et/ou radar acquises lors
            des passages hebdomadaires des satellites Sentinel1 et Sentinel2 de
            l'Agence Spatiale Européenne (ESA). Pour chaque image on établit un
            masque des zones en eau, des zones hors d'eau et des zones non
            interprétables (par exemple les zones de nuages). On peut alors
            mesurer la superficie en eau à l'intérieur des limites d'une
            retenue, telles que définies par l'INPE.
          </li>
          <li>
            la relation entre superficie en eau et volume stocké d'une retenue
            peut être établie de différentes façons:
          </li>
          <ul>
            <li>
              quand elles sont disponibles, à partir de données fournies par le
              gestionnaire (par exemple une tableau niveau de l'eau / volume
              stocké ou bien des séries temporelles de niveau et de volume) ,
            </li>
            <li>
              quand les données du gestionnaire ne sont pas disponibles, par
              traitement d'un modèle numérique de terrain environnant la retenue
              (RGE ALTI&reg; de l'IGN) afin d'estimer la relation entre niveau
              et superficie des courbes de niveau en amont de l'ouvrage et de
              l'interpoler au sein de la retenue.
            </li>
          </ul>
          <li>
            l'estimation des volumes stockés est obtenue en convertissant les
            mesures de superficies en eau établies en (1) à l'aide de la
            relation entre superficie et volume stocké établie en (2). Elle
            permet d'estimer le volume stocké maximum (capacité de stockage de
            la retenue) et d'en déduire une estimation du taux de remplissage.
          </li>
        </ol>

        <p>
          Les données sources sont (1) l'Inventaire National des Plans d'Eau,
          (2) les données satellitaires Sentinel, (3) le MNT RGE ALTI&reg; de
          l'IGN.
        </p>

        <p>
          Lien vers la description de la méthodologie - Article{' '}
          <a href="https://drive.google.com/file/d/1dnskcq5JWMSYo9xMXb1LdDxoTA0zuu2K/view?usp=drive_link">
            Vers un suivi satellitaire temps réel des stocks d'eau des barrages
            en France
          </a>
          - SHF 2021
        </p>
      </Section>
      <Section>
        <h2>Contenu</h2>
        <p>
          En l'état actuel le tableau de bord présente les caractéristiques
          suivantes :
        </p>
        <ul>
          <li> Il est limité à la France métropolitaine.</li>
          <li>
            Il assure le suivi de 310 retenues dont l'information au pas de
            temps hebdomadaire est actualisée chaque mois (entre le 1er et le 10
            du mois suivant) depuis janvier 2017 :
          </li>
          <ul>
            <li>
              210 retenues suivies en superficie (mesures), volume et taux de
              remplissage (estimations),
            </li>
            <li>
              100 retenues supplémentaires suivies seulement en superficie
              (mesure) et taux de remplissage (estimation), dans l'attente d'une
              amélioration de la relation entre superficie et volume stocké
              (quand l'erreur d'estimation de la capacité de stockage maximum
              dépasse 20%).
            </li>
          </ul>
          <li>
            Il fonctionne de façon autonome et indépendante du suivi réalisé par
            les gestionnaires de ces retenues.
          </li>
          <li>
            Ses données sont moins précises que celles des gestionnaires
            (considérées comme les données de référence), mais elles permettent
            un suivi plus systématique par leur couverture territoriale et leur
            délai de mise à disposition (quelques jours).
          </li>
          <p>
            A terme, il est prévu de suivre 5000 retenues de France
            métropolitaine et des départements d'outremer.
          </p>
        </ul>
      </Section>
      <Section>
        <h2>Utilisation</h2>
        <p>
          L'utilisation du tableau de bord se veut ergonomique et intuitive.
          Nous détaillons ci-dessous certaines opérations :
        </p>
        <ul>
          <li>
            Etape 1 : l'utilisateur peut zoomer sur une zone d'intérêt. Les
            chiffres apparaissant dans un cercle indiquent le nombre de retenues
            suivies sur la zone considérée.
          </li>
          <li>
            Etape 2 : à partir d'un certain niveau de zoom les polygones de
            contour des retenues apparaissent.
          </li>
          <li>
            Etape 3 : l'utilisateur peut alors visualiser les séries temporelles
            d'une retenue en cliquant sur cette retenue. Il peut choisir sur la
            partie gauche de l'écran dans le menu déroulant
            &#10077;Attribut&#10078; la variable qu'il souhaite visualiser (Taux
            de remplissage, Surface, Volume) ainsi que son mode de visualisation
            (Points, Lignes).
          </li>
          <li>
            Etape 4 : il est possible, pour une retenue donnée, de comparer ses
            dynamiques annuelles de janvier à décembre en cochant la case
            &#10077;Année&#10078;.
          </li>
          <li>
            Etape 5 : iI est possible de visualiser plusieurs retenues sur le
            même graphique en cliquant sur les retenues d'intérêt.
          </li>
          <li>
            Etape 6 : il est possible de cumuler les volumes de plusieurs
            retenues en cochant la case &#10077;Volume&#10078;
          </li>
          <li>
            Etape 7 : il est possible de télécharger un fichier CSV/Zip avec les
            valeurs des séries temporelles de taux de remplissage, surface et
            volume (si la courbe bathymétrique est disponible). Sur le menu
            &#10077;Réservoirs sélectionnées&#10078; en haut à gauche, cliquer
            sur l'icône avec une flèche vers le bas. On peut également
            télécharger l'image du graphique affiché en cliquant sur l'icône en
            bas à gauche du graphique &#10077;Télécharger l'image du
            graphique&#10078; identifié par une page avec une flèche.
          </li>
        </ul>

        <FigureContainer>
          <Figure>
            <Img src="/images/etape1.jpg" alt="Etape 1" />
            <Figcaption>Etape 1</Figcaption>
          </Figure>
          <Figure>
            <Img src="/images/etape2.jpg" alt="Etape 2" />
            <Figcaption>Etape 2</Figcaption>
          </Figure>
        </FigureContainer>
        <FigureContainer>
          <Figure>
            <Img src="/images/etape3.jpg" alt="Etape 3" />
            <Figcaption>Etape 3</Figcaption>
          </Figure>
          <Figure>
            <Img src="/images/etape4.jpg" alt="Etape 4" />
            <Figcaption>Etape 4</Figcaption>
          </Figure>
        </FigureContainer>
        <FigureContainer>
          <Figure>
            <Img src="/images/etape5.jpg" alt="Etape 5" />
            <Figcaption>Etape 5</Figcaption>
          </Figure>
          <Figure>
            <Img src="/images/etape6.jpg" alt="Etape 6" />
            <Figcaption>Etape 6</Figcaption>
          </Figure>
        </FigureContainer>
        <FigureContainer>
          <LilFigure>
            <Img src="/images/etape7a.jpg" alt="Etape 7" />
            <Img src="/iamges/etape7b.jpg" />
            <Figcaption>Etape 7</Figcaption>
          </LilFigure>
        </FigureContainer>
      </Section>
      <Section>
        <h2>
          Incertitude des estimations, limites, voies d'amélioration et conseils
          d'utilisation
        </h2>
        <p>
          En tant que &#10077;démonstrateur&#10078;, ce tableau de bord présente
          certaines limites liées aux méthodes mises en œuvre. La précision
          actuelle sur les taux de remplissage, évaluée sur 50 retenues du
          bassin Adour Garonne, est de l'ordre de 15% (performance atteinte pour
          80% des 50 retenues).
        </p>
        <p>
          Des marges d'amélioration significatives sont identifiées et en cours
          d'exploration :
        </p>
        <ul>
          <li>
            les lois superficie-volume utilisées ont été obtenues par traitement
            d'un MNT environnant. Elles pourront être améliorées à partir des
            tables niveau-volume des gestionnaires;
          </li>
          <li>
            le couvert nuageux et les ombres du terrain limitent la mesure des
            superficies en eau et constituent une contrainte majeure à certains
            moments de l'année. Il est responsable d'un &#10077;bruit&#10078;
            important sur les mesures et estimations en automne et en hiver. Les
            travaux en cours portent sur le traitement des données radar
            (détection de la surface en eau même en présence d'un couvert
            nuageux), et sur l'estimation du contour du plan d'eau même en cas
            de vision partielle, à partir des cartes d'occurrence;
          </li>
          <li>
            la glace et la neige qui peuvent couvrir les plans d'eau d'altitude
            en hiver et au printemps constituent une autre contrainte majeure.
          </li>
        </ul>
        <p>
          Il est donc recommandé d'utiliser le tableau de bord pour des analyses
          relatives plutôt qu'absolues : analyse des dynamiques annuelles,
          comparaisons interannuelles, vision territoriale...
        </p>
      </Section>
      <Section>
        <h2>Responsabilité</h2>
        <p>
          Ni le MTECT/DEB ni le CNES ne garantissent ou ne signifient, de
          manière non limitative, (i) que ce service et ses composants satisfont
          à vos besoins, (ii) que ce service et ses composants ne sont pas
          susceptibles d'interruption périodique, de défaillances ou d'erreurs,
          (iii) que les données diffusées sur le site sont précises, actualisées
          ou fiables, (iv) que la qualité de toute donnée satisfait aux attentes
          de l'utilisateur et que ces données ne comportent ni défaillance ni
          erreur, ou que les erreurs éventuelles sont corrigées. L'accés et
          l'utilisation du site se font sous la responsabilité de l'utilisateur.
        </p>
        <p>
          En aucun cas le MTECT/DEB ou le CNES ne pourront être tenus pour
          responsables des dommages directs, indirects ou subséquents, ou de
          tout autre dommage pouvant résulter de l'accès, de l'utilisation, de
          l'indisponibilité du site ou des sites Internet qui lui sont liés, y
          compris les pertes de données ou de programmes, les interruptions, les
          changements, les mises à jour, les modifications des données diffusées
          sur le site, l'occurrence de bugs, les pertes d'usage, les pertes
          financières, toute détérioration ou infection par des virus du
          matériel de l'utilisateur (y compris, et de manière non limitative les
          software, hardware, connections ou tout systèmes ou réseaux).
        </p>
        <p>
          Le CNES et le MTECT/DEB se réservent le droit, de manière temporaire
          ou permanente, d'effectuer à tout moment et sans notification
          préalable des changements, des mises à jour, d'interrompre ou modifier
          toute donnée diffusée au sein de son site Internet, y compris la
          sélection et l'arrangement de celle-ci, ou ses services.
        </p>

        <p>
          Le CNES et le MTECT/DEB ne sauraient être considérés comme
          responsables de tous les coûts, pertes et dépenses consécutifs à toute
          infraction aux présentes conditions générales d'utilisation, ainsi que
          ceux liés à l'utilisation ou l'accès à son site Internet.
        </p>
        <p>
          L'utilisateur n'insère pas, volontairement ou involontairement, des
          virus ou fichiers de toute nature perturbant le fonctionnement du
          site. Il en assume l'entière responsabilité le cas échéant.
        </p>
      </Section>
      <Section>
        <h3>Licence des données</h3>
        <p>ETALAB V2.0</p>
      </Section>
      <Section>
        <h3>Contact</h3>
        <a href="mailto:demo.suivi.volumes@cnes.fr">
          demo.suivi.volumes@cnes.fr
        </a>
      </Section>
    </Container>
  )
}

export default About

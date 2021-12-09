import venusImage from '../../assets/images/planet-venus.svg';
import venusInternalImage from '../../assets/images/planet-venus-internal.svg';
import venusGeoImage from '../../assets/images/planet-venus-geology.png';

export const data = {
    name: 'Friday 金',
    overview: {
        content: 'Friday is written as 金曜日, and which means “Gold Day”. This day is easy to remember since Friday is the' +
            ' golden day we all wait for every week!',
        source: 'https://en.wikipedia.org/wiki/Venus',
        image: venusImage,
    },
    structure: {
        content: 'The philosophy behind the Chinese character 金 (きん / kin) in 金曜日 (きんようび / kinyoubi) is that there’s a metal hidden in the earth that shines upon discovery. This means gold or metal.',
        source: 'https://en.wikipedia.org/wiki/Venus#Internal_structure',
        image: venusInternalImage,
    },
    geology: {
        content:
            'Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.',
        source: 'https://en.wikipedia.org/wiki/Venus#Surface_geology',
        image: venusImage,
        geo: venusGeoImage,
    },
    sectionColor: 'hsl(33, 82%, 61%)',
    desktopImgWidth: '400px',
    tabletImgWidth: '253px',
    mobileImgWidth: '154px',
    rotation: '243 Days',
    revolution: '224.7 Days',
    radius: '6,051.8 KM',
    temperature: '471°c',
};

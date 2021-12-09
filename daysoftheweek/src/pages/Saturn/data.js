import saturnImage from '../../assets/images/planet-saturn.svg';
import saturnInternalImage from '../../assets/images/planet-saturn-internal.svg';
import saturnGeoImage from '../../assets/images/planet-saturn-geology.png';

export const data = {
    name: 'Saturday 土',
    overview: {
        content: 'In Japanese, Saturday is 土曜日, which means “Ground Day”. Don’t go too crazy on Saturday or your' +
            ' parents might “ground” you!',
        source: 'https://en.wikipedia.org/wiki/Saturn',
        image: saturnImage,
    },
    structure: {
        content: 'For the Japanese word for Saturday, the Chinese character 土 (ど / do) in 土曜日 (どようび / doyoubi)' +
            ' signifies a picture of a mound of earth which was worshipped as the source of life in ancient times.',
        source: 'https://en.wikipedia.org/wiki/Saturn#Internal_structure',
        image: saturnInternalImage,
    },
    geology: {
        content:
            "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
        source: 'https://en.wikipedia.org/wiki/Saturn#Atmosphere',
        image: saturnImage,
        geo: saturnGeoImage,
    },
    sectionColor: 'hsl(17, 73%, 46%)',
    desktopImgWidth: '666px',
    tabletImgWidth: '422px',
    mobileImgWidth: '256px',
    rotation: '10.8 Hours',
    revolution: '29.46 Years',
    radius: '58,232 KM',
    temperature: '-138°c',
};

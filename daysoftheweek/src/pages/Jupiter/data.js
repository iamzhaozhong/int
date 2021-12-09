import jupiterImage from '../../assets/images/planet-jupiter.svg';
import jupiterInternalImage from '../../assets/images/planet-jupiter-internal.svg';
import jupiterGeoImage from '../../assets/images/planet-jupiter-geology.png';

export const data = {
    name: 'Thursday 木',
    overview: {
        content:
            'Thursday is written as 木曜日, which means “Wood Day”. You can remember this day as it “mocks” you with' +
            ' the weekend being so close!',
        source: 'https://en.wikipedia.org/wiki/Jupiter',
        image: jupiterImage,
    },
    structure: {
        content:'The Chinese character 木 (もく / moku) in 木曜日 (もくようび / mokuyoubi) is like a picture of a tree and they' +
            ' give us wood.',
        source: 'https://en.wikipedia.org/wiki/Jupiter#Internal_structure',
        image: jupiterInternalImage,
    },
    geology: {
        content:
            'The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.',
        source: 'https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices',
        image: jupiterImage,
        geo: jupiterGeoImage,
    },
    sectionColor: 'hsl(2, 68%, 53%)',
    desktopImgWidth: '582px',
    tabletImgWidth: '369px',
    mobileImgWidth: '224px',
    rotation: '9.93 Hours',
    revolution: '11.86 Years',
    radius: '69,911 KM',
    temperature: '-108°c',
};

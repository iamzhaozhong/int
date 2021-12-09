import marsImage from '../../assets/images/planet-mars.svg';
import marsInternalImage from '../../assets/images/planet-mars-internal.svg';
import marsGeoImage from '../../assets/images/planet-mars-geology.png';

export const data = {
    name: 'Tuesday 火',
    overview: {
        content:'Tuesday is 火曜日, which means “Fire Day” in English. To remember this day, think of Monday as your' +
            ' “warm-up day”. Once you’re all warmed up, you’re ready and fired up to go by Tuesday!',
        source: 'https://en.wikipedia.org/wiki/Mars',
        image: marsImage,
    },
    structure: {
        content: 'The Chinese character (か / ka) represents a picture of the flames of a burning fire with sparks.' +
            ' This philosophy gives the meaning “Fire Day” to 火曜日 (かようび / kayoubi).',
        source: 'https://en.wikipedia.org/wiki/Mars#Internal_structure',
        image: marsInternalImage,
    },
    geology: {
        content:
            'Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.',
        source: 'https://en.wikipedia.org/wiki/Mars#Surface_geology',
        image: marsImage,
        geo: marsGeoImage,
    },
    sectionColor: 'hsl(10, 63%, 51%)',
    desktopImgWidth: '336px',
    tabletImgWidth: '213px',
    mobileImgWidth: '129px',
    rotation: '1.03 Days',
    revolution: '1.88 Years',
    radius: '3,389.5 KM',
    temperature: '-28°c',
};

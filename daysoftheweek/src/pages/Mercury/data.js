import mercuryImage from '../../assets/images/planet-mercury.svg';
import mercuryInternalImage from '../../assets/images/planet-mercury-internal.svg';
import mercuryGeoImage from '../../assets/images/planet-mercury-geology.png';

export const data = {
    name: 'Monday 月',
    overview: {
        content: "In Japanese, Monday is written as 月曜日, which translates to “Moon Day” in English. This day’s name" +
            " is pretty similar in English and Japanese, don’t you think?",
        image: mercuryImage,
    },
    structure: {
        content:"The Chinese character 月 (げつ/ getsu) means “moon” as it represents the picture of a crescent moon." +
            " This is also the same character you’ll see with months in Japanese.",
        source: 'https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure',
        image: mercuryInternalImage,
    },
    geology: {
        content:
            "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
        source: 'https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology',
        image: mercuryImage,
        geo: mercuryGeoImage,
    },
    sectionColor: 'hsl(194, 48%, 49%)',
    desktopImgWidth: '290px',
    tabletImgWidth: '184px',
    mobileImgWidth: '111px',
    rotation: '29.53 Days',
    revolution: '27 Days',
    radius: '1,737.4 KM',
    temperature: '127°c',
};

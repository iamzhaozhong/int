import earthImage from '../../assets/images/planet-earth.svg';
import earthInternalImage from '../../assets/images/planet-earth-internal.svg';
import earthGeoImage from '../../assets/images/planet-earth-geology.png';

export const data = {
    name: 'Wednesday 水',
    overview: {
        content:"In Japanese, Wednesday is written as 水曜日, which means “Water Day”. You can remember this day by imagining you’re putting out Tuesday’s fire with water on Wednesday.",
        source: 'https://en.wikipedia.org/wiki/Earth',
        image: earthImage,
    },
    structure: {
        content:
            "The Chinese character 火 (すい / sui) looks like a picture of flowing water. This gives 水曜日 (すいようび /" +
            " suiyoubi) the meaning water day.",
        source: 'https://en.wikipedia.org/wiki/Earth#Internal_structure',
        image: earthInternalImage,
    },
    geology: {
        content:
            'The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.',
        source: 'https://en.wikipedia.org/wiki/Earth#Surface',
        image: earthImage,
        geo: earthGeoImage,
    },
    sectionColor: 'hsl(263, 67%, 51%)',
    desktopImgWidth: '450px',
    tabletImgWidth: '285px',
    mobileImgWidth: '173px',
    rotation: '58.6',
    revolution: '87.97 Days',
    radius: '2,439.7 KM',
    temperature: '430°c',
};

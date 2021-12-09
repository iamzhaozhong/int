import uranusImage from '../../assets/images/planet-uranus.svg';
import uranusInternalImage from '../../assets/images/planet-uranus-internal.svg';
import uranusGeoImage from '../../assets/images/planet-uranus-geology.png';

export const data = {
    name: 'Sunday 日',
    overview: {
        content: 'Last, but not least is Sunday! In Japanese, Sunday is 日曜日, which translates to Sun day. You’ will' +
            ' have no trouble memorizing this day since it’s identical to Sunday in English.',
        source: 'https://en.wikipedia.org/wiki/Uranus',
        image: uranusImage,
    },
    structure: {
        content: 'The Chinese character 日(にち / nichi) in 日曜日 (にちようび / nichiyoubi) means sun.',
        source: 'https://en.wikipedia.org/wiki/Uranus#Internal_structure',
        image: uranusInternalImage,
    },
    geology: {
        content:
            "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
        source: 'https://en.wikipedia.org/wiki/Uranus#Atmosphere',
        image: uranusImage,
        geo: uranusGeoImage,
    },
    sectionColor: 'hsl(169, 73%, 44%)',
    desktopImgWidth: '458px',
    tabletImgWidth: '290px',
    mobileImgWidth: '176px',
    rotation: '?? Hours',
    revolution: '?? Years',
    radius: '?? KM',
    temperature: '-??c',
};

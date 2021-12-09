# Project INT

## Important Links

| description | Links                                                                      |
| ----------- | -------------------------------------------------------------------------- |
| Hosted Page | https://vigorous-ritchie-9d5662.netlify.app/                                                         |
| Github Repo | https://github.com/iamzhaozhong/int                                        |
| JIRA        | https://zhaozhong.atlassian.net/jira/software/projects/P2/boards/2/roadmap |

## Description of the project

INT - integer, more than just simple numbers.

The ideas behind this project is simple - to capture different ways we learn language and numbers. Why? Because the
way we go about the learning of numbers is easily overlooked. By tapping into how other language teach numbers we
can gain more insights of how we can learn better. Or you may get a few tricks with this app on how you can learn
better visually!

## The wireframe

![wireframe1](https://raw.githubusercontent.com/iamzhaozhong/int/master/assets/Wireframe/Landing.png)
![wireframe5](https://raw.githubusercontent.com/iamzhaozhong/int/master/assets/Wireframe/About.png)
![wireframe2](https://raw.githubusercontent.com/iamzhaozhong/int/master/assets/Wireframe/2.png)
![wireframe3](https://raw.githubusercontent.com/iamzhaozhong/int/master/assets/Wireframe/3.png)
![wireframe4](https://raw.githubusercontent.com/iamzhaozhong/int/master/assets/Wireframe/Practice.png)
![wireframe6](https://raw.githubusercontent.com/iamzhaozhong/int/master/assets/Wireframe/6.png)

## Airtable

API key is generated, hidden at the moment

```
npm install --save airtable

var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'YOUR_API_KEY'
});
var base = Airtable.base('appocRJazUYVcVl1e');


```

## Google Cloud Translate API

For translation - we will be using the following

```
npm install --save @google-cloud/translate

/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const projectId = 'YOUR_PROJECT_ID';
// const location = 'global';
// const text = 'text to translate';

// Imports the Google Cloud Translation library
const {TranslationServiceClient} = require('@google-cloud/translate');

// Instantiates a client
const translationClient = new TranslationServiceClient();

async function translateText() {
  // Construct request
  const request = {
    parent: `projects/${projectId}/locations/${location}`,
    contents: [text],
    mimeType: 'text/plain', // mime types: text/plain, text/html
    sourceLanguageCode: 'en',
    targetLanguageCode: 'sr-Latn',
  };

  // Run request
  const [response] = await translationClient.translateText(request);

  for (const translation of response.translations) {
    console.log(`Translation: ${translation.translatedText}`);
  }
}

translateText();
```

For pronounciation, we will be using the following -

```
npm install --save @google-cloud/text-to-speech

const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');

const client = new textToSpeech.TextToSpeechClient();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// const text = 'Text to synthesize, eg. hello';
// const outputFile = 'Local path to save audio file to, e.g. output.mp3';

const request = {
  input: {text: text},
  voice: {languageCode: 'en-US', ssmlGender: 'FEMALE'},
  audioConfig: {audioEncoding: 'MP3'},
};
const [response] = await client.synthesizeSpeech(request);
const writeFile = util.promisify(fs.writeFile);
await writeFile(outputFile, response.audioContent, 'binary');
console.log(`Audio content written to file: ${outputFile}`);
```

## Component Hierarchy

![CH](https://raw.githubusercontent.com/iamzhaozhong/int/master/assets/Screen%20Shot%202021-12-02%20at%2010.40.38.png)

## Scoping

Scoping and Time management were done in JIRA software

![JIRA](https://raw.githubusercontent.com/iamzhaozhong/int/master/assets/Screen%20Shot%202021-12-02%20at%2011.12.04.png)

## Timeline and Schedule

According to the Unit 2 Schedule

| Date                   | Day               | Item&Goal                                                        |
| ---------------------- | ----------------- | ---------------------------------------------------------------- |
| 12/2/2021              | Thursday          | Finish the pitches and get approval from the instructional team. |
| 12/2/2021              | Friday            | Working on Airtable and make sure the crucial component works    |
| 12/3/2021              | Saturday          | Set up the basic, functional site.                               |
| 12/4/2021              | Sunday            | Rest/get some feedback from family members                       |
| 12/5/2021 - 12/09/2021 | Monday - Thursday | Project working phase                                            |

## SWOT Analysis

Will be written post project.

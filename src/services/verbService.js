import { getRandomInt } from "./utilService";
import httpService from './httpService';
// dummy data
import DB from '../../data/DB.json';

async function getVerbs() {
  const verbs = await httpService.get('verb/');
  return verbs
}

const VERB = DB
const PREPOSITION =  ['הוא', 'היא','הם', 'הן', 'אני', 'את', 'אתה','אתם','אתן','אנחנו']
const TENSE = ['עבר', 'הווה'];

function generateExercise() {
  const verb = _generateVerb()
  const preposition = _generatePreposition()
  const tense =  _generateTense()
  return {
    verb,
    preposition,
    tense
  }
}

function _generateVerb() {
  const verbIdx = getRandomInt(0, VERB.length - 1);
  const chosenVerb = VERB[verbIdx];
  return chosenVerb
  
} 

function _generatePreposition() {
  const prepositionIdx = getRandomInt(0, PREPOSITION.length - 1);
  const chosenPreposition = PREPOSITION[prepositionIdx];
  return chosenPreposition
}

function _generateTense() {
  const tenseIdx = getRandomInt(0, TENSE.length - 1);
  const chosenTense = TENSE[tenseIdx];
  return chosenTense
}

function toggleFuture() {
  if(!TENSE.includes('עתיד')) {
    TENSE.push('עתיד')
  } else {
    const idx = TENSE.findIndex(tense => tense === 'עתיד');
    if(idx != -1) {
      TENSE.splice(idx, 1)
    }
  }
  console.log(TENSE);
  
}


export default {
  generateExercise,
  toggleFuture,
  getVerbs
};

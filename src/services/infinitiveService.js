import { getRandomInt, shuffle } from './utilService';
import httpService from '../services/httpService';
import DB from '../../../data/DB.json';


let INFINITIVES = null;



async function getVerbs() {
  const verbs = await httpService.get('verb/');
  INFINITIVES = verbs;
  return verbs
}



function generateQuestions() {
  if(INFINITIVES && INFINITIVES.length > 3) {

    const questions = INFINITIVES.map((obj) => {
      return _createQustion(obj)
    })
    return shuffle(questions)
  }
}

export default {
  getVerbs,
  generateQuestions
}

function _createQustion(obj) {
  const {englishInf, hebrewInf} = obj;
  return {
    question: englishInf,
    answer: hebrewInf,
    gameItems: _getPossibleAnswers(hebrewInf)
  }
}

function _getPossibleAnswers(answer) {
  // get only the hebrew infinitive from the object
  const hebrewInfs = INFINITIVES.map(inf => inf.hebrewInf)
  
  const possibleAnswers = [];

  while(possibleAnswers.length < 3) {

    // get random infinitive
    const infIdx = getRandomInt(0, hebrewInfs.length-1)
    const possibleInf = hebrewInfs[infIdx];

    // check that infinitive doesn't already exist in possibleAnswers
    // and that infinitive is not the same as the answer
    if(!possibleAnswers.includes(possibleInf) && possibleInf != answer) {
      possibleAnswers.push(possibleInf)
    }
  }
  // add answer to possibleAnswers
  possibleAnswers.push(answer)

  
  return shuffle(possibleAnswers)
}
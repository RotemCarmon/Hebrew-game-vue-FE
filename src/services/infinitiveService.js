import { getRandomInt, shuffle } from './utilService';
import DB from '../../../data/DB.json';

const INFINITIVES = DB;

function showInf() {
  getRandomInt()
  console.log('DB', INFINITIVES);
}




export default {
  showInf,
  generateQuestions
}

function generateQuestions() {
  const questions = INFINITIVES.map((obj) => {
    return _createQustion(obj)
  })
  return shuffle(questions)
}

function _createQustion(obj) {
  const {englishInf, hebrewInf} = obj;
  return {
    inf: englishInf,
    answer: hebrewInf,
    possibleAnswers: _getPossibleAnswers(hebrewInf)
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
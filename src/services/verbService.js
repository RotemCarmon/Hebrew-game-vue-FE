import { getRandomInt } from "./utilService";
import httpService from './httpService';

let VERB;
const PREPOSITION = [
  {
    eng: 'me_m',
    heb: 'אני (זכר)'
  },
  {
    eng: 'me_f',
    heb: 'אני (נקבה)'
  },
  {
    eng: 'we_m',
    heb: 'אנחנו (זכר)'
  },
  {
    eng: 'we_f',
    heb: 'אנחנו (נקבה)'
  },
  {
    eng: 'you_m_s',
    heb: 'אתה'
  },
  {
    eng: 'you_f_s',
    heb: 'את'
  },
  {
    eng: 'you_m_p',
    heb: 'אתם'
  },
  {
    eng: 'you_f_p',
    heb: 'אתן'
  },
  {
    eng: 'he',
    heb: 'הוא'
  },
  {
    eng: 'she',
    heb: 'היא'
  },
  {
    eng: 'they_m',
    heb: 'הם'
  },
  {
    eng: 'they_f',
    heb: 'הן'
  }
]
const TENSE = [
  {
    eng: 'past',
    heb: 'עבר'
  },
  {
    eng: 'present',
    heb: 'הווה'
  }

];


async function getVerbs() {
  const verbs = await httpService.get('verb/');
  VERB = verbs;
  return verbs
}


async function getAnswer(query) {
  const queryParams = new URLSearchParams()
  if(query) {
    queryParams.append('id', query.id)
    queryParams.append('tense', query.tense)
    queryParams.append('preposition', query.preposition)
  }
  const answers = await httpService.get(`verb/conjugation?${queryParams}`)
  if(answers && answers.length == 1) {
    const answer = Object.values(answers[0]);
    return answer[0]
  }
}


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

function toggleFuture() {
  const future = {eng: 'future', heb: 'עתיד'};
  let futureIdx = TENSE.findIndex(tense => tense.eng === 'future');
  
  if(futureIdx == -1) {
    TENSE.push(future)
  } else {
    TENSE.splice(futureIdx, 1)
  }
  console.log(TENSE);
}


export default {
  generateExercise,
  toggleFuture,
  getVerbs,
  getAnswer
};

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
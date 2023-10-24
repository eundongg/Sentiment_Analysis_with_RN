// chatGPT API를 활용한 감정분석
// gpt-3.5-turbo 모델 호출

import {API_KEY} from '@env';
import fetch from 'node-fetch';

export const analyzeEmotion = (input) =>{
    const data = JSON.stringify({
        "model": "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "너는 훌륭한 감정 분석가야." }, 
            { role: "user", content: input }
        ],
        max_tokens : 100,
    });

    return fetch('https://api.openai.com/v1/chat/completions',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+API_KEY, 
        },
        body:data,
    })
    .then (response=>response.json())
}



  
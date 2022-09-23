import React, { useState } from "react";

export const Application = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const questions = [
        {
            questionNumber: 1,
            question: 'Внутрь какого элемента HTML мы поместим JavaScript?',
            answers: [
                {
                    answer: 'script',
                    isCorrect: true,
                    id: 1,
                },
                {
                    answer: 'js',
                    isCorrect: false,
                    id: 2,
                },
                {
                    answer: 'javascript',
                    isCorrect: false,
                    id: 3,
                },
                {
                    answer: 'scripting',
                    isCorrect: false,
                    id: 4,
                },
            ]
        },
        {
            questionNumber: 2,
            question: 'Что вернет null == undefined?',
            answers: [
                {
                    answer: 'false',
                    isCorrect: false,
                    id: 1,
                },
                {
                    answer: 'true',
                    isCorrect: true,
                    id: 2,
                },
                {
                    answer: 'null',
                    isCorrect: false,
                    id: 3,
                },
                {
                    answer: 'undefined',
                    isCorrect: false,
                    id: 4,
                },
            ]
        },
        {
            questionNumber: 3,
            question: 'Что вернет метод prompt, если пользователь отменит ввод нажатием на Esc?',
            answers: [
                {
                    answer: 'undefined',
                    isCorrect: false,
                    id: 1,
                },
                {
                    answer: 'null',
                    isCorrect: true,
                    id: 2,
                },
                {
                    answer: '{}',
                    isCorrect: false,
                    id: 3,
                },
                {
                    answer: '[]',
                    isCorrect: false,
                    id: 4,
                },
            ]
        },
        {
            questionNumber: 4,
            question: 'Сколько максимально аргументов может примать метод Promise.prototype.then()? ',
            answers: [
                {
                    answer: '0',
                    isCorrect: false,
                    id: 1,
                },
                {
                    answer: '1',
                    isCorrect: false,
                    id: 2,
                },
                {
                    answer: '2',
                    isCorrect: true,
                    id: 3,
                },
                {
                    answer: '3',
                    isCorrect: false,
                    id: 4,
                },
            ]
        },
        {
            questionNumber: 5,
            question: 'Какой будет результат: typeof(null + 20)? ',
            answers: [
                {
                    answer: 'number',
                    isCorrect: true,
                    id: 1,
                },
                {
                    answer: 'null',
                    isCorrect: false,
                    id: 2,
                },
                {
                    answer: 'undefined',
                    isCorrect: false,
                    id: 3,
                },
                {
                    answer: 'NaN',
                    isCorrect: false,
                    id: 4,
                },
            ]
        },
        {
            questionNumber: 6,
            question: 'Какой оператор завершает выполнение текущей функции и возвращает её значение?',
            answers: [
                {
                    answer: 'case',
                    isCorrect: false,
                    id: 1,
                },
                {
                    answer: 'break',
                    isCorrect: false,
                    id: 2,
                },
                {
                    answer: 'continue',
                    isCorrect: false,
                    id: 3,
                },
                {
                    answer: 'return',
                    isCorrect: true,
                    id: 4,
                },
            ]
        },
        {
            questionNumber: 7,
            question: 'Укажите оператор возведения в степень в JavaScript:',
            answers: [
                {
                    answer: '!!',
                    isCorrect: false,
                    id: 1,
                },
                {
                    answer: '**',
                    isCorrect: true,
                    id: 2,
                },
                {
                    answer: '++',
                    isCorrect: false,
                    id: 3,
                },
                {
                    answer: '%',
                    isCorrect: false,
                    id: 4,
                },
            ]
        },
        {
            questionNumber: 8,
            question: 'Укажите выражение, которое вернет true, если a = true, b = true',
            answers: [
                {
                    answer: 'a && !b',
                    isCorrect: false,
                    id: 1,
                },
                {
                    answer: '!a && b',
                    isCorrect: false,
                    id: 2,
                },
                {
                    answer: 'a && b',
                    isCorrect: true,
                    id: 3,
                },
                {
                    answer: '!a && !b',
                    isCorrect: false,
                    id: 4,
                },
            ]
        },
        {
            questionNumber: 9,
            question: 'Укажите верный вариант записи стрелочной функции',
            answers: [
                {
                    answer: 'function show() {}',
                    isCorrect: false,
                    id: 1,
                },
                {
                    answer: 'const show = () => {}',
                    isCorrect: true,
                    id: 2,
                },
                {
                    answer: 'const show = function() {}',
                    isCorrect: false,
                    id: 3,
                },
                {
                    answer: 'const show = () {}',
                    isCorrect: false,
                    id: 4,
                },
            ]
        },
        {
            questionNumber: 10,
            question: 'Укажите выражение, которое вернет true, если a = true, b = true',
            answers: [
                {
                    answer: '!a || !b',
                    isCorrect: false,
                    id: 1,
                },
                {
                    answer: '!(a || b)',
                    isCorrect: false,
                    id: 2,
                },
                {
                    answer: '!(!a || !b)',
                    isCorrect: true,
                    id: 3,
                },
                {
                    answer: '!(a || !b)',
                    isCorrect: false,
                    id: 4,
                },
            ]
        },
    ];
    const handleAnswerClick = (isCorrect) => {
        if(isCorrect) {
            setScore(score + 1);
        } 

        const nextQuestion = currentQuestion + 1;

        if(nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    }

    return(
        <div className="container">
            <h1>Тест на знание JavaScript</h1>
            <div className="quiz">
                {
                    !showScore 
                    ? 
                        <div className="quiz__body">
                            <h3>Вопрос №{currentQuestion + 1} из {questions.length}</h3>
                            <p className="answer">{questions[currentQuestion].question}</p>
                            {questions[currentQuestion].answers.map((item) => {
                                return <button className="button" key={item.id} onClick={() => handleAnswerClick(item.isCorrect)}>{item.answer}</button>
                            })}
                        </div>
                    : 
                        <div className="score">Ты знаешь JavaScript на {score} из  {questions.length}!</div>
                }
            </div>
        </div>
    )
}

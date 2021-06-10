import React, { useState, useEffect } from 'react'
import useSound from 'use-sound'
import play from '../assets/src_sounds_play.wav'
import correct from '../assets/src_sounds_correct.wav'
import wrong from '../assets/src_sounds_wrong.wav'

export default function Trivia(
    { data,
        setStop,
        quetionNumber,
        setquetionNumber

    }) {
    const [question, setQuestion] = useState(null);
    const [selectAnswer, setselectAnswer] = useState(null)
    const [className, setClassName] = useState("answer")

    // add  music
    const [letPlay] = useSound(play)
    const [correctAnswer] = useSound(correct)
    const [wrongAnswer] = useSound(wrong)

    // play music
    useEffect(() => {
        letPlay();
    }, [letPlay])



    useEffect(() => {
        setQuestion(data[quetionNumber - 1])
    }, [data, quetionNumber]);

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback()
        }, duration)

    }
    const handleClick = (a) => {
        setselectAnswer(a);
        setClassName("answer active")
        delay(3000, () =>
            setClassName(a.correct ? "answer correct" : "answer wrong")
        );
        delay(5000, () => {
            if (a.correct) {

                // correct music
                correctAnswer();

                // 
                delay(1000,()=>{
                    setquetionNumber(prev => prev + 1);
                    setselectAnswer(null)
                })
               

            } else {
                wrongAnswer();
                delay(1000,()=>{
                    setStop(true)
                  
                })
               
            }
        }

        )
    }
    return (
        <div className='trivia'>
            <div className='question'>{question?.question}</div>
            <div className='answers'>
                {
                    question?.answers.map((a) => (
                        <div className={selectAnswer === a ? className : "answer"} onClick={() => handleClick(a)}>
                            {a.text}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

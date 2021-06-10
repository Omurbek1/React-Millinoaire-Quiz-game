import React, { useState, useEffect, useMemo } from 'react'
import './App.css'
import Timer from './Components/Timer'
import Trivia from './Components/Trivia'
import Start from './Components/Start'
export default function App() {

  const [usename, setUserName] = useState(null)
  const [quetionNumber, setquetionNumber] = useState(1)

  const [stop, setStop] = useState(false)
  const [earend, setearend] = useState("$ 0")

  const data = [
    {
      id: 1,
      question: "Кто из этих философов в 1864 году написал музыку на стихи А.С. Пушкина «Заклинание» и «Зимний вечер»?",
      answers: [
        {
          text: "Юнг",
          correct: false,
        },
        {
          text: "Ницше",
          correct: true,
        },
        {
          text: "Гегель",
          correct: false,
        },
        {
          text: "Шопенгауэр",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Сколько раз в сутки подзаводят куранты Спасской башни Кремля?",
      answers: [
        {
          text: "Два",
          correct: true,
        },
        {
          text: "Один",
          correct: false,
        },
        {
          text: "Три",
          correct: false,
        },
        {
          text: "Четыре",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Кто 1-м получил Нобелевскую премию по литературе?",
      answers: [
        {
          text: "Романист",
          correct: false,
        },
        {
          text: "Драматург",
          correct: false,
        },
        {
          text: "Эссеист",
          correct: false,
        },
        {
          text: "Поэт",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "С какой буквы начинаются слова, опубликованные в 16-м томе последнего издания Большой советской энциклопедии?",
      answers: [
        {
          text: "К",
          correct: false,
        },
        {
          text: "П",
          correct: false,
        },
        {
          text: "Д",
          correct: false,
        },
        {
          text: "М",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Кто из перечисленных был пажом во времена Екатерины II?",
      answers: [
        {
          text: " А.Н. Радищев",
          correct: true,
        },
        {
          text: "Д.И. Фонвизин",
          correct: false,
        },
        {
          text: "Н.М. Карамзин",
          correct: false,
        },
        {
          text: " Г.Р. Державин",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Какой химический элемент назван в честь злого подземного гнома?",
      answers: [
        {
          text: " Бериллий",
          correct: false,
        },
        {
          text: "Кобальт",
          correct: true,
        },
        {
          text: "Теллур",
          correct: false,
        },
        {
          text: " Гафний",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "В каком немецком городе родилась будущая императрица России Екатерина II?",
      answers: [
        {
          text: " Висбаден",
          correct: false,
        },
        {
          text: "Цербст",
          correct: false,
        },
        {
          text: "Штеттин",
          correct: true,
        },
        {
          text: " Дармштадт",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: " Большинство женщин пользуются и съедают. Мужчины не пользуются, но тоже съедают – до 15 кг за жизнь?",
      answers: [
        {
          text: " крем",
          correct: false,
        },
        {
          text: "помада",
          correct: true,
        },
        {
          text: "кАрандаш",
          correct: false,
        },
        {
          text: " сметана",
          correct: false,
        },
      ],
    },
    {


      id: 9,
      question: " Как называют мелководный бассейн, предназначенный для детей?",
      answers: [
        {
          text: " лягушатник",
          correct: true,
        },
        {
          text: "утятник",
          correct: false,
        },
        {
          text: "селёдочник",
          correct: false,
        },
        {
          text: " тюленник",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Что из перечисленного название концертного зала, а не стадиона?",
      answers: [
        {
          text: " Камп Ноу",
          correct: false,
        },
        {
          text: "Энфилд",
          correct: false,
        },
        {
          text: "Альберт-холл",
          correct: true,
        },
        {
          text: " Сан-Сиро",
          correct: false,
        },
      ],
    },
    {


      id: 11,
      question: "Как не называется ни одна из глав романа Лермонтова «Герой нашего времени»?",
      answers: [
        {
          text: " Княжна Мэри",
          correct: false,
        },
        {
          text: "Бэла",
          correct: false,
        },
        {
          text: "Максим Максимыч",
          correct: false,
        },
        {
          text: " Княгиня Лиговская",
          correct: true,
        },
      ],
    },
    {


      id: 12,
      question: "Как не называется ни одна из глав романа Лермонтова «Герой нашего времени»?",
      answers: [
        {
          text: " Княжна Мэри",
          correct: false,
        },
        {
          text: "Бэла",
          correct: false,
        },
        {
          text: "Максим Максимыч",
          correct: false,
        },
        {
          text: " Княгиня Лиговская",
          correct: true,
        },
      ],
    },
    {


      id: 13,
      question: "Какое слово не входило в лозунг Великой французской революции?",
      answers: [
        {
          text: " свобода",
          correct: false,
        },
        {
          text: "беспредел",
          correct: true,
        },
        {
          text: "братство",
          correct: false,
        },
        {
          text: " равенство",
          correct: false,
        },
      ],
    },
    {


      id: 13,
      question: "Какое слово не входило в лозунг Великой французской революции?",
      answers: [
        {
          text: " свобода",
          correct: false,
        },
        {
          text: "беспредел",
          correct: true,
        },
        {
          text: "братство",
          correct: false,
        },
        {
          text: " равенство",
          correct: false,
        },
      ],
    },
    {


      id: 14,
      question: "Что находится в центре планета земля?",
      answers: [
        {
          text: " Ведро",
          correct: false,
        },
        {
          text: "зерно",
          correct: false,
        },
        {
          text: "Полотно",
          correct: false,
        },
        {
          text: " ядро",
          correct: true,
        },
      ],
    },
    {


      id: 15,
      question: "Что находится в центре планета земля?",
      answers: [
        {
          text: " Ведро",
          correct: false,
        },
        {
          text: "зерно",
          correct: false,
        },
        {
          text: "Полотно",
          correct: false,
        },
        {
          text: " ядро",
          correct: true,
        },
      ],
    },
  ];



  const moneyPyramid = useMemo(() =>
    [
      { id: 1, amount: "  $ 100" },
      { id: 2, amount: "  $ 500" },
      { id: 3, amount: "  $ 1000" },
      { id: 4, amount: "  $ 5000" },
      { id: 5, amount: "  $ 10 000" },
      { id: 6, amount: "  $ 50 000" },
      { id: 7, amount: "  $ 100 000" },
      { id: 8, amount: "  $ 200 000" },
      { id: 9, amount: "  $ 300 000" },
      { id: 10, amount: "  $ 400 000" },
      { id: 11, amount: "  $ 500 000" },
      { id: 12, amount: "  $ 600 000" },
      { id: 13, amount: "  $ 700 000" },
      { id: 14, amount: "  $ 800 000" },
      { id: 15, amount: "  $ 1 000 000" },
    ].reverse(),
    []
  );
  // reverse-method -массивди тескерисинен жайгаштырат.


  useEffect(() => {

    quetionNumber > 1 &&
      setearend(moneyPyramid.find((m) =>
        m.id === quetionNumber - 1).amount);

  }, [moneyPyramid, quetionNumber])
  return (
    <div className='App'>
      {usename ? (
        <>
          <div className='main'>
            {
              stop ? (<h1 className='endText'> Вы зароботали: {earend}</h1>
              ) : (
                <>
                  <div className='top'>
                    <div className='timer'>

                      <Timer
                        setStop={setStop}
                        quetionNumber={quetionNumber}
                      /></div>
                  </div>
                  <div className='bottom'>
                    <Trivia
                      data={data}
                      quetionNumber={quetionNumber}
                      setStop={setStop}
                      setquetionNumber={setquetionNumber} />
                  </div>
                </>
              )

            }

          </div>
          <div className='pyramid'>
            <ul className='moneyList'>
              {moneyPyramid.map(m => (
                <li className={quetionNumber === m.id ? "moneyListItem active" : "moneyListItem"} >
                  <span className='moneyListItemNumber'>{m.id}</span>
                  <span className='moneyListItemAmount'>{m.amount} </span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : <Start setUserName={setUserName} />}

    </div>
  )
}

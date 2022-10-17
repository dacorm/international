import React from 'react';
import Header from "../components/Header/Header";
import WhiteHeading from "../components/WhiteHeading/WhiteHeading";
import styles from "./Tournament.module.css";
import TextSlide from "../components/TextSlide/TextSlide";
import Footer from "../components/Footer/Footer";
import tourn from '../assets/images/711.jpg';
import TournamentMatch from "../components/TournamentMatch/TournamentMatch";
import {withErrorBoundary} from "react-error-boundary";
import Layout from "../components/Layout/Layout";


const Tournament = () => {
    return (
        <Layout seoDescription='Турнирная сетка матчей The International 2022 по Dota 2 – расписание, турнирная сетка, состав команд, результаты' seoTitle='Турнирная сетка матчей The International 2022 по ДОТА2' title='Турнирная сетка матчей The International 2022'>
            <div className={styles.content}>
                <div className={styles.tournamentInfo}>
                    <h2 className={styles.listHeading}>Турнир The International 2022 по Dota 2
                    </h2>
                    <div className={styles.separator}/>
                    <div className={styles.tournament}>
                        <img src={tourn} alt="Турнир" className={styles.tournamentImage}/>
                        <div className={styles.tournamentText}>
                            <p className={styles.text}>
                                Дата начала: <span className={styles.span}>15 Окт 2022</span>
                            </p>
                            <p className={styles.text}>
                                Дата завершения: <span className={styles.span}>30 Окт 2022</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.textBlock}>
                        <p>Осенью этого года состоится важный киберспортивный турнир, даты начала и завершения основной части соревнования 15 и 30 октября соответственно. Дисциплина &ndash; Дота, призовой фонд 1,6 млн. долларов США, место проведения &ndash; Сингапур. Второй раз в истории соревнование пройдет на азиатском континенте (11 подобное событие). Организатором является американская корпорация Valve &ndash; разработчик и издатель видеоигр.</p>

                        <h2>Формат, условия участия</h2>

                        <p>В турнире по Дота international 2022 примут участие два десятка команд, но пройти в финал смогут только лучшие из них. Битва за звание чемпиона будет двухдневной, в качестве площадки выбран Сингапурский крытый стадион. Главной встрече предшествуют две стадии (даты указаны в скобках):</p>

                        <ol>
                            <li>Квалификация (8-12). Сыграют вторые и третьи места первенств регионов &ndash; дюжина коллективов, между которыми будут распределены два входа.</li>
                            <li>Групповой этап (15-18). Пройдут матчи с участием двенадцати клубов-победителей завершившегося сезона Dota Pro Circuit, шести финалистов своих первенств по регионам и двух команд, получивших допуск на предыдущем этапе.</li>
                        </ol>

                        <p>По итогам групповой части четыре слабейшие команды покинут состязание, восемь лучших попадут в верхнюю сетку плей-офф и сразятся за титул победителя турнира (29-30), остальные встретятся в борьбе за почетные места.</p>

                        <p>Важное условие. Вышедшие в групповой этап 20 коллективов поделят на две равные подгруппы. Прохождение дальше, как и выбывание, будет зависеть от места команды именно в своей подгруппе.</p>

                        <h2>Немного из истории The International 2022</h2>

                        <p>Рассматриваемое событие считается крупнейшим среди ежегодных киберспортивных турниров. Изначально в данном чемпионате принимало участие 16 лучших коллективов мира, но постепенно формат изменился. Первый The International проходил в немецком Кельне (2011), далее в Сиэтле (США), на протяжении шести лет. Другие принимавшие мероприятие города: Ванкувер, Шанхай и Бухарест. Единственным годом пропуска стал 2020, когда турнир отменили из-за эпидемии ковид.</p>

                        <p>Интересный факт. На чемпионат могла попасть российская команда Virtus.pro, но оказалась за бортом соревнования из-за особой системы подсчета очков у Valve (без дробных значений). Участвующий в турнире клуб Team Spirit ранее выступала под флагом России, но сейчас является международным, с офисом в Белграде.</p>

                        <p>Региональные первенства проводятся по особой системе. Как разные регионы мира считаются:</p>

                        <ul>
                            <li>Обе Америки (северная и южная).</li>
                            <li>Восточная и западная части Европы.</li>
                            <li>Китай (из-за огромного населения и большого числа игроков соответственно).</li>
                            <li>Юго-Восточная Азия, кроме Поднебесной.</li>
                        </ul>

                        <p>При этом отсутствуют представители Ближнего Востока, Африки, Австралии и Океании. Разработанный организатором формат может вызывать сомнения, но недостатки компенсируются качественной раскруткой события и приличными призовыми. Распределится выигрыш неравными долями между местами с первое по третье, роль кубка играет выполненный в античном стиле щит из бронзы и серебра.</p>

                    </div>
                    <div className={styles.results}>
                        <h2 className={styles.listHeading}>Результаты
                        </h2>
                        <div className={styles.separator}/>
                        <div className={styles.tableHeading}>
                            <p className={styles.text}>Место</p>
                            <p className={styles.text}>Команда</p>
                            <p className={styles.text}>Призовые</p>
                        </div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                <div className={styles.column}>
                                    <p className={styles.text}>1</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>TBD</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>---</p>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.column}>
                                    <p className={styles.text}>2</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>TBD</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>---</p>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.column}>
                                    <p className={styles.text}>3</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>TBD</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>---</p>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.column}>
                                    <p className={styles.text}>4</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>TBD</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>---</p>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.column}>
                                    <p className={styles.text}>5-6</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>TBD</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>---</p>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.column}>
                                    <p className={styles.text}>7-8</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>TBD</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>---</p>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.column}>
                                    <p className={styles.text}>9-12</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>TBD</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>---</p>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.column}>
                                    <p className={styles.text}>13-16</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>TBD</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>---</p>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.column}>
                                    <p className={styles.text}>17-18</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>TBD</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>---</p>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.column}>
                                    <p className={styles.text}>19-20</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>TBD</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>---</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.playoffs}>
                            <h2 className={styles.listHeading}>Турнирная сетка
                            </h2>
                            <div className={styles.separator}/>
                            <div className={styles.tournamentTable}>
                                <div className={styles.columnAnother}>
                                    <TournamentMatch />
                                    <TournamentMatch />
                                    <TournamentMatch />
                                    <TournamentMatch />
                                </div>
                                <div className={styles.columnAnother}>
                                    <TournamentMatch />
                                    <TournamentMatch />
                                </div>
                                <div className={styles.columnAnother}>
                                    <TournamentMatch />
                                </div>
                            </div>
                        </div>
                        <a href='https://s.betcitypromo.ru/click?pid=99&offer_id=3&sub1=international11&sub4=3469&sub5=cpa&sub6=international11&l=1586938601' target='_blank' className={styles.banner} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default withErrorBoundary(Tournament, {
    fallback: (<>
        <Header/>
        <WhiteHeading/>
        <div className={styles.articleHeading}>
            <h1 className={styles.title}>
                Что-то пошло не так
            </h1>
        </div>
        <TextSlide/>
        <Footer />
    </>)
});
import React from 'react';
import Header from "../components/Header/Header";
import WhiteHeading from "../components/WhiteHeading/WhiteHeading";
import styles from "./Tournament.module.css";
import TextSlide from "../components/TextSlide/TextSlide";
import Footer from "../components/Footer/Footer";
import tourn from '../assets/images/711.jpg';
import TournamentMatch from "../components/TournamentMatch/TournamentMatch";
import {Helmet, HelmetData} from 'react-helmet-async';
import {withErrorBoundary} from "react-error-boundary";

const helmetData = new HelmetData({});

const Tournament = () => {
    return (
        <>
            <Helmet helmetData={helmetData}>
                <meta
                    name="description"
                    content="international 2022 page"
                />
                <title>Турнир The International 2022</title>
            </Helmet>
            <Header/>
            <WhiteHeading/>
            <div className={styles.screen}>
                <h1 className={styles.title}>The Interntational 2022</h1>
            </div>
            <TextSlide />
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
                        <p className={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque cupiditate illo magnam
                            maxime nostrum pariatur perferendis sit voluptate? A accusamus, aliquam, aliquid amet aut
                            beatae debitis dolorem ea expedita harum id inventore ipsum, labore laudantium magnam
                            maiores molestias nam necessitatibus perspiciatis quas qui repellat repellendus rerum sed
                            sunt suscipit ut vel veritatis voluptas voluptate? Animi atque aut beatae blanditiis
                            consequuntur corporis expedita id itaque labore necessitatibus, nostrum quo ratione rerum
                            saepe sequi similique ut? A ab, animi atque blanditiis cumque, dolore error et eveniet
                            explicabo facilis fuga hic id iste omnis perferendis, quae qui quo repellendus reprehenderit
                            rerum saepe sint totam ullam ut veniam voluptate voluptatem! Aliquid architecto assumenda
                            atque delectus dolor dolorum, harum ipsum minima, molestiae nam nisi omnis perspiciatis quas
                            reiciendis rem, reprehenderit veritatis. A ab id, ipsa quis recusandae ullam velit. Ab
                            adipisci amet architecto asperiores at aut autem, beatae commodi deleniti dolorem doloremque
                            ducimus enim eum excepturi fugiat illum in ipsa iste iure laborum maiores maxime minus, nemo
                            nobis nostrum officia quibusdam ratione repellendus saepe sapiente temporibus totam vero
                            vitae? Accusantium consequatur dignissimos doloremque dolorum est et excepturi id, magnam
                            modi non porro recusandae repellendus similique velit voluptas. Aliquid assumenda at cum
                            dignissimos distinctio dolorem, dolores enim eveniet harum iste maxime nemo nostrum pariatur
                            perferendis quas, quo reprehenderit voluptates? Ab ad aliquid aspernatur blanditiis delectus
                            dolor dolorum error impedit, laboriosam magni maiores numquam omnis optio porro quisquam
                            ratione reiciendis repellat sit suscipit tempore ut vitae voluptatem voluptatum. Earum
                            provident, ut. Aut dolorum eos labore nobis quas ratione sint voluptate. Accusantium aliquid
                            aut exercitationem facilis ipsum laboriosam laborum magni modi molestiae nemo perspiciatis
                            provident quasi, quisquam quo sequi tempora vel velit voluptatem. Facilis molestias odit
                            quas? Aliquid fugiat neque, quas quo quod sint! Ad aliquid asperiores aspernatur at atque
                            delectus dicta earum eius excepturi hic minus, modi neque nisi, nobis obcaecati odit rerum
                            saepe soluta tenetur voluptatibus! Aspernatur consequatur dicta, dolores eligendi eveniet
                            ex, explicabo laudantium nostrum perferendis saepe sint suscipit, voluptas? Ab accusantium
                            ad aliquid animi aperiam aut consequuntur cumque delectus deserunt dicta dignissimos dolores
                            eaque earum eligendi est ex excepturi hic laudantium magnam modi mollitia nam natus
                            necessitatibus nihil numquam odit perferendis porro quaerat quam reiciendis repellat,
                            repellendus rerum tenetur unde ut vel vero. Ab adipisci aliquid amet animi aspernatur
                            assumenda beatae blanditiis consequatur cum deserunt dolor dolore earum eos est eum facere
                            iste minima nemo nesciunt odit quae quidem quos recusandae reiciendis reprehenderit
                            sapiente, sed suscipit ut voluptate voluptatum. Architecto consequatur quasi saepe. Aliquam
                            assumenda commodi consequuntur culpa deserunt enim est facilis laudantium magnam maiores
                            natus nulla quia quis rerum sequi tempora voluptatem, voluptates. Accusantium at aut beatae
                            blanditiis consequuntur cum debitis dignissimos eaque, eius eligendi eos error expedita
                            harum, incidunt ipsum itaque laborum magnam minus nam natus nobis, officia perspiciatis
                            possimus reprehenderit rerum sit tempora veniam. Alias aliquid animi asperiores assumenda,
                            doloribus dolorum eum facilis illo impedit incidunt ipsum minima natus necessitatibus nemo
                            nesciunt odit praesentium quae, quaerat quos ratione repellendus rerum sequi sit tempore
                            velit. Dolores fugiat hic illum libero magnam, placeat.
                        </p>
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
                        <a href='https://betcity.ru/' target='_blank' className={styles.banner} />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
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
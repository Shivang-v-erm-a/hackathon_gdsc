import React from 'react'

const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>CareVerse</h1>
                    <p>Solution to all your health problems</p>
                </main>
            </div>

            <div className="home2">
                <img src='https://thumbs.dreamstime.com/b/medical-background-medical-tools-stethoscope-86031880.jpg' alt="Graphics" />
                <div>
                    <p>
                        We are your one and only solution to the health problems you face
                        every day. We are leading healthcare hub whose aim is to decrease the
                        health issues within us.
                    </p>
                </div>
            </div>

            <div className="home3" id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                        officiis hic illo quos sit commodi, aut magnam odio eligendi? Totam
                        quis officiis fugit sunt dolores nostrum tenetur iusto est odio
                        mollitia. Dolor placeat repellendus officia aspernatur dolorum
                        harum. Dolorem cumque quaerat eius qui deserunt ullam laudantium
                        quia tempore. Dignissimos esse sequi numquam est ipsam nemo,
                        voluptas vel recusandae iste aspernatur qui quasi, commodi, atque
                        ipsa dolores tempore asperiores? Dolores soluta placeat molestiae
                        aperiam, ullam officia fugiat corrupti odio, suscipit ipsum cum vel
                        nemo. Ratione quo tempore fugit quaerat! Facilis beatae impedit
                        similique maxime praesentium sunt unde necessitatibus voluptates
                        ipsa, et, numquam reiciendis eveniet? Aliquid nemo nesciunt placeat,
                        qui fuga quae repellat sunt, non natus, iure ab officia rem ipsa cum
                        sed cumque corporis voluptate quibusdam nostrum quod saepe
                    </p>
                </div>
            </div>

            <div className="home4" id='hospitals'>
                <div>
                    <h1>Hospitals</h1>
                    <article>
                        <div
                            style={{
                                animationDelay: "0.3s",
                            }}
                        >
                            <img id='h1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZl8uXiqfQN9o846THpGHt4diG0aZmP625Ib_5xkLDg&s" alt="" />
                        </div>

                        <div
                            style={{
                                animationDelay: "0.5s",
                            }}
                        >
                            <img id='h1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPU5nCFVLIjG3UypjoZN0R8exQYnvwIcT979SWQwLsQ&s" alt="" />
                        </div>

                        <div
                            style={{
                                animationDelay: "0.7s",
                            }}
                        >
                            <img id='h1' src="https://penji.co/wp-content/uploads/2022/10/9-st-john--1024x1024.jpg" alt="" />
                        </div>

                        <div
                            style={{
                                animationDelay: "1s",
                            }}
                        >
                            <img id='h1' src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/02/attachment_67428215-e1518608020593.png?auto=format&q=60&fit=max&w=930" alt="" />
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home
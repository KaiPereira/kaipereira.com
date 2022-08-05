import React from "react"
import Link from "next/link"

export default function AboutMain(props) {
    return (
        <main>
            <section className="aboutAlign">
                <div className="about">
                    <img src="/photo.png" alt="Photo of Me" className="aboutPhoto" />
                    <div className="aboutInfo">
                        <h1>Hi! I'm Kai</h1>
                        <p className="aboutInfoDescription">I’m a passionate fullstack developer and UI/UX Designer based in Victoria, BC! I love solving hard problems and transfering them into beautiful and functional solutions!<br /><br />My interest in web development and design started in the summer of 2021 and since then I have worked extremely hard to become a fantastic developer and designer!<br /><br />Currently I am working as an active freelance for a multitude of services like web design, development and app development!<br /><br />When I’m not staring at my computer I am chilling with my kitties, getting some fresh air or streaming!</p>
                    </div>
                </div>
            </section> 
            <section className="aboutTechnologies">
                <h2>My Technologies</h2>
                <div className="aboutTechnologiesTable">
                    <ul>
                        <li>
                            <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.03783 4.22229C7.533 4.62253 7.533 5.37747 7.03783 5.77771L2.12862 9.74578C1.47468 10.2744 0.5 9.80892 0.5 8.96807L0.5 1.03193C0.5 0.191082 1.47468 -0.274355 2.12862 0.254219L7.03783 4.22229Z" fill="#A7A7A7"/>
                            </svg>
                            <p>Figma</p>
                        </li>
                        <li>
                            <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.03783 4.22229C7.533 4.62253 7.533 5.37747 7.03783 5.77771L2.12862 9.74578C1.47468 10.2744 0.5 9.80892 0.5 8.96807L0.5 1.03193C0.5 0.191082 1.47468 -0.274355 2.12862 0.254219L7.03783 4.22229Z" fill="#A7A7A7"/>
                            </svg>
                            <p>Photoshop</p>
                        </li> 
                        <li>
                            <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.03783 4.22229C7.533 4.62253 7.533 5.37747 7.03783 5.77771L2.12862 9.74578C1.47468 10.2744 0.5 9.80892 0.5 8.96807L0.5 1.03193C0.5 0.191082 1.47468 -0.274355 2.12862 0.254219L7.03783 4.22229Z" fill="#A7A7A7"/>
                            </svg>
                            <p>SASS</p>
                        </li> 
                        <li>
                            <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.03783 4.22229C7.533 4.62253 7.533 5.37747 7.03783 5.77771L2.12862 9.74578C1.47468 10.2744 0.5 9.80892 0.5 8.96807L0.5 1.03193C0.5 0.191082 1.47468 -0.274355 2.12862 0.254219L7.03783 4.22229Z" fill="#A7A7A7"/>
                            </svg>
                            <p>React/Next.js</p>
                        </li> 
                    </ul>



                    <ul>
                        <li>
                            <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.03783 4.22229C7.533 4.62253 7.533 5.37747 7.03783 5.77771L2.12862 9.74578C1.47468 10.2744 0.5 9.80892 0.5 8.96807L0.5 1.03193C0.5 0.191082 1.47468 -0.274355 2.12862 0.254219L7.03783 4.22229Z" fill="#A7A7A7"/>
                            </svg>
                            <p>MongoDB</p>
                        </li>
                        <li>
                            <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.03783 4.22229C7.533 4.62253 7.533 5.37747 7.03783 5.77771L2.12862 9.74578C1.47468 10.2744 0.5 9.80892 0.5 8.96807L0.5 1.03193C0.5 0.191082 1.47468 -0.274355 2.12862 0.254219L7.03783 4.22229Z" fill="#A7A7A7"/>
                            </svg>
                            <p>Express</p>
                        </li> 
                        <li>
                            <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.03783 4.22229C7.533 4.62253 7.533 5.37747 7.03783 5.77771L2.12862 9.74578C1.47468 10.2744 0.5 9.80892 0.5 8.96807L0.5 1.03193C0.5 0.191082 1.47468 -0.274355 2.12862 0.254219L7.03783 4.22229Z" fill="#A7A7A7"/>
                            </svg>
                            <p>Node.js</p>
                        </li> 
                        <li>
                            <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.03783 4.22229C7.533 4.62253 7.533 5.37747 7.03783 5.77771L2.12862 9.74578C1.47468 10.2744 0.5 9.80892 0.5 8.96807L0.5 1.03193C0.5 0.191082 1.47468 -0.274355 2.12862 0.254219L7.03783 4.22229Z" fill="#A7A7A7"/>
                            </svg>
                            <p>JavaScript</p>
                        </li> 
                    </ul>
                </div>
            </section>
            <section className="aboutMoodboardAlign">
                <div className="aboutMoodboard">
                    <div>
                        <h3>Personal Mood Board</h3>
                        <p>A collection of my inner personality!</p>
                    </div>
                    <div className="aboutMoodboardImages aboutMoodboardImages1">
                        <div className="moodboardColumn">
                            <img src="/moodboard/moodBoard1.png" alt="tropical sea" />
                            <img src="/moodboard/moodBoard4.png" alt="flower garden" />
                            <img src="/moodboard/moodBoard18.png" alt="balanced rocks" />
                            <img src="/moodboard/moodBoard15.png" alt="lush waterfall" />
                            <img src="/moodboard/moodBoard12.png" alt="books" />
                            <img src="/moodboard/moodBoard7.png" alt="modern architectual design" />
                        </div>
                        <div className="moodboardColumn">
                            <img src="/moodboard/moodBoard2.png" alt="berry smoothie bowl" />
                            <img src="/moodboard/moodBoard5.png" alt="minimalistic chair and table" />
                            <img src="/moodboard/moodBoard17.png" alt="mangostein fruit and modern elements" />
                            <img src="/moodboard/moodBoard14.png" alt="colorfull oranges" />
                            <img src="/moodboard/moodBoard11.png" alt="kindess portrait and color" />
                            <img src="/moodboard/moodBoard8.png" alt="dirty hands" />
                        </div>
                        <div className="moodboardColumn">
                            <img src="/moodboard/moodBoard3.png" alt="adorable kittens" />
                            <img src="/moodboard/moodBoard6.png" alt="axolotl's in modern image" />
                            <img src="/moodboard/moodBoard16.png" alt="panda in lush nature" />
                            <img src="/moodboard/moodBoard13.png" alt="fierce and strong buck" />
                            <img src="/moodboard/moodBoard10.png" alt="mountains and lake" />
                            <img src="/moodboard/moodBoard9.png" alt="someone climbing/hiking" />
                        </div>
                    </div>
                    <div className="aboutMoodboardImages aboutMoodboardImages2">
                        <div className="moodboardColumn">
                            <img src="/moodboard/moodBoard1.png" alt="tropical sea" />
                            <img src="/moodboard/moodBoard3.png" alt="adorable kittens" />
                            <img src="/moodboard/moodBoard16.png" alt="panda in lush nature" />
                            <img src="/moodboard/moodBoard13.png" alt="fierce and strong buck" />
                            <img src="/moodboard/moodBoard9.png" alt="someone climbing/hiking" />
                            <img src="/moodboard/moodBoard4.png" alt="flower garden" />
                            <img src="/moodboard/moodBoard18.png" alt="balanced rocks" />
                            <img src="/moodboard/moodBoard15.png" alt="lush waterfall" />
                            <img src="/moodboard/moodBoard12.png" alt="books" />
                            <img src="/moodboard/moodBoard7.png" alt="modern architectual design" />
                        </div>
                        <div className="moodboardColumn">
                            <img src="/moodboard/moodBoard2.png" alt="berry smoothie bowl" />
                            <img src="/moodboard/moodBoard6.png" alt="axolotl's in modern image" />
                            <img src="/moodboard/moodBoard13.png" alt="fierce and strong buck" />
                            <img src="/moodboard/moodBoard10.png" alt="mountains and lake" />
                            <img src="/moodboard/moodBoard5.png" alt="minimalistic chair and table" />
                            <img src="/moodboard/moodBoard17.png" alt="mangostein fruit and modern elements" />
                            <img src="/moodboard/moodBoard14.png" alt="colorfull oranges" />
                            <img src="/moodboard/moodBoard11.png" alt="kindess portrait and color" />
                            <img src="/moodboard/moodBoard8.png" alt="dirty hands" />
                        </div>
                    </div>
                    <div className="aboutMoodboardImages aboutMoodboardImages3">
                        <div className="moodboardColumn">
                            <img src="/moodboard/moodBoard1.png" alt="tropical sea" />
                            <img src="/moodboard/moodBoard3.png" alt="adorable kittens" />
                            <img src="/moodboard/moodBoard16.png" alt="panda in lush nature" />
                            <img src="/moodboard/moodBoard13.png" alt="fierce and strong buck" />
                            <img src="/moodboard/moodBoard9.png" alt="someone climbing/hiking" />
                            <img src="/moodboard/moodBoard4.png" alt="flower garden" />
                            <img src="/moodboard/moodBoard18.png" alt="balanced rocks" />
                            <img src="/moodboard/moodBoard15.png" alt="lush waterfall" />
                            <img src="/moodboard/moodBoard12.png" alt="books" />
                            <img src="/moodboard/moodBoard7.png" alt="modern architectual design" />
                            <img src="/moodboard/moodBoard2.png" alt="berry smoothie bowl" />
                            <img src="/moodboard/moodBoard6.png" alt="axolotl's in modern image" />
                            <img src="/moodboard/moodBoard13.png" alt="fierce and strong buck" />
                            <img src="/moodboard/moodBoard10.png" alt="mountains and lake" />
                            <img src="/moodboard/moodBoard5.png" alt="minimalistic chair and table" />
                            <img src="/moodboard/moodBoard17.png" alt="mangostein fruit and modern elements" />
                            <img src="/moodboard/moodBoard14.png" alt="colorfull oranges" />
                            <img src="/moodboard/moodBoard11.png" alt="kindess portrait and color" />
                            <img src="/moodboard/moodBoard8.png" alt="dirty hands" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
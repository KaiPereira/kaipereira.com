import React from "react"
import EltonPereiraCard from "./subcomponents/WorkCard"
import BlogArticleCard from "./subcomponents/BlogArticleCard"
import Link from "next/link"
import works from "./work.json"

export default function HomeMain(props) {
    const [windowPlacement, changeWindowPlacement] = React.useState()
    const [carouselPosition, changeCarouselPosition] = React.useState(0)
    const [blogArticles, changeBlogArticles] = React.useState()
    const [workElements, changeWorkElements] = React.useState()

    // Services Scroll Effect
    React.useEffect(() => {
        function windowMove() {
            const scrollDistance = window.scrollY
            changeWindowPlacement(scrollDistance)
        }

        window.addEventListener("scroll", windowMove)

        return () => {
            window.removeEventListener("scroll", windowMove)
        }
    }, [])

    // Works

    React.useEffect(() => {
        changeWorkElements(works.map((work, index) => {
            return (
                <EltonPereiraCard 
                    backgroundColor={work.backgroundColor}
                    header={work.header}
                    shortDescription={work.shortDescription}
                    tags={work.tags}
                    mockup={work.mockup}
                    cursorEnterBlob={props.cursorEnterBlob} 
                    cursorLeave={props.cursorLeave}
                    link={work.link}
                    key={index}
                />
            )
        }))
    }, [])




    function moveCarousel(direction) {
        if (direction == "backwards" && carouselPosition !== 0) {
            changeCarouselPosition(prevState => prevState + 1)
        } else if (direction == "forward" && carouselPosition !== -5) {
            changeCarouselPosition(prevState => prevState - 1)
        }
    }

    return (
        <main>
            <section className="homeMainAlign">
                <div className="homeMainHero">
                    <div className="homeMainHeaders">
                        <h1>Kai Pereira</h1>
                        <p>I Bring Great Ideas to Life...</p>
                    </div>
                    <div className="homeMainBlob"></div>
                </div>
                <div className="homeDecorationalMouse">
                    <div></div>
                </div>
            </section> 
            <section className="featuredHomeAlign">
                <div className="featuredHome">
                    <h2>Featured</h2>
                    <div className="featuredHomeCards">
                        {workElements}
                    </div>
                    <div className="featuredWorkButtonAlign">
                        <Link href="/work">
                            <button className="featuredWorkButton" onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave}>
                                <p>View All Projects</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <div className="homeSeperationAlign">
                <div className="homeSeperation"></div>
            </div>
            <section className="aboutHomeAlign">
                <div className="aboutHome">
                    <img src="/photo.png" alt="Photo of Me" className="aboutHomePhoto" />
                    <div className="aboutHomeInfo">
                        <h3>Hi! I&apos;m Kai</h3>
                        <p className="aboutHomeInfoDescription">I’m a passionate fullstack developer and UI/UX Designer based in Victoria, BC! I love solving hard problems and transfering them into beautiful and functional solutions!<br/><br/>My interest in web development and design started in the summer of 2021 and since then I have worked extremely hard to become a fantastic developer and designer!</p>
                        <Link href="/about">
                            <button onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave}>
                                <p>Learn More</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="servicesHome">
                <div className="servicesHomeAlign1" style={{right: windowPlacement - (4000)}}>
                    <p>Web Development</p>
                    <p>Branding</p>
                    <p>E-Commerce</p>
                    <p>CMS</p>
                    <p>Branding</p>
                    <p>UI/UX Design</p>
                    <p>Web Development</p>
                    <p>SAAS</p>
                    <p>Mobile Development</p>
                    <p>Branding</p>
                </div>
                <div className="servicesHomeAlign2" style={{left: windowPlacement - (4200)}}>
                    <p>Web Development</p>
                    <p>E-Commerce</p>
                    <p>CMS</p>
                    <p>Mobile Development</p>
                    <p>UI/UX Design</p>
                    <p>Web Development</p>
                    <p>App Development</p>
                    <p>SASS</p>
                    <p>UI/UX Design</p>
                    <p>Mobile Development</p>
                </div>
            </section>
            <section className="blogHomeAlign">
                <div className="blogHome">
                    <h4>Blog</h4>
                    <div className="blogHomeArticles" style={{left: `calc(${carouselPosition} * var(--slider-value) + 25px)`}}>
                        <a href="https://kai-pereira.hashnode.dev/learning-simplified" target="_blank" rel="noreferrer">
                            <div className="blogArticleCardHover">
                            <div className="blogArticleCard">
                                <img src="https://cdn.hashnode.com/res/hashnode/image/unsplash/iulnjpZyWnc/upload/v1654443238404/KgOYSIqqu.jpeg" className="articleCardThumbnail" alt="Blog Article Card Thumbnail" />
                                <p className="articleCardHeader">The Best Way to Learn UI Design in 2022 Simplified</p>
                                <div className="blogArticleCardInfo">
                                    <p className="articleCardDate">Jun 04, 2022</p>
                                    <p className="articleCardTime">3 min read</p>
                                </div>
                            </div>
                            </div>
                        </a>
                        <a href="https://kai-pereira.hashnode.dev/expert-elements" target="_blank" rel="noreferrer">
                            <div className="blogArticleCardHover">
                            <div className="blogArticleCard">
                                <img src="https://cdn.hashnode.com/res/hashnode/image/unsplash/qDG7XKJLKbs/upload/v1654361299960/1JQ1UFER7.jpeg" className="articleCardThumbnail" alt="Blog Article Card Thumbnail" />
                                <p className="articleCardHeader">9 Expert Level CSS Elements To Master in 2022</p>
                                <div className="blogArticleCardInfo">
                                    <p className="articleCardDate">Jun 03, 2022</p>
                                    <p className="articleCardTime">3 min read</p>
                                </div>
                            </div>
                            </div>
                        </a>
                        <a href="https://kai-pereira.hashnode.dev/css-frameworks" target="_blank" rel="noreferrer">
                            <div className="blogArticleCardHover">
                            <div className="blogArticleCard">
                                <img src="https://cdn.hashnode.com/res/hashnode/image/unsplash/_t-l5FFH8VA/upload/v1654267686124/BkomEx2F8.jpeg" className="articleCardThumbnail" alt="Blog Article Card Thumbnail" />
                                <p className="articleCardHeader">The Top 5 CSS Frameworks for Your Future Projects</p>
                                <div className="blogArticleCardInfo">
                                    <p className="articleCardDate">Jun 02, 2022</p>
                                    <p className="articleCardTime">3 min read</p>
                                </div>
                            </div>
                            </div>
                        </a>
                        <a href="https://kai-pereira.hashnode.dev/framework-competition" target="_blank" rel="noreferrer">
                            <div className="blogArticleCardHover">
                            <div className="blogArticleCard">
                                <img src="https://cdn.hashnode.com/res/hashnode/image/unsplash/0qvBNep1Y04/upload/v1654180919308/cKAQBvjV3.jpeg" className="articleCardThumbnail" alt="Blog Article Card Thumbnail" />
                                <p className="articleCardHeader">React vs Angular vs Vue: Which One is Better?</p>
                                <div className="blogArticleCardInfo">
                                    <p className="articleCardDate">Jun 01, 2022</p>
                                    <p className="articleCardTime">3 min read</p>
                                </div>
                            </div>
                            </div>
                        </a>
                        <a href="https://kai-pereira.hashnode.dev/learn-frontent" target="_blank" rel="noreferrer">
                            <div className="blogArticleCardHover">
                            <div className="blogArticleCard">
                                <img src="https://cdn.hashnode.com/res/hashnode/image/unsplash/webyw4NsFPg/upload/v1654091812786/Bcf3-fwqE.jpeg" className="articleCardThumbnail" alt="Blog Article Card Thumbnail" />
                                <p className="articleCardHeader">The Best Way to Learn HTML, CSS, JavaScript Simplified!</p>
                                <div className="blogArticleCardInfo">
                                    <p className="articleCardDate">May 31, 2022</p>
                                    <p className="articleCardTime">3 min read</p>
                                </div>
                            </div>
                            </div>
                        </a>
                        <a href="https://kai-pereira.hashnode.dev/design-trends" target="_blank" rel="noreferrer">
                            <div className="blogArticleCardHover">
                            <div className="blogArticleCard">
                                <img src="https://cdn.hashnode.com/res/hashnode/image/unsplash/zepnJQycr4U/upload/v1654008415964/N1aANrrWV.jpeg" className="articleCardThumbnail" alt="Blog Article Card Thumbnail" />
                                <p className="articleCardHeader">What are the Next Trends in UI Design Going to Be!</p>
                                <div className="blogArticleCardInfo">
                                    <p className="articleCardDate">May 30, 2022</p>
                                    <p className="articleCardTime">3 min read</p>
                                </div>
                            </div>
                            </div>
                        </a>
                    </div>
                    <div className="blogArticleArrowsAlign">
                        <div className="blogArticleArrows">
                            <div className="blogArticleArrow" onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave} onClick={() => moveCarousel("backwards")}>
                                <i className="fa-solid fa-angle-left"></i>
                            </div>
                            <div className="blogArticleArrow" onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave} onClick={() => moveCarousel("forward")}>
                                <i className="fa-solid fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

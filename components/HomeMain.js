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

    // Blog Articles
    React.useEffect(() => {

        changeBlogArticles(props.posts.map((post, index) => {
            return (
                <BlogArticleCard 
                    thumbnail={post.coverImage}
                    header={post.title}
                    date={post.dateAdded}
                    time="3 min read"
                    link={post.slug}
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
                        {blogArticles}
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

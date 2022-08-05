import React from "react"
import EltonPereiraCard from "./subcomponents/WorkCard"

export default function WorkMain(props) {
    const [workFilter, changeWorkFilter] = React.useState("all")

    function changeWorkFilterFunction(filter) {
        changeWorkFilter(filter)
    }

    return (
        <main>
            <section className="workMainAlign">
                <div className="workMain">
                    <div>
                        <p className="workMainSubHeader">Projects</p>
                        <h1>Our Projects</h1>
                        <p className="workMainDescription">I take great ideas and turn them into a reality through modern technologies and design</p>
                        <div className="workMainFilters">
                            <button className="workMainFilter" onClick={() => changeWorkFilterFunction("all")} style={{background: workFilter == "all" && "#161616", color: workFilter == "all" && "#FFF"}} onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave}>
                                <p>All</p>
                            </button>
                            <button className="workMainFilter" onClick={() => changeWorkFilterFunction("websites")} style={{background: workFilter == "websites" && "#161616", color: workFilter == "websites" && "#FFF"}} onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave}>
                                <p>Websites</p>
                            </button>
                            <button className="workMainFilter" onClick={() => changeWorkFilterFunction("apps")} style={{background: workFilter == "apps" && "#161616", color: workFilter == "apps" && "#FFF"}} onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave}>
                                <p>Apps</p>
                            </button>
                        </div>
                    </div>
                    <div className="workCards">
                        <EltonPereiraCard 
                            backgroundColor="rgb(37, 37, 37)"
                            header="Elton Pereira"
                            shortDescription="Web design and development for a serial entrepreneur and angel investor developing a rap song!"
                            tags={["UI", "Web"]}
                            mockup="/eltonPereiraSite.png"
                            cursorEnterBlob={props.cursorEnterBlob} 
                            cursorLeave={props.cursorLeave}
                            link="eltonpereira"
                        />
                        <EltonPereiraCard 
                            backgroundColor="rgb(37, 37, 37)"
                            header="Elton Pereira"
                            shortDescription="Web design and development for a serial entrepreneur and angel investor developing a rap song!"
                            tags={["UI", "Web"]}
                            mockup="/eltonPereiraSite.png"
                            cursorEnterBlob={props.cursorEnterBlob} 
                            cursorLeave={props.cursorLeave}
                            link="eltonpereira"
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}
import React from "react"
import EltonPereiraCard from "./subcomponents/WorkCard"
import works from "./work.json"

export default function WorkMain(props) {
    const [workFilter, changeWorkFilter] = React.useState("all")
    const [workElements, changeWorkElements] = React.useState()

    function changeWorkFilterFunction(filter) {
        changeWorkFilter(filter)
    }

    React.useEffect(() => {
        changeWorkElements(works.map((work, index) => {
            if (work.tags.includes(workFilter) || workFilter == "all")
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
    }, [workFilter])

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
                            <button className="workMainFilter" onClick={() => changeWorkFilterFunction("Web")} style={{background: workFilter == "Web" && "#161616", color: workFilter == "Web" && "#FFF"}} onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave}>
                                <p>Web</p>
                            </button>
                            <button className="workMainFilter" onClick={() => changeWorkFilterFunction("App")} style={{background: workFilter == "App" && "#161616", color: workFilter == "App" && "#FFF"}} onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave}>
                                <p>App</p>
                            </button>
                        </div>
                    </div>
                    <div className="workCards">
                        {workElements}
                    </div>
                </div>
            </section>
        </main>
    )
}
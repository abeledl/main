import PrompterComponent from "./PrompterComponent"
import FooterComponent from "./FooterComponent"
import BlurrComponent from "../BlurrComponent"
import myVideo from "../assets/video2.webm"
// import myImage from "../assets/image1.png"
export default function StageComponent({ data, breakLineTracker, setBreakLineTracker }) {
    const stageStyle = {
        width: "1024px",
        height: "2048px",
        background: "rgb(250, 250, 250)",
        display: "grid",
        gridTemplateRows: "45% 45% 10%",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        background: "linear-gradient(40deg, var(--color-bg1), var(--color-bg2))"
    }

    const videoStyle = {
        left: '7.4%',
        height: "1900px",
        // background: `url(${myImage})`,
        position: "absolute"
    }

    return (
        <div style={stageStyle}>
            <BlurrComponent />
            <div style={videoStyle}>
                <video width="100%" height="100%" autoPlay loop muted>
                    <source src={myVideo} type="video/webm" />
                </video> */
            </div>
            <PrompterComponent
                data={data.englishText}
                breakLineTracker={breakLineTracker}
                setBreakLineTracker={setBreakLineTracker}
            />
            <PrompterComponent
                data={data.spanishText}
                breakLineTracker={breakLineTracker}
                setBreakLineTracker={setBreakLineTracker}
            />
            <FooterComponent />
        </div>
    )
}
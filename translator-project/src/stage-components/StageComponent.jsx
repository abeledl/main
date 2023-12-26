import PrompterComponent from "./PrompterComponent"
import FooterComponent from "./FooterComponent"

export default function StageComponent({ data, breakLineTracker, setBreakLineTracker }) {
    const stageStyle = {
        width: "1024px",
        height: "2048px",
        background: "rgb(250, 250, 250)",
        display: "grid",
        gridTemplateRows: "45% 45% 10%",
        justifyContent: "center",
        alignItems: "center",
    }

    return (
        <div style={stageStyle}>
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
import "../css/titles.css"
import Typed from 'react-typed'

export default function Description() {
    return (
        <div className="MyDescription">
            <Typed
                strings={["Full stack developer", "Front end developer", "Back end developer", "Scroll to see more!"]}
                typeSpeed={50}
                backDelay={750}
                backSpeed={50}
                loop
            />
        </div>
    )
}
import StandardTemplate from "../../templates/standard";
import "./style.scss"
interface Previewer {
    data?: any
}
export default function Previewer(props: Previewer) {
    const { data } = props
    return (
        <div className="previewer">< StandardTemplate data={data} /></div>)
}
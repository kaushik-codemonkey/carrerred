import StandardTemplate from "../../templates/standard";
interface Previewer {
    data?: any
}
export default function Previewer(props: Previewer) {
    const { data } = props
    return < StandardTemplate data={data} />
}
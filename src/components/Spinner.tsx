import {RotatingLines} from "react-loader-spinner";

const Spinner = () => {
    return (
        <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="2.0"
            width="96"
            visible={true}
        />
    )
}

export default Spinner;
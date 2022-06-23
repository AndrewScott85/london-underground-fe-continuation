import {motion} from "framer-motion";

const ErrorMessage = () => {

    const open = {opacity: 1, y: 0};
    const closed = {opacity: 0, y: -8};

    return (
        <motion.div initial={closed} animate={open}>
            <p>No possible journeys found. Bummer.</p>
        </motion.div>
    );
}

export default ErrorMessage;

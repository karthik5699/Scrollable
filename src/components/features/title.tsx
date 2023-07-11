import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useFeatureStore } from "./store";

type Props = {
    children: React.ReactNode;
    id: string
};

const FeatureTitle = ({children, id}: Props) => {

    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px"});
    const setInViewFeature = useFeatureStore(state => state.setInViewFeature)

    useEffect(() => {
       if(isInView) setInViewFeature(id)
    }, [isInView, id, setInViewFeature])

    return (
        <p ref={ref} className={`py-16 font-heading text-5xl transition-colors text-gray-300 ${isInView ? "text-black" : "text-gray-300"}`}>
            {children}
        </p>
    )
}

export default FeatureTitle;
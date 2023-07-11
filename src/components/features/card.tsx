import { useFeatureStore } from "./store";

type FeatureCardProps = {
    gradient: string;
    children: React.ReactNode;
} & CardProps;

type CardProps = {
    id: string;
}

const FeatureCard = ({gradient, children, id}: FeatureCardProps) => {
    const inViewFeature = useFeatureStore((state) => state.inViewFeature);
    return (
        <div className={`absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br opacity-0 transition-opacity 
             ${gradient} ${inViewFeature === id ? "opacity-100" : "opacity-0"}`}
        >
            {children}
        </div>
    )
}

export const Todo = ({id}: CardProps) => {
    return (
        <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
            <span></span>
        </FeatureCard>
    )
}

export const Colors = ({id}: CardProps) => {
    return (
        <FeatureCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
            <span></span>
        </FeatureCard>
    )
}

export const Availability = ({id}: CardProps) => {
    return (
        <FeatureCard id={id} gradient="from-[#f5fff7] to-[#adf8ff]">
            <span></span>
        </FeatureCard>
    )
}

export const Music = ({id}: CardProps) => {
    return (
        <FeatureCard id={id} gradient="from-[#f7fff5] to-[#adffd8]">
            <span></span>
        </FeatureCard>
    )
}

export const Team = ({id}: CardProps) => {
    return (
        <FeatureCard id={id} gradient="from-[#fff7f5] to-[#ffd8ad]">
            <span></span>
        </FeatureCard>
    )
}
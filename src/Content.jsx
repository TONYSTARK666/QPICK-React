import { Section } from "./Section";

export const Content = (props) => {
    return (
        <main>
            <Section headphones={props.headphones} title={"Наушники"} wire={true} toCart={props.toCart} toLikes={props.toLikes} />
            <Section headphones={props.headphones} title={""} wire={true} toCart={props.toCart} toLikes={props.toLikes} />
            <Section headphones={props.headphones} title={"Беспроводные наушники"} wire={false} toCart={props.toCart} toLikes={props.toLikes} />
        </main>
    );
};

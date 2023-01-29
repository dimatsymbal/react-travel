type Props = {
    text:string;
}

export const Title = (props: Props) => {
    return <h1>Hello {props.text}</h1>
}

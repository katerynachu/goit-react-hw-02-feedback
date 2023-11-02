import { Button } from "./FeedbackButton.styled"
export const FeedbackButton = ({name,onClick}) => {

 return(
    <>
    <Button onClick={onClick}>{name}</Button>
    </>
 )
}
import { List,ListItem } from "./Statistics.styled"

export const Statistics = ({good,bad,neutral,total,percent}) => {
    // const total = good + bad + neutral;
    return(
    <List>
        <ListItem>Good : {good}</ListItem>
        <ListItem>Neutral : {neutral}</ListItem>
        <ListItem>Bad : {bad}</ListItem>
        <ListItem>Total : {total}</ListItem>
        <ListItem>Positive Feedback : {percent} %</ListItem>
    </List>
    )
   }
export const Statistics = ({good,bad,neutral,total,percent}) => {
    // const total = good + bad + neutral;
    return(
    <ul>
        <li>Good : {good}</li>
        <li>Neutral : {neutral}</li>
        <li>Bad : {bad}</li>
        <li>Total : {total}</li>
        <li>Positive Feedback : {percent} %</li>
    </ul>
    )
   }
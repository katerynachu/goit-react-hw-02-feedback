export const FeedbackBoard = ({good,bad,neutral,total,percent}) => {
    // const total = good + bad + neutral;
    return(
       <>
       <p>Statistics</p>
    <ul>
        <li>Good : {good}</li>
        <li>Neutral : {neutral}</li>
        <li>Bad : {bad}</li>
        <li>Total : {total}</li>
        <li>Positive Feedback : {percent} %</li>
    </ul>
       </>
    )
   }
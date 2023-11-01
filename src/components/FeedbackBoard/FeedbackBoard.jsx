export const FeedbackBoard = ({good,bad,neutral}) => {
    return(
       <>
       <p>Statistics</p>
    <ul>
        <li>Good : {good}</li>
        <li>Neutral : {neutral}</li>
        <li>Bad : {bad}</li>
    </ul>
       </>
    )
   }
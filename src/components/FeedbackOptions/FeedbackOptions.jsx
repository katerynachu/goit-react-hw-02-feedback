import { FeedbackButton } from "components/FeedbackButton/FeedbackButton"
export const FeedbackOptions = ({options,onLeaveFeedback}) =>{
    return(
        <>
        <FeedbackButton
        onClick={()=> onLeaveFeedback('good')}
        name={'good'}
        />
        <FeedbackButton
          onClick={()=> onLeaveFeedback('neutral')}
          name={'neutral'}
        />
        <FeedbackButton
          onClick={()=> onLeaveFeedback('bad')}
          name={'bad'}
        />
        </>
    )
}
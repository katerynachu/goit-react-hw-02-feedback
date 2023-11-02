import { FeedbackButton } from "components/FeedbackButton/FeedbackButton"
import {Board} from './FeedbackOptions.styled'
export const FeedbackOptions = ({options,onLeaveFeedback}) =>{
    return(
        <Board>
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
        </Board>
    )
}
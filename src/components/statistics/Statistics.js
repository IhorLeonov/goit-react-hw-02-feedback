import { Wrapper } from 'components/statistics/Statistics.styled';
import { Notification } from 'components/notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {total ? (
        <Wrapper>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </Wrapper>
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </>
  );
};

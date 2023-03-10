import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';

export const MuiTimeLine = () => {
  return (
    <Timeline position='right'>
      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>09:30 AM</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='secondary' variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>City A</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>10:30 AM</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='secondary' variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>City B</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>11:30 AM</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='secondary' variant='outlined' />
        </TimelineSeparator>
        <TimelineContent>City C</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

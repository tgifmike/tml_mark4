'use client'
import { FC } from 'react'
import TimeAgo from 'react-timeago';

interface TimeSinceProps {
  date: Date
}

const TimeSince: FC<TimeSinceProps> = ({date}) => {
  return <TimeAgo date={date} />
}

export default TimeSince
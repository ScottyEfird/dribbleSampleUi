import JobTypes from './JobTypes'

// ~From a magical API~ via GET or whatever
const JOBS = [
  {
    id: 1,
    title: 'Senior PHP Developer',
    type: JobTypes.HOURLY,
    location: {
      job: 'Epic Coders',
      address: 'Indianopolis, IN'
    },
    replayRate: '82%',
    pay: '$44/hr',
    tags: [ 'UI', 'UX', 'android', 'javascript', 'sketch' ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
  },
  {
    id: 2,
    title: 'Senior PHP Developer',
    type: JobTypes.PART_TIME,
    location: {
      job: 'Epic Coders',
      address: 'Indianopolis, IN'
    },
    replayRate: '82%',
    pay: '$44/hr',
    tags: [ 'UI', 'UX', 'android', 'javascript', 'sketch' ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
  },
  {
    id: 3,
    title: 'Senior PHP Developer',
    type: JobTypes.PART_TIME,
    location: {
      job: 'Epic Coders',
      address: 'Indianopolis, IN'
    },
    replayRate: '82%',
    pay: '$44/hr',
    tags: [ 'UI', 'UX', 'android', 'javascript', 'sketch' ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
  },
  {
    id: 4,
    title: 'Senior PHP Developer',
    type: JobTypes.FULL_TIME,
    location: {
      job: 'Epic Coders',
      address: 'Indianopolis, IN'
    },
    replayRate: '82%',
    pay: '$44/hr',
    tags: [ 'UI', 'UX', 'android', 'javascript', 'sketch' ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
  },
  {
    id: 5,
    title: 'Senior PHP Developer',
    type: JobTypes.HOURLY,
    location: {
      job: 'Epic Coders',
      address: 'Indianopolis, IN'
    },
    replayRate: '82%',
    pay: '$44/hr',
    tags: [ 'UI', 'UX', 'android', 'javascript', 'sketch' ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
  },
]

export default JOBS
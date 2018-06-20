import moment from 'moment';

const DAYS = {
  sameDay: '[Today]',
  nextDay: '[Tomorrow]',
  nextWeek: 'dddd',
  lastDay: '[Yesterday]',
  lastWeek: '[Last] dddd',
  sameElse: 'DD/MM/YYYY',
};

const getDay = date => moment(new Date(date)).calendar(null, DAYS);

export default getDay;

import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';

const locale = {
	name: 'fr',
	config: {
		months: 'Janvier_Février_Mars_Avril_Mai_Juin_Juillet_Août_Septembre_Octobre_Novembre_Décembre'.split('_'),
		monthsShort: 'Janv_Févr_Mars_Avr_Mai_Juin_Juil_Août_Sept_Oct_Nov_Déc'.split('_'),
		weekdays: 'Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi'.split('_'),
		weekdaysShort: 'Dim_Lun_Mar_Mer_Jeu_Ven_Sam'.split('_'),
		weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
		longDateFormat: {
			LT: 'HH:mm',
			LTS: 'HH:mm:ss',
			L: 'DD/MM/YYYY',
			LL: 'D MMMM YYYY',
			LLL: 'D MMMM YYYY LT',
			LLLL: 'dddd D MMMM YYYY LT',
		},
		calendar: {
			sameDay: "[Aujourd'hui à] LT",
			nextDay: '[Demain à] LT',
			nextWeek: 'dddd [à] LT',
			lastDay: '[Hier à] LT',
			lastWeek: 'dddd [dernier à] LT',
			sameElse: 'L',
		},
		relativeTime: {
			future: 'dans %s',
			past: 'il y a %s',
			s: 'quelques secondes',
			m: 'une minute',
			mm: '%d minutes',
			h: 'une heure',
			hh: '%d heures',
			d: 'un jour',
			dd: '%d jours',
			M: 'un mois',
			MM: '%d mois',
			y: 'une année',
			yy: '%d années',
		},
		ordinalParse: /\d{1,2}(er|ème)/,
		ordinal(number) {
			return number + (number === 1 ? 'er' : 'ème');
		},
		meridiemParse: /PD|MD/,
		isPM(input) {
			return input.charAt(0) === 'M';
		},
		// in case the meridiem units are not separated around 12, then implement
		// this function (look at locale/id.js for an example)
		// meridiemHour : function (hour, meridiem) {
		//     return /* 0-23 hour, given meridiem token and hour 1-12 */
		// },
		meridiem(hours, minutes, isLower) {
			return hours < 12 ? 'PD' : 'MD';
		},
		week: {
			dow: 1, // Monday is the first day of the week.
			doy: 4, // The week that contains Jan 4th is the first week of the year.
		},
	},
};

const Calendar = ({ selectedDate, customDate, onDateSelected }) => (
  <View>
    <CalendarStrip
      calendarAnimation={{ type: 'sequence', duration: 80 }}
      selectedDate={selectedDate}
      daySelectionAnimation={{
				type: 'border',
				duration: 200,
			}}
      style={{ height: 150, paddingTop: 20, paddingBottom: 5 }}
      calendarHeaderStyle={{ color: 'white' }}
      calendarColor="orange"
      dateNumberStyle={{ color: 'white' }}
      dateNameStyle={{ color: 'white' }}
      highlightDateNumberStyle={{ color: 'yellow' }}
      highlightDateNameStyle={{ color: 'yellow' }}
      disabledDateNameStyle={{ color: 'grey' }}
      disabledDateNumberStyle={{ color: 'grey' }}
      iconLeft={require('../../assets/img/calendar/left-arrow-black.png')}
      iconRight={require('../../assets/img/calendar/right-arrow-black.png')}
      iconContainer={{ flex: 0.1 }}
      customDatesStyles={customDate}
      locale={locale}
      onDateSelected={onDateSelected}
      maxDayComponentSize={110}
    />
  </View>
);

Calendar.propTypes = {
	selectedDate: PropTypes.string,
	customDate: PropTypes.array,
	onDateSelected: PropTypes.func,
};

export default Calendar;

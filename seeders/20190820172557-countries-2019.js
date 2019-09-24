'use strict'
const moment = require('moment')
module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
		 * Add altering commands here.
		 * Return a promise to correctly handle asynchronicity.
		 *
		 * Example:
		 * return queryInterface.bulkInsert('People', [{
		 * name: 'John Doe',
		 * isBetaMember: false
		 * }], {});
		 */

		return queryInterface.bulkInsert('Countries', [
    
			{
				isoCode:'BD',
				name:'Bangladesh',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode :'BE',
				name :'Belgium',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'BF',
				name: 'Burkina Faso',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'BG',
				name: 'Bulgaria',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'BA',
				name: 'Bosnia and Herzegovina',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'BB',
				name: 'Barbados',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'WF',
				name: 'Wallis and Futuna',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'BL',
				name: 'Saint Barthelemy',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'BM',
				name: 'Bermuda',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'BN',
				name: 'Brunei',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'BO',
				name: 'Bolivia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'BH',
				name: 'Bahrain',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'BI',
				name: 'Burundi',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'BJ',
				name: 'Benin',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'BT',
				name: 'Bhutan',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'JM',
				name: 'Jamaica',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'BV',
				name: 'Bouvet Island',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'BW',
				name: 'Botswana',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'WS',
				name: 'Samoa',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'BQ',
				name: 'Bonaire, Saint Eustatius and Saba ',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'BR',
				name: 'Brazil',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'BS',
				name: 'Bahamas',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'JE',
				name: 'Jersey',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'BY',
				name: 'Belarus',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'BZ',
				name: 'Belize',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'RU',
				name: 'Russia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'RW',
				name: 'Rwanda',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'RS',
				name: 'Serbia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'TL',
				name: 'East Timor',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'RE',
				name: 'Reunion',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'TM',
				name: 'Turkmenistan',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'TJ',
				name: 'Tajikistan',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'RO',
				name: 'Romania',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'TK',
				name: 'Tokelau',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'GW',
				name: 'Guinea-Bissau',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'GU',
				name: 'Guam',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'GT',
				name: 'Guatemala',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'GS',
				name: 'South Georgia and the South Sandwich Islands',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'GR',
				name: 'Greece',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'GQ',
				name: 'Equatorial Guinea',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'GP',
				name: 'Guadeloupe',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'JP',
				name: 'Japan',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'GY',
				name: 'Guyana',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'GG',
				name: 'Guernsey',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'GF',
				name: 'French Guiana',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'GE',
				name: 'Georgia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'GD',
				name: 'Grenada',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'GB',
				name: 'United Kingdom',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'GA',
				name: 'Gabon',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'SV',
				name: 'El Salvador',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'GN',
				name: 'Guinea',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'GM',
				name: 'Gambia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'GL',
				name: 'Greenland',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'GI',
				name: 'Gibraltar',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'GH',
				name: 'Ghana',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'OM',
				name: 'Oman',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'TN',
				name: 'Tunisia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'JO',
				name: 'Jordan',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'HR',
				name: 'Croatia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'HT',
				name: 'Haiti',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'HU',
				name: 'Hungary',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'HK',
				name: 'Hong Kong',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'HM',
				name: 'Heard Island and McDonald Islands',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'VE',
				name: 'Venezuela',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'PR',
				name: 'Puerto Rico',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'PS',
				name: 'Palestinian Territory',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'PW',
				name: 'Palau',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'PT',
				name: 'Portugal',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'SJ',
				name: 'Svalbard and Jan Mayen',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'PY',
				name: 'Paraguay',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'IQ',
				name: 'Iraq',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'PA',
				name: 'Panama',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'PF',
				name: 'French Polynesia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'PG',
				name: 'Papua New Guinea',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'PE',
				name: 'Peru',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'PK',
				name: 'Pakistan',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'PH',
				name: 'Philippines',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'PN',
				name: 'Pitcairn',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'PL',
				name: 'Poland',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'PM',
				name: 'Saint Pierre and Miquelon',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'ZM',
				name: 'Zambia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'EH',
				name: 'Western Sahara',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'EE',
				name: 'Estonia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'EG',
				name: 'Egypt',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'ZA',
				name: 'South Africa',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'EC',
				name: 'Ecuador',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'IT',
				name: 'Italy',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'VN',
				name: 'Vietnam',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'SB',
				name: 'Solomon Islands',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'ET',
				name: 'Ethiopia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'SO',
				name: 'Somalia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'ZW',
				name: 'Zimbabwe',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'SA',
				name: 'Saudi Arabia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'ES',
				name: 'Spain',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'ER',
				name: 'Eritrea',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'ME',
				name: 'Montenegro',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'MD',
				name: 'Moldova',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'MG',
				name: 'Madagascar',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'MF',
				name: 'Saint Martin',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'MA',
				name: 'Morocco',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'MC',
				name: 'Monaco',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'UZ',
				name: 'Uzbekistan',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'MM',
				name: 'Myanmar',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'ML',
				name: 'Mali',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'MO',
				name: 'Macao',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'MN',
				name: 'Mongolia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'MH',
				name: 'Marshall Islands',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'MK',
				name: 'Macedonia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'MU',
				name: 'Mauritius',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'MT',
				name: 'Malta',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'MW',
				name: 'Malawi',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'MV',
				name: 'Maldives',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'MQ',
				name: 'Martinique',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'MP',
				name: 'Northern Mariana Islands',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'MS',
				name: 'Montserrat',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'MR',
				name: 'Mauritania',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'IM',
				name: 'Isle of Man',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'UG',
				name: 'Uganda',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'TZ',
				name: 'Tanzania',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'MY',
				name: 'Malaysia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'MX',
				name: 'Mexico',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'IL',
				name: 'Israel',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'FR',
				name: 'France',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'IO',
				name: 'British Indian Ocean Territory',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'SH',
				name: 'Saint Helena',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'FI',
				name: 'Finland',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'FJ',
				name: 'Fiji',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'FK',
				name: 'Falkland Islands',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'FM',
				name: 'Micronesia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'FO',
				name: 'Faroe Islands',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'NI',
				name: 'Nicaragua',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'NL',
				name: 'Netherlands',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'NO',
				name: 'Norway',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'NA',
				name: 'Namibia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'VU',
				name: 'Vanuatu',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'NC',
				name: 'New Caledonia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'NE',
				name: 'Niger',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'NF',
				name: 'Norfolk Island',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'NG',
				name: 'Nigeria',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'NZ',
				name: 'New Zealand',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'NP',
				name: 'Nepal',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'NR',
				name: 'Nauru',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'NU',
				name: 'Niue',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'CK',
				name: 'Cook Islands',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'XK',
				name: 'Kosovo',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'CI',
				name: 'Ivory Coast',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'CH',
				name: 'Switzerland',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'CO',
				name: 'Colombia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'CN',
				name: 'China',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'CM',
				name: 'Cameroon',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'CL',
				name: 'Chile',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'CC',
				name: 'Cocos Islands',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'CA',
				name: 'Canada',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'CG',
				name: 'Republic of the Congo',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'CF',
				name: 'Central African Republic',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'CD',
				name: 'Democratic Republic of the Congo',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'CZ',
				name: 'Czech Republic',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'CY',
				name: 'Cyprus',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'CX',
				name: 'Christmas Island',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'CR',
				name: 'Costa Rica',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'CW',
				name: 'Curacao',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'CV',
				name: 'Cape Verde',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'CU',
				name: 'Cuba',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'SZ',
				name: 'Swaziland',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'SY',
				name: 'Syria',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'SX',
				name: 'Sint Maarten',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'KG',
				name: 'Kyrgyzstan',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'KE',
				name: 'Kenya',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'SS',
				name: 'South Sudan',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'SR',
				name: 'Suriname',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'KI',
				name: 'Kiribati',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'KH',
				name: 'Cambodia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'KN',
				name: 'Saint Kitts and Nevis',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'KM',
				name: 'Comoros',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'ST',
				name: 'Sao Tome and Principe',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'SK',
				name: 'Slovakia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'KR',
				name: 'South Korea',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'SI',
				name: 'Slovenia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'KP',
				name: 'North Korea',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'KW',
				name: 'Kuwait',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'SN',
				name: 'Senegal',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'SM',
				name: 'San Marino',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'SL',
				name: 'Sierra Leone',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'SC',
				name: 'Seychelles',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'KZ',
				name: 'Kazakhstan',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'KY',
				name: 'Cayman Islands',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'SG',
				name: 'Singapore',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'SE',
				name: 'Sweden',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'SD',
				name: 'Sudan',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'DO',
				name: 'Dominican Republic',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'DM',
				name: 'Dominica',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'DJ',
				name: 'Djibouti',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'DK',
				name: 'Denmark',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'VG',
				name: 'British Virgin Islands',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'DE',
				name: 'Germany',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'YE',
				name: 'Yemen',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'DZ',
				name: 'Algeria',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'US',
				name: 'United States',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'UY',
				name: 'Uruguay',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'YT',
				name: 'Mayotte',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'UM',
				name: 'United States Minor Outlying Islands',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'LB',
				name: 'Lebanon',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'LC',
				name: 'Saint Lucia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'LA',
				name: 'Laos',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'TV',
				name: 'Tuvalu',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'TW',
				name: 'Taiwan',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'TT',
				name: 'Trinidad and Tobago',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'TR',
				name: 'Turkey',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'LK',
				name: 'Sri Lanka',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'LI',
				name: 'Liechtenstein',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'LV',
				name: 'Latvia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'TO',
				name: 'Tonga',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'LT',
				name: 'Lithuania',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'LU',
				name: 'Luxembourg',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'LR',
				name: 'Liberia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'LS',
				name: 'Lesotho',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'TH',
				name: 'Thailand',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'TF',
				name: 'French Southern Territories',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'TG',
				name: 'Togo',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'TD',
				name: 'Chad',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'TC',
				name: 'Turks and Caicos Islands',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'LY',
				name: 'Libya',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'VA',
				name: 'Vatican',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'VC',
				name: 'Saint Vincent and the Grenadines',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'AE',
				name: 'United Arab Emirates',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'AD',
				name: 'Andorra',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'AG',
				name: 'Antigua and Barbuda',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'AF',
				name: 'Afghanistan',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'AI',
				name: 'Anguilla',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'VI',
				name: 'U.S. Virgin Islands',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'IS',
				name: 'Iceland',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'IR',
				name: 'Iran',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'AM',
				name: 'Armenia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'AL',
				name: 'Albania',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'AO',
				name: 'Angola',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'AQ',
				name: 'Antarctica',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'AS',
				name: 'American Samoa',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'AR',
				name: 'Argentina',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'AU',
				name: 'Australia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'AT',
				name: 'Austria',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'AW',
				name: 'Aruba',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'IN',
				name: 'India',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'AX',
				name: 'Aland Islands',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'AZ',
				name: 'Azerbaijan',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'IE',
				name: 'Ireland',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'ID',
				name: 'Indonesia',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'UA',
				name: 'Ukraine',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'QA',
				name: 'Qatar',
				createdAt: moment().format(),
				updatedAt:moment().format()
			},
			{
				isoCode: 'MZ',
				name: 'Mozambique',
				createdAt: moment().format(),
				updatedAt:moment().format()
			}, 
		], {})

	},

	down: (queryInterface, Sequelize) => {
		/*
		 * Add reverting commands here.
		 * Return a promise to correctly handle asynchronicity.
		 *
		 * Example:
		 * return queryInterface.bulkDelete('People', null, {});
		 */
		return queryInterface.bulkDelete('Countries', null, {})
	}
}

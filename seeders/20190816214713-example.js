'use strict'
const moment = require('moment')

const Country = require('../models').Country
const PaymentAdjustmentGroup = require('../models').PaymentAdjustmentGroup

module.exports = {
	up: async (queryInterface, Sequelize) => {
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

		let countries = await Country.bulkCreate([{
			name: 'Honduras',
			isoCode: 'HN',
			createdAt: moment().format(),
			updatedAt: moment().format()
		}], { returning: true })

		let groups = await PaymentAdjustmentGroup.bulkCreate([{
			name: 'Ajustes de planilla para Honduras',
			CountryId: countries[0].id,
			createdAt: moment().format(),
			updatedAt: moment().format()
		}], { returning: true })

		return queryInterface.bulkInsert('PaymentAdjustments', [
			{
				name: 'Instituto Hondureño de Seguridad Social: Invalidez, Vejez y Muerte',
				type: 'IHSS_IVM',
				PaymentAdjustmentGroupId: groups[0].id,
				data: JSON.stringify({
					'form': [
						{
							'name': 'wageCeiling',
							'display': 'Salario techo',
							'type': 'money'
						},
						{
							'name': 'employeePercentage',
							'display': 'Tasa empleado',
							'type': 'percentage'
						},
						{
							'name': 'employerPercentage',
							'display': 'Tasa patrono',
							'type': 'percentage'
						},
					]
				}),
				category: 'deductions',
				driverPath: '2019-IHSS',
				createdAt: moment().format(),
				updatedAt: moment().format(),
			},
			{
				name: 'Instituto Hondureño de Seguridad Social: Enfermedad y Maternidad',
				type: 'IHSS_EM',
				PaymentAdjustmentGroupId: groups[0].id,
				data: JSON.stringify({
					'form': [
						{
							'name': 'wageCeiling',
							'display': 'Salario techo',
							'type': 'money'
						},
						{
							'name': 'employeePercentage',
							'display': 'Tasa empleado',
							'type': 'percentage'
						},
						{
							'name': 'employerPercentage',
							'display': 'Tasa patrono',
							'type': 'percentage'
						},
					]
				}),
				category: 'deductions',
				driverPath: '2019-IHSS',
				createdAt: moment().format(),
				updatedAt: moment().format(),
			},
			{
				name: 'Régimen de Aportaciones Privadas',
				type: 'RAP',
				PaymentAdjustmentGroupId: groups[0].id,
				data: JSON.stringify({
					form: [
						{
							name: 'wageCeiling',
							display: 'Salario techo',
							type: 'money'
						},
						{
							name: 'employeePercentage',
							display: 'Tasa empleado',
							type: 'percentage'
						},
						{
							name: 'employerPercentage',
							display: 'Tasa patrono',
							type: 'percentage'
						},
					]
				}),
				category: 'deductions',
				driverPath: '2019-RAP',
				createdAt: moment().format(),
				updatedAt: moment().format(),
			},
			{
				name: 'Instituto Hondureño de Seguridad Social: Seguro de Cobertura Laboral',
				type: 'IHSS_SCL',
				PaymentAdjustmentGroupId: groups[0].id,
				data: JSON.stringify({
					form: [
						{
							name: 'wageCeiling',
							display: 'Salario techo',
							type: 'integer'
						},
						{
							name: 'employerPercentage',
							display: 'Tasa patrono',
							type: 'percentage'
						},
					]
				}),
				category: 'deductions',
				driverPath: '2019-IHSS',
				createdAt: moment().format(),
				updatedAt: moment().format(),
			},
			{
				name: 'Impuesto sobre la Renta',
				type: 'ISR',
				PaymentAdjustmentGroupId: groups[0].id,
				data: JSON.stringify({
					form: [
						{
							name: 'firstRange',
							display: 'Excento',
							type: 'formSet',
							form: [
								{
									name: 'from',
									display: 'Desde',
									type: 'money'
								},
								{
									name: 'to',
									display: 'Hasta',
									type: 'money'
								},
								{
									name: 'tax',
									display: 'Tasa',
									type: 'percentage'
								}
							]
						},
						{
							name: 'secondRange',
							display: '15%',
							type: 'formSet',
							form: [
								{
									name: 'from',
									display: 'Desde',
									type: 'money'
								},
								{
									name: 'to',
									display: 'Hasta',
									type: 'money'
								},
								{
									name: 'tax',
									display: 'Tasa',
									type: 'percentage'
								}
							]
						},
						{
							name: 'thirdRange',
							display: '20%',
							type: 'formSet',
							form: [
								{
									name: 'from',
									display: 'Desde',
									type: 'money'
								},
								{
									name: 'to',
									display: 'Hasta',
									type: 'money'
								},
								{
									name: 'tax',
									display: 'Tasa',
									type: 'percentage'
								}
							]
						},
						{
							name: 'fourthRange',
							display: '25%',
							type: 'formSet',
							form: [
								{
									name: 'from',
									display: 'Desde',
									type: 'money'
								},
								{
									name: 'tax',
									display: 'Tasa',
									type: 'percentage'
								}
							]
						}
					]
				}),
				category: 'deductions',
				driverPath: '2019-ISR',
				createdAt: moment().format(),
				updatedAt: moment().format(),
			},
			{
				name: 'Instituto Nacional de Formación Profesional',
				type: 'INFOP',
				PaymentAdjustmentGroupId: groups[0].id,
				data: JSON.stringify({
					form: [
						{
							name: 'employerPercentage',
							display: 'Porcentaje patrono',
							type: 'percentage'
						}
					]
				}),
				category: 'deductions',
				driverPath: '2019-INFOP',
				createdAt: moment().format(),
				updatedAt: moment().format(),
			},

			{
				name: 'Horas Extras',
				type: 'HORAS_EXTRAS',
				PaymentAdjustmentGroupId: groups[0].id,
				data: JSON.stringify({
					'form': [
						{
							name: 'morning',
							display: '',
							type: 'formSet',
							form: [{
								'name': 'dayExtraHour',
								'display': 'Jornada de Horas Extra',
								'type': 'string'
							},
							{
								'name': 'extraHourPercentage',
								'display': 'Porcentaje',
								'type': 'percentage'
							},
							{
								'name': 'checkInTime',
								'display': 'Hora de Entrada',
								'type': 'time'
							},
							{
								'name': 'checkOutTime',
								'display': 'Hora de Salida',
								'type': 'time'
							},
							{
								'name': 'workTimeAtWeek',
								'display': 'Horas Laborales a la Semana ',
								'type': 'integer'
							},
							{
								'name': 'workTimeAtDay',
								'display': 'Horas Laborales al Día ',
								'type': 'integer'
							}]
						},
						{
							name: 'mixed',
							display: '',
							type: 'formSet',
							form: [{
								'name': 'dayExtraHour',
								'display': 'Jornada de Horas Extra',
								'type': 'string'
							},
							{
								'name': 'extraHourPercentage',
								'display': 'Porcentaje',
								'type': 'percentage'
							},
							{
								'name': 'checkInTime',
								'display': 'Hora de Entrada',
								'type': 'time'
							},
							{
								'name': 'checkOutTime',
								'display': 'Hora de Salida',
								'type': 'time'
							},
							{
								'name': 'workTimeAtWeek',
								'display': 'Horas Laborales a la Semana ',
								'type': 'integer'
							},
							{
								'name': 'workTimeAtDay',
								'display': 'Horas Laborales al Día ',
								'type': 'integer'
							}]
						},
						{
							name: 'night',
							display: '',
							type: 'formSet',
							form: [{
								'name': 'dayExtraHour',
								'display': 'Jornada de Horas Extra',
								'type': 'string'
							},
							{
								'name': 'extraHourPercentage',
								'display': 'Porcentaje',
								'type': 'percentage'
							},
							{
								'name': 'checkInTime',
								'display': 'Hora de Entrada',
								'type': 'time'
							},
							{
								'name': 'checkOutTime',
								'display': 'Hora de Salida',
								'type': 'time'
							},
							{
								'name': 'workTimeAtWeek',
								'display': 'Horas Laborales a la Semana ',
								'type': 'integer'
							},
							{
								'name': 'workTimeAtDay',
								'display': 'Horas Laborales al Día ',
								'type': 'integer'
							}]
						}
					]
				}),
				category: 'additions',
				driverPath: '2019-EXTRA-HOUR',
				createdAt: moment().format(),
				updatedAt: moment().format(),
			},
			{
				name: 'Cotización de Feriados',
				type: 'HORAS_EXTRA_FERIADO',
				PaymentAdjustmentGroupId: groups[0].id,
				data: JSON.stringify({
					'form': [
						{

							'name': 'holidayName',
							'display': 'Nombre de Feriado',
							'type': 'string'
						},
						{

							'name': 'holidayStartDate',
							'display': 'Fecha de inicio del Feriado',
							'type': 'date'
						},
						{

							'name': 'holidayDuration',
							'display': 'Duración del Feriado (días)',
							'type': 'integer'
						},
						{

							'name': 'payAmount',
							'display': 'Porcentaje de pago',
							'type': 'percentage'
						}
					]
				}),
				category: 'additions',
				driverPath: '2019-HOLIDAY',
				createdAt: moment().format(),
				updatedAt: moment().format(),
			},
			{
				name: 'Cotización de Domingos',
				type: 'HORAS_EXTRA_DOMINGOS',
				PaymentAdjustmentGroupId: groups[0].id,
				data: JSON.stringify({
					'form': [
						{
							'name': 'payAmount',
							'display': 'Porcentaje de pago',
							'type': 'percentage'
						}
					]
				}),
				category: 'additions',
				driverPath: '2019-SUNDAY',
				createdAt: moment().format(),
				updatedAt: moment().format(),
			},
			{
				name: 'Préstamos',
				type: 'PRÉSTAMOS',
				PaymentAdjustmentGroupId: groups[0].id,
				data: JSON.stringify({
					'form': [
						{
							'name': 'amount',
							'display': 'Monto',
							'type': 'money'
						},
						{
							'name': 'paymentNumber',
							'display': 'Número de pagos',
							'type': 'integer'
						},
						{
							'name': 'employee',
							'display': 'Empleado',
							'type': 'select',
							'model': 'Employee'
						}
					],
					// 'table': []
				}),
				category: 'additions',
				driverPath: '2019-BONUSES',
				createdAt: moment().format(),
				updatedAt: moment().format(),
			},
			{
				name: 'Comisiones',
				type: 'COMISIONES',
				PaymentAdjustmentGroupId: groups[0].id,
				data: JSON.stringify({
					'form': [
						{
							'name': 'tableName',
							'display': 'Nombre de la tabla',
							'type': 'string'
						},
						{
							'name': 'aplicableTo',
							'display': 'Aplicable a',
							'type': 'array',
							'values': [
								{
									'id': 1,
									'value': 'COMMISSION_SALES',
									'display': 'Ventas'
								},
								{
									'id': 2,
									'value': 'COMMISSION_WAGE',
									'display': 'Salario'
								}
							]
						},
						{
							'name':  'data',
							'display': 'Rango',
							'type': 'table',
							'row': [
								{
									'name': 'from',
									'display': 'Desde',
									'type': 'money'
								},
								{
									'name': 'to',
									'display': 'Hasta',
									'type': 'money'
								},
								{
									'name': 'percentage',
									'display': 'Porcentaje',
									'type': 'percentage'
								},
							]
						}
					]
				}),
				category: 'additions',
				driverPath: '2019-COMISSIONS',
				createdAt: moment().format(),
				updatedAt: moment().format(),
			},

		], {

		})
	},

	down: async (queryInterface, Sequelize) => {
		/*
		 * Add reverting commands here.
		 * Return a promise to correctly handle asynchronicity.
		 *
		 * Example:
		 * return queryInterface.bulkDelete('People', null, {});
		 */

		return Promise.all([
			queryInterface.bulkDelete('PaymentAdjustments', null, {}),
			queryInterface.bulkDelete('PaymentAdjustmentGroups', null, {}),
			queryInterface.bulkDelete('Countries', null, {})
		])
	}
}

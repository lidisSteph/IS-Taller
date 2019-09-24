'use strict'

const moment = require('moment')
const Departments = require('../models').Department

module.exports = {
	up: async (queryInterface, Sequelize) => {
    
		let Department = await Departments.bulkCreate([
			{
				name: 'Atlántida',
				isoCode: 'HN-AT',
				CountryId: 1,
				createdAt: moment().format(),
				updatedAt: moment().format()
			}, 
			{
				name: 'Choluteca',
				isoCode: 'HN-CH',
				CountryId: 1,
				createdAt: moment().format(),
				updatedAt: moment().format()
			}, 
			{
				name: 'Colón',
				isoCode: 'HN-CL',
				CountryId: 1,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Comayagua',
				isoCode: 'HN-CM',
				CountryId: 1,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Copán',
				isoCode: 'HN-CP',
				CountryId: 1,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Cortés',
				isoCode: 'HN-CR',
				CountryId: 1,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'El Paraíso',
				isoCode: 'HN-EP',
				CountryId: 1,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Francisco Morazán',
				isoCode: 'HN-FM',
				CountryId: 1,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Gracias a Dios',
				isoCode: 'HN-GD',
				CountryId: 1,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Intibucá',
				isoCode: 'HN-IN',
				CountryId: 1,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Islas de la Bahía',
				isoCode: 'HN-IB',
				CountryId: 1,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'La Paz',
				isoCode: 'HN-LP',
				CountryId: 1,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Lempira',
				isoCode: 'HN-LE',
				CountryId: 1,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Ocotepeque',
				isoCode: 'HN-OC',
				CountryId: 1,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Olancho',
				isoCode: 'HN-OL',
				CountryId: 1,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Santa Bárbara',
				isoCode: 'HN-SB',
				CountryId: 1,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Valle',
				isoCode: 'HN-VA',
				CountryId: 1,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Yoro',
				isoCode: 'HN-YO',
				CountryId: 1,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
		], {returning: true})

		// console.log(Department)
		return queryInterface.bulkInsert('Municipalities', [
			{
				name: 'Aguanqueterique',
				isoCode: 'HN-LP-AG',
				DepartmentId: Department[11].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Ahuas',
				isoCode: 'HN-GD-AH',
				DepartmentId: Department[8].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Ajuterique',
				isoCode: 'HN-CM-AJ',
				DepartmentId:Department[3].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Alauca',
				isoCode: 'HN-EP-AL',
				DepartmentId: Department[6].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Alianza',
				isoCode: 'HN-VA-AL',
				DepartmentId: Department[16].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Alubarén',
				isoCode: 'HN-FM-AL',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Amapala',
				isoCode: 'HN-VA-AM',
				DepartmentId: Department[16].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Apacilagua',
				isoCode: 'HN-CH-AP',
				DepartmentId: Department[1].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Arada',
				isoCode: 'HN-SB-AR',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Aramecina',
				isoCode: 'HN-VA-AR',
				DepartmentId: Department[16].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Arenal',
				isoCode: 'HN-YO-AR',
				DepartmentId: Department[17].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Arizona',
				isoCode: 'HN-AT-AR',
				DepartmentId: Department[0].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Atima',
				isoCode: 'HN-SB-AT',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Azacualpa',
				isoCode: 'HN-SB-AZ',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Balfate',
				isoCode: 'HN-CL-BA',
				DepartmentId:Department[2].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Belen',
				isoCode: 'HN-LE-BE',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Belén Gualcho',
				isoCode: 'HN-OC-BG',
				DepartmentId: Department[13].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Bonito Oriental',
				isoCode: 'HN-CL-BO',
				DepartmentId:Department[2].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Brus Laguna',
				isoCode: 'HN-GD-BL',
				DepartmentId: Department[8].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Cabañas',
				isoCode: 'HN-CP-CA',
				DepartmentId: Department[4].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Cabañas',
				isoCode: 'HN-LP-CB',
				DepartmentId: Department[11].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Camasca',
				isoCode: 'HN-IN-CA',
				DepartmentId: Department[9].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Campamento',
				isoCode: 'HN-OL-CP',
				DepartmentId: Department[14].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Candelaria',
				isoCode: 'HN-LE-CA',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Cane',
				isoCode: 'HN-LP-CN',
				DepartmentId: Department[11].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Caridad',
				isoCode: 'HN-VA-CA',
				DepartmentId: Department[16].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Catacamas',
				isoCode: 'HN-OL-CT',
				DepartmentId: Department[14].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Cedros',
				isoCode: 'HN-FM-CE',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Ceguaca',
				isoCode: 'HN-SB-CE',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Chinacla',
				isoCode: 'HN-LP-CH',
				DepartmentId: Department[11].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Chinda',
				isoCode: 'HN-SB-CH',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Choloma',
				isoCode: 'HN-CR-CH',
				DepartmentId: Department[5].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Choluteca',
				isoCode: 'HN-CH-CH',
				DepartmentId: Department[1].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Cololaca',
				isoCode: 'HN-LE-CO',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Colomoncagua',
				isoCode: 'HN-IN-CL',
				DepartmentId: Department[9].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Comayagua',
				isoCode: 'HN-CM-CO',
				DepartmentId:Department[3].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Concepción',
				isoCode: 'HN-CP-CN',
				DepartmentId: Department[4].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Concepción',
				isoCode: 'HN-IN-CN',
				DepartmentId: Department[9].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Concepción',
				isoCode: 'HN-OC-CO',
				DepartmentId: Department[13].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Concepción del Norte',
				isoCode: 'HN-SB-CN',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Concepción del Sur',
				isoCode: 'HN-SB-CS',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Concepción de Maria',
				isoCode: 'HN-CH-CM',
				DepartmentId: Department[1].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Concordia',
				isoCode: 'HN-OL-CO',
				DepartmentId: Department[14].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Copán Ruinas',
				isoCode: 'HN-CP-CR',
				DepartmentId: Department[4].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Corquín',
				isoCode: 'HN-CP-CQ',
				DepartmentId: Department[4].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Cucuyagua',
				isoCode: 'HN-CP-CU',
				DepartmentId: Department[4].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Curarén',
				isoCode: 'HN-FM-CU',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Danlí',
				isoCode: 'HN-EP-DA',
				DepartmentId: Department[6].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Distrito Central',
				isoCode: 'HN-FM-DC',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Dolores',
				isoCode: 'HN-CP-DO',
				DepartmentId: Department[4].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Dolores',
				isoCode: 'HN-IN-DO',
				DepartmentId: Department[9].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Dolores Merendon',
				isoCode: 'HN-OC-DM',
				DepartmentId: Department[13].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Dulce Nombre',
				isoCode: 'HN-CP-DN',
				DepartmentId: Department[4].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Dulce Nombre de Culmí',
				isoCode: 'HN-OL-DN',
				DepartmentId: Department[14].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Duyure',
				isoCode: 'HN-CH-DU',
				DepartmentId: Department[1].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'El Corpus',
				isoCode: 'HN-CH-EC',
				DepartmentId: Department[1].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'El Negrito',
				isoCode: 'HN-YO-EN',
				DepartmentId: Department[17].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'El Nispero',
				isoCode: 'HN-SB-EN',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'El Paraíso',
				isoCode: 'HN-CP-EP',
				DepartmentId: Department[4].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'El Paraíso',
				isoCode: 'HN-EP-EP',
				DepartmentId: Department[6].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'El Porvenir',
				isoCode: 'HN-AT-EP',
				DepartmentId: Department[0].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'El Porvenir',
				isoCode: 'HN-FM-EP',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'El Progreso',
				isoCode: 'HN-YO-EP',
				DepartmentId: Department[17].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'El Rosario',
				isoCode: 'HN-CM-ER',
				DepartmentId:Department[3].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'El Rosario',
				isoCode: 'HN-OL-ER',
				DepartmentId: Department[14].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'El Triunfo',
				isoCode: 'HN-CH-ET',
				DepartmentId: Department[1].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Erandique',
				isoCode: 'HN-LE-ER',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Esparta',
				isoCode: 'HN-AT-ES',
				DepartmentId: Department[0].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Esquías',
				isoCode: 'HN-CM-ES',
				DepartmentId:Department[3].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Esquipulas del Norte',
				isoCode: 'HN-OL-EN',
				DepartmentId: Department[14].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Florida',
				isoCode: 'HN-CP-FL',
				DepartmentId: Department[4].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Fraternidad',
				isoCode: 'HN-OC-FR',
				DepartmentId: Department[13].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Goascorán',
				isoCode: 'HN-VA-GO',
				DepartmentId: Department[16].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Gracias',
				isoCode: 'HN-LE-GR',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Guaimaca',
				isoCode: 'HN-FM-GU',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Guajiquiro',
				isoCode: 'HN-LP-GU',
				DepartmentId: Department[11].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Gualaco',
				isoCode: 'HN-OL-GL',
				DepartmentId: Department[14].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Gualala',
				isoCode: 'HN-SB-GU',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Gualcince',
				isoCode: 'HN-LE-GC',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Guanaja',
				isoCode: 'HN-IB-GU',
				DepartmentId: Department[10].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Guarita',
				isoCode: 'HN-LE-GT',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Guarizama',
				isoCode: 'HN-OL-GR',
				DepartmentId: Department[14].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Guata',
				isoCode: 'HN-OL-GT',
				DepartmentId: Department[14].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Guayape',
				isoCode: 'HN-OL-GY',
				DepartmentId: Department[14].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Guinope',
				isoCode: 'HN-EP-GU',
				DepartmentId: Department[6].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Humuya',
				isoCode: 'HN-CM-HU',
				DepartmentId:Department[3].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Ilama',
				isoCode: 'HN-SB-IL',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Intibucá',
				isoCode: 'HN-IN-IN',
				DepartmentId: Department[9].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Iriona',
				isoCode: 'HN-CL-IR',
				DepartmentId:Department[2].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Jacaleapa',
				isoCode: 'HN-EP-JA',
				DepartmentId: Department[6].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Jano',
				isoCode: 'HN-OL-JA',
				DepartmentId: Department[14].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Jesús de Otoro',
				isoCode: 'HN-IN-JO',
				DepartmentId: Department[9].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Jocón',
				isoCode: 'HN-YO-JO',
				DepartmentId: Department[17].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'José Santos Guardiola',
				isoCode: 'HN-IB-JS',
				DepartmentId: Department[10].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Juan Francisco Bulnes',
				isoCode: 'HN-GD-JF',
				DepartmentId: Department[8].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Jutiapa',
				isoCode: 'HN-AT-JU',
				DepartmentId: Department[0].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Juticalpa',
				isoCode: 'HN-OL-JU',
				DepartmentId: Department[14].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'La Campa',
				isoCode: 'HN-LE-LC',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'La Ceiba',
				isoCode: 'HN-AT-LC',
				DepartmentId: Department[0].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'La Encarnación',
				isoCode: 'HN-OC-LE',
				DepartmentId: Department[13].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'La Esperanza',
				isoCode: 'HN-IN-LE',
				DepartmentId: Department[9].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'La Iguala',
				isoCode: 'HN-LE-LI',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'La Jigua',
				isoCode: 'HN-CP-LJ',
				DepartmentId: Department[4].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'La Labor',
				isoCode: 'HN-OC-LL',
				DepartmentId: Department[13].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'La Libertad',
				isoCode: 'HN-CM-LB',
				DepartmentId:Department[3].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'La Libertad',
				isoCode: 'HN-FM-LL',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'La Lima',
				isoCode: 'HN-CR-LL',
				DepartmentId: Department[5].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Lamaní',
				isoCode: 'HN-CM-LA',
				DepartmentId:Department[3].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'La Masica',
				isoCode: 'HN-AT-LM',
				DepartmentId: Department[0].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Langue',
				isoCode: 'HN-VA-LA',
				DepartmentId: Department[16].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'La Paz',
				isoCode: 'HN-LP-LP',
				DepartmentId: Department[11].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Las Flores',
				isoCode: 'HN-LE-LF',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Las Lajas',
				isoCode: 'HN-CM-LJ',
				DepartmentId:Department[3].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Las Vegas',
				isoCode: 'HN-SB-LV',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'La Trinidad',
				isoCode: 'HN-CM-LT',
				DepartmentId:Department[3].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'La Unión',
				isoCode: 'HN-CP-LU',
				DepartmentId: Department[4].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'La Unión',
				isoCode: 'HN-LE-LU',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'La Unión',
				isoCode: 'HN-OL-LU',
				DepartmentId: Department[14].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'La Venta',
				isoCode: 'HN-FM-LV',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'La Virtud',
				isoCode: 'HN-LE-LV',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Lauterique',
				isoCode: 'HN-LP-LA',
				DepartmentId: Department[11].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Lejamaní',
				isoCode: 'HN-CM-LE',
				DepartmentId:Department[3].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Lepaera',
				isoCode: 'HN-LE-LE',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Lepaterique',
				isoCode: 'HN-FM-LE',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Limón',
				isoCode: 'HN-CL-LI',
				DepartmentId:Department[2].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Liure',
				isoCode: 'HN-EP-LI',
				DepartmentId: Department[6].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Lucerna',
				isoCode: 'HN-OC-LU',
				DepartmentId: Department[13].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Macuelizo',
				isoCode: 'HN-SB-MA',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Magdalena',
				isoCode: 'HN-IN-MD',
				DepartmentId: Department[9].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Mangulile',
				isoCode: 'HN-OL-MG',
				DepartmentId: Department[14].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Manto',
				isoCode: 'HN-OL-MT',
				DepartmentId: Department[14].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Mapulaca',
				isoCode: 'HN-LE-MA',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Maraita',
				isoCode: 'HN-FM-MT',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Marale',
				isoCode: 'HN-FM-ML',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Marcala',
				isoCode: 'HN-LP-MA',
				DepartmentId: Department[11].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Marcovia',
				isoCode: 'HN-CH-MA',
				DepartmentId: Department[1].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Masaguara',
				isoCode: 'HN-IN-MS',
				DepartmentId: Department[9].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Meámbar',
				isoCode: 'HN-CM-ME',
				DepartmentId:Department[3].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Mercedes',
				isoCode: 'HN-OC-ME',
				DepartmentId: Department[13].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Mercedes de Oriente',
				isoCode: 'HN-LP-MO',
				DepartmentId: Department[11].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Minas de Oro',
				isoCode: 'HN-CM-MO',
				DepartmentId:Department[3].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Morazán',
				isoCode: 'HN-YO-MO',
				DepartmentId: Department[17].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Morocelí',
				isoCode: 'HN-EP-MO',
				DepartmentId: Department[6].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Morolica',
				isoCode: 'HN-CH-MO',
				DepartmentId: Department[1].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Nacaome',
				isoCode: 'HN-VA-NA',
				DepartmentId: Department[16].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Namasigue',
				isoCode: 'HN-CH-NA',
				DepartmentId: Department[1].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Naranjito',
				isoCode: 'HN-SB-NA',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Nueva Arcadia',
				isoCode: 'HN-CP-NA',
				DepartmentId: Department[4].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Nueva Armenia',
				isoCode: 'HN-FM-NA',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Nueva Frontera',
				isoCode: 'HN-SB-NF',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Nuevo Celilac',
				isoCode: 'HN-SB-NC',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Ocotepeque',
				isoCode: 'HN-OC-OC',
				DepartmentId: Department[13].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Ojo de Agua',
				isoCode: 'HN-CM-OA',
				DepartmentId:Department[3].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Ojojona',
				isoCode: 'HN-FM-OJ',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Olanchito',
				isoCode: 'HN-YO-OL',
				DepartmentId: Department[17].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Omoa',
				isoCode: 'HN-CR-OM',
				DepartmentId: Department[5].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Opatoro',
				isoCode: 'HN-LP-OP',
				DepartmentId: Department[11].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Orica',
				isoCode: 'HN-FM-OR',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Orocuina',
				isoCode: 'HN-CH-OR',
				DepartmentId: Department[1].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Oropolí',
				isoCode: 'HN-EP-OR',
				DepartmentId: Department[6].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Patuca',
				isoCode: 'HN-OL-PA',
				DepartmentId: Department[14].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Pespire',
				isoCode: 'HN-CH-PE',
				DepartmentId: Department[1].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Petoa',
				isoCode: 'HN-SB-PE',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Pimienta',
				isoCode: 'HN-CR-PI',
				DepartmentId: Department[5].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Piraera',
				isoCode: 'HN-LE-PI',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Potrerillos',
				isoCode: 'HN-CR-PO',
				DepartmentId: Department[5].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Potrerillos',
				isoCode: 'HN-EP-PO',
				DepartmentId: Department[6].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Protección',
				isoCode: 'HN-SB-PR',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Puerto Cortés',
				isoCode: 'HN-CR-PC',
				DepartmentId: Department[5].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Puerto Lempira',
				isoCode: 'HN-GD-PL',
				DepartmentId: Department[8].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Quimistán',
				isoCode: 'HN-SB-QU',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Ramón Villeda Morales',
				isoCode: 'HN-GD-RV',
				DepartmentId: Department[8].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Reitoca',
				isoCode: 'HN-FM-RE',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Roatán',
				isoCode: 'HN-IB-RO',
				DepartmentId: Department[10].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Sabá',
				isoCode: 'HN-CL-SA',
				DepartmentId:Department[2].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Sabanagrande',
				isoCode: 'HN-FM-SG',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Salamá',
				isoCode: 'HN-OL-SA',
				DepartmentId: Department[14].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Agustín',
				isoCode: 'HN-CP-SG',
				DepartmentId: Department[4].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Andrés',
				isoCode: 'HN-LE-SA',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Antonio',
				isoCode: 'HN-CP-SA',
				DepartmentId: Department[4].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Antonio',
				isoCode: 'HN-IN-SA',
				DepartmentId: Department[9].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Antonio de Cortés',
				isoCode: 'HN-CR-SA',
				DepartmentId: Department[5].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Antonio de Flores',
				isoCode: 'HN-CH-SF',
				DepartmentId: Department[1].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Antonio de Flores',
				isoCode: 'HN-EP-SA',
				DepartmentId: Department[6].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Antonio del Norte',
				isoCode: 'HN-LP-SN',
				DepartmentId: Department[11].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Antonio de Oriente',
				isoCode: 'HN-FM-SO',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Buenaventura',
				isoCode: 'HN-FM-SB',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Esteban',
				isoCode: 'HN-OL-SE',
				DepartmentId: Department[14].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Fernando',
				isoCode: 'HN-OC-SF',
				DepartmentId: Department[13].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Francisco',
				isoCode: 'HN-AT-SF',
				DepartmentId: Department[0].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Francisco',
				isoCode: 'HN-LE-SF',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Francisco de Becerra',
				isoCode: 'HN-OL-SB',
				DepartmentId: Department[14].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Francisco de Coray',
				isoCode: 'HN-VA-SF',
				DepartmentId: Department[16].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Francisco de la Paz',
				isoCode: 'HN-OL-SP',
				DepartmentId: Department[14].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Francisco del Valle',
				isoCode: 'HN-OC-SV',
				DepartmentId: Department[13].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Francisco de Ojuera',
				isoCode: 'HN-SB-SF',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Francisco de Opalaca',
				isoCode: 'HN-IN-SF',
				DepartmentId: Department[9].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Francisco de Yojoa',
				isoCode: 'HN-CR-SF',
				DepartmentId: Department[5].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Ignacio',
				isoCode: 'HN-FM-SI',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Isidro',
				isoCode: 'HN-CH-SI',
				DepartmentId: Department[1].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Isidro',
				isoCode: 'HN-IN-SI',
				DepartmentId: Department[9].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Jerónimo',
				isoCode: 'HN-CM-SJ',
				DepartmentId:Department[3].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Jerónimo',
				isoCode: 'HN-CP-SM',
				DepartmentId: Department[4].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Jorge',
				isoCode: 'HN-OC-SJ',
				DepartmentId: Department[13].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San José',
				isoCode: 'HN-CH-SJ',
				DepartmentId: Department[1].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San José',
				isoCode: 'HN-CP-SJ',
				DepartmentId: Department[4].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San José',
				isoCode: 'HN-LP-SJ',
				DepartmentId: Department[11].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San José de Colinas',
				isoCode: 'HN-SB-SJ',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San José de Comayagua',
				isoCode: 'HN-CM-SC',
				DepartmentId:Department[3].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San José del Potrero',
				isoCode: 'HN-CM-SP',
				DepartmentId:Department[3].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Juan',
				isoCode: 'HN-IN-SJ',
				DepartmentId: Department[9].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Juan',
				isoCode: 'HN-LP-SU',
				DepartmentId: Department[11].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Juan de Flores',
				isoCode: 'HN-FM-SJ',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Juan de Opoa',
				isoCode: 'HN-CP-SO',
				DepartmentId: Department[4].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Juan Guarita',
				isoCode: 'HN-LE-SJ',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Lorenzo',
				isoCode: 'HN-VA-SL',
				DepartmentId: Department[16].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Lucas',
				isoCode: 'HN-EP-SL',
				DepartmentId: Department[6].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Luis',
				isoCode: 'HN-CM-SL',
				DepartmentId:Department[3].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Luis',
				isoCode: 'HN-SB-SL',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Manuel',
				isoCode: 'HN-CR-SM',
				DepartmentId: Department[5].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Manuel Colohete',
				isoCode: 'HN-LE-SH',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Marcos de la Sierra',
				isoCode: 'HN-IN-SS',
				DepartmentId: Department[9].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Marcos',
				isoCode: 'HN-OC-SM',
				DepartmentId: Department[13].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Marcos',
				isoCode: 'HN-SB-SM',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Marcos de Caiquín',
				isoCode: 'HN-LE-SM',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Marcos de Colón',
				isoCode: 'HN-CH-SM',
				DepartmentId: Department[1].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Matías',
				isoCode: 'HN-EP-SM',
				DepartmentId: Department[6].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Miguelito',
				isoCode: 'HN-FM-SM',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Miguelito',
				isoCode: 'HN-IN-SM',
				DepartmentId: Department[9].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Nicolás',
				isoCode: 'HN-CP-SN',
				DepartmentId: Department[4].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Nicolás',
				isoCode: 'HN-SB-SN',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Pedro',
				isoCode: 'HN-CP-SP',
				DepartmentId: Department[4].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Pedro de Tutule',
				isoCode: 'HN-LP-ST',
				DepartmentId: Department[11].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Pedro Sula',
				isoCode: 'HN-CR-SP',
				DepartmentId: Department[5].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Pedro Zacapa',
				isoCode: 'HN-SB-SP',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Rafael',
				isoCode: 'HN-LE-SR',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Sebastian',
				isoCode: 'HN-LE-SS',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Sebastián',
				isoCode: 'HN-CM-SS',
				DepartmentId:Department[3].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Santa Ana',
				isoCode: 'HN-FM-SA',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Santa Ana',
				isoCode: 'HN-LP-SA',
				DepartmentId: Department[11].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Santa Ana de Yusguare',
				isoCode: 'HN-CH-SY',
				DepartmentId: Department[1].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Santa Bárbara',
				isoCode: 'HN-SB-SB',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Santa Cruz',
				isoCode: 'HN-LE-SC',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Santa Cruz de Yojoa',
				isoCode: 'HN-CR-SC',
				DepartmentId: Department[5].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Santa Elena',
				isoCode: 'HN-LP-SE',
				DepartmentId: Department[11].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Santa Fé',
				isoCode: 'HN-CL-SF',
				DepartmentId:Department[2].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Santa Fé',
				isoCode: 'HN-OC-ST',
				DepartmentId: Department[13].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Santa Lucía',
				isoCode: 'HN-FM-SL',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Santa Lucía',
				isoCode: 'HN-IN-SL',
				DepartmentId: Department[9].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Santa María',
				isoCode: 'HN-LP-SM',
				DepartmentId: Department[11].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Santa Maria del Real',
				isoCode: 'HN-OL-SM',
				DepartmentId: Department[14].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Santa Rita',
				isoCode: 'HN-CP-SR',
				DepartmentId: Department[4].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Santa Rita',
				isoCode: 'HN-SB-SR',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Santa Rita',
				isoCode: 'HN-YO-SR',
				DepartmentId: Department[17].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Santa Rosa de Aguán',
				isoCode: 'HN-CL-SR',
				DepartmentId:Department[2].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Santa Rosa de Copán',
				isoCode: 'HN-CP-SC',
				DepartmentId: Department[4].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Santiago de Puringla',
				isoCode: 'HN-LP-SP',
				DepartmentId: Department[11].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'San Vicente Centenario',
				isoCode: 'HN-SB-SV',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Sensenti',
				isoCode: 'HN-OC-SE',
				DepartmentId: Department[13].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Siguatepeque',
				isoCode: 'HN-CM-SI',
				DepartmentId:Department[3].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Silca',
				isoCode: 'HN-OL-SI',
				DepartmentId: Department[14].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Sinuapa',
				isoCode: 'HN-OC-SI',
				DepartmentId: Department[13].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Soledad',
				isoCode: 'HN-EP-SO',
				DepartmentId: Department[6].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Sonaguera',
				isoCode: 'HN-CL-SO',
				DepartmentId:Department[2].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Sulaco',
				isoCode: 'HN-YO-SU',
				DepartmentId: Department[17].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Talanga',
				isoCode: 'HN-FM-TL',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Talgua',
				isoCode: 'HN-LE-TG',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Tambla',
				isoCode: 'HN-LE-TB',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Tatumbla',
				isoCode: 'HN-FM-TT',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Taulabe',
				isoCode: 'HN-CM-TA',
				DepartmentId:Department[3].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Tela',
				isoCode: 'HN-AT-TE',
				DepartmentId: Department[0].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Teupasenti',
				isoCode: 'HN-EP-TP',
				DepartmentId: Department[6].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Texiguat',
				isoCode: 'HN-EP-TX',
				DepartmentId: Department[6].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Tocoa',
				isoCode: 'HN-CL-TO',
				DepartmentId:Department[2].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Tomalá',
				isoCode: 'HN-LE-TO',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Trinidad',
				isoCode: 'HN-SB-TR',
				DepartmentId: Department[15].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Trinidad de Copán',
				isoCode: 'HN-CP-TC',
				DepartmentId: Department[4].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Trojes',
				isoCode: 'HN-EP-TR',
				DepartmentId: Department[6].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Trujillo',
				isoCode: 'HN-CL-TR',
				DepartmentId:Department[2].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Utila',
				isoCode: 'HN-IB-UT',
				DepartmentId: Department[10].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Vado Ancho',
				isoCode: 'HN-EP-VA',
				DepartmentId: Department[6].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Valladolid',
				isoCode: 'HN-LE-VA',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Valle de Ángeles',
				isoCode: 'HN-FM-VA',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Vallecillo',
				isoCode: 'HN-FM-VC',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Veracruz',
				isoCode: 'HN-CP-VE',
				DepartmentId: Department[4].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Victoria',
				isoCode: 'HN-YO-VI',
				DepartmentId: Department[17].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Villa de San Antonio',
				isoCode: 'HN-CM-VS',
				DepartmentId:Department[3].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Villa de San Francisco',
				isoCode: 'HN-FM-VS',
				DepartmentId: Department[7].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Villanueva',
				isoCode: 'HN-CR-VI',
				DepartmentId: Department[5].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Virginia',
				isoCode: 'HN-LE-VI',
				DepartmentId: Department[12].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Wampusirpi',
				isoCode: 'HN-GD-WA',
				DepartmentId: Department[8].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Yamaranguila',
				isoCode: 'HN-IN-YA',
				DepartmentId: Department[9].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Yarula',
				isoCode: 'HN-LP-YA',
				DepartmentId: Department[11].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Yauyupe',
				isoCode: 'HN-EP-YA',
				DepartmentId: Department[6].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Yocón',
				isoCode: 'HN-OL-YO',
				DepartmentId: Department[14].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Yorito',
				isoCode: 'HN-YO-YT',
				DepartmentId: Department[17].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Yoro',
				isoCode: 'HN-YO-YO',
				DepartmentId: Department[17].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			},
			{
				name: 'Yuscarán',
				isoCode: 'HN-EP-YU',
				DepartmentId: Department[6].id,
				createdAt: moment().format(),
				updatedAt: moment().format()
			}

		], {})
	},

	down: (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.bulkDelete('Municipalities', null, {}),
			queryInterface.bulkDelete('Departments', null, {})
		])
    

	}
}

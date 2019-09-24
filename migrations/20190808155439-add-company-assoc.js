'use strict'

module.exports = {


	up: (queryInterface, Sequelize) => {
		return queryInterface.sequelize.transaction(t => {
			return Promise.all([
				
				queryInterface.addColumn('Companies', 'MunicipalityId',
					{
						type: Sequelize.INTEGER,
						references: {
							model: 'Municipalities',
							key: 'id',
						},
						onUpdate: 'CASCADE',
						onDelete: 'CASCADE',
					}, {
						transaction: t
					}
				),
				queryInterface.addColumn('Departments', 'CountryId',
					{
						type: Sequelize.INTEGER,
						references: {
							model: 'Countries',
							key: 'id',
						},
						onUpdate: 'CASCADE',
						onDelete: 'CASCADE',
					}, {
						transaction: t
					}
				),
				queryInterface.addColumn('Municipalities', 'DepartmentId',
					{
						type: Sequelize.INTEGER,
						references: {
							model: 'Departments',
							key: 'id',
						},
						onUpdate: 'CASCADE',
						onDelete: 'CASCADE',
					}, {
						transaction: t
					}
				),
			])
		})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.sequelize.transaction(t => {
			return Promise.all([
				queryInterface.removeColumn('Companies', 'MunicipalityId', { transaction: t }),
				queryInterface.removeColumn('Departments', 'CountryId', { transaction: t }),
				queryInterface.removeColumn('Municipalities', 'DepartmentId', { transaction: t }),
			])
		})
	}
}

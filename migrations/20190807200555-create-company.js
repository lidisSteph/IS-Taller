'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Companies',
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER
				},
				name: {
					type: Sequelize.STRING(100)
				},
				logo: {
					type: Sequelize.STRING(500)
				},
				taxId: {
					type: Sequelize.STRING(100)
				},
				numberEmployees: {
					type: Sequelize.INTEGER
				},
				paymentCycle: {
					type: Sequelize.STRING(50)
				},
				license: {
					type: Sequelize.STRING(50)
				},
				status: {
					type: Sequelize.STRING(50)
				},
				createdAt: {
					allowNull: false,
					type: Sequelize.DATE
				},
				updatedAt: {
					allowNull: false,
					type: Sequelize.DATE
				}
			}
		).then(() => {
			return Promise.all([
				queryInterface.addIndex('Companies', ['taxId'])
			])
		})
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Companies')
	}
}
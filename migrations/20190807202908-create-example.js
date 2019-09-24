'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('example',
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
				type: {
					type: Sequelize.STRING(50)
				},
				data: {
					type: Sequelize.JSON
				},
				startsAt: {
					type: Sequelize.DATE
				},
				endsAt: {
					type: Sequelize.DATE
				},
				active: {
					type: Sequelize.BOOLEAN
				},
				category: {
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
				queryInterface.addIndex('example', ['type']),
				queryInterface.addIndex('example', ['category']),
			])
		})
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('example')
	}
}
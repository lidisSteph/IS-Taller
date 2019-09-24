'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Municipalities',
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER
				},
				name: {
					type: Sequelize.STRING(50)
				},
				isoCode: {
					type: Sequelize.STRING(10)
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
				queryInterface.addIndex('Municipalities', ['isoCode'])
			])
		})
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Municipalities')
	}
}
'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('CompanyContractTypes', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			CompanyId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Companies',
					key: 'id'
				}
			},
			ContractTypeId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'ContractTypes',
					key: 'id'
				}
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		})
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('CompanyContractTypes')
	}
}
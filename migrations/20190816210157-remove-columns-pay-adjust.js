'use strict'

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.sequelize.transaction(t => {
			return Promise.all([
				queryInterface.removeColumn('example', 'startsAt', { transaction: t }),
				queryInterface.removeColumn('example', 'endsAt', { transaction: t }),
				queryInterface.removeColumn('example', 'active', { transaction: t }),
			])
		})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.sequelize.transaction(t => {
			return Promise.all([
				queryInterface.addColumn('example', 'startsAt', { type: Sequelize.DATE }, { transaction: t }),
				queryInterface.addColumn('example', 'endsAt', { type: Sequelize.DATE }, { transaction: t }),
				queryInterface.addColumn('example', 'active', { type: Sequelize.BOOLEAN }, { transaction: t }),
			])
		})
	}
}

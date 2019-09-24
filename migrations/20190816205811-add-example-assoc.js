'use strict'

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.addColumn('exampleValues', 'exampleId',
			{
				type: Sequelize.INTEGER,
				references: {
					model: 'example',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			}
		)
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.removeColumn('exampleValues', 'exampleId')
	}
}

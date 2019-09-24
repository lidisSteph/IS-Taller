'use strict'
module.exports = (sequelize, DataTypes) => {
	const ExampleValue = sequelize.define('ExampleValue', {
		data: DataTypes.JSON,
		startsAt: DataTypes.DATE,
		endsAt: DataTypes.DATE,
		active: DataTypes.BOOLEAN
	}, {})
	ExampleValue.associate = function(models) {
		ExampleValue.belongsTo(models.Example)
	}
	return ExampleValue
}
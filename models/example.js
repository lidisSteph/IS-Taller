'use strict'
module.exports = (sequelize, DataTypes) => {
	const Example = sequelize.define('Example', {
		name: DataTypes.STRING(100),
		type: DataTypes.STRING(50),
		data: DataTypes.JSON,
		category: DataTypes.STRING(50),
		driverPath: DataTypes.STRING(200)
	}, {
		indexes: [
			{
				fields: ['type'],
			},
			{
				fields: ['category']
			}
		]
	})
	Example.associate = function(models) {
		Example.hasMany(models.ExampleValue)
	}
	return Example
}
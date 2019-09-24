'use strict'

module.exports = (sequelize, DataTypes) => {
	const Municipality = sequelize.define('Municipality', {
		name: DataTypes.STRING(50),
		isoCode: DataTypes.STRING(10)
	}, {
		indexes: [
			{
				fields: ['isoCode']
			}
		]
	})
 
	Municipality.associate = function(models) {
		Municipality.hasMany(models.Company)
		Municipality.belongsTo(models.Department)
	}
	return Municipality
}
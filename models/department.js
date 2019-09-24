'use strict'
module.exports = (sequelize, DataTypes) => {
	const Department = sequelize.define('Department', {
		name: DataTypes.STRING(50),
		isoCode: DataTypes.STRING(10)
	}, {
		indexes: [
			{
				fields: ['isoCode']
			}
		]
	})
	Department.associate = function(models) {
		Department.hasMany(models.Municipality)
		Department.belongsTo(models.Country)
	}
	return Department
}
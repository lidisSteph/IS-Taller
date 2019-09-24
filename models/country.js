'use strict'
module.exports = (sequelize, DataTypes) => {
	const Country = sequelize.define('Country', {
		name: DataTypes.STRING(50),
		isoCode: { type: DataTypes.STRING(2), unique: true },
	}, {})
	Country.associate = function(models) {
		Country.hasMany(models.Department)
	}
	return Country
}
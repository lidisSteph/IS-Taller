'use strict'
module.exports = (sequelize, DataTypes) => {
	const Company = sequelize.define('Company', {
		name: DataTypes.STRING(100),
		logo: DataTypes.STRING(500),
		taxId: DataTypes.STRING(100),
		numberEmployees: DataTypes.INTEGER,
		paymentCycle: DataTypes.STRING(50),
		license: DataTypes.STRING(50),
		status: DataTypes.STRING(50)
	}, {
		indexes: [
			{
				fields: ['status']
			},
			{
				fields: ['taxId']
			}
		],
	})
	Company.associate = function(models) {
		Company.belongsTo(models.Municipality)
		Company.belongsToMany(models.ContractType, {
			through: 'CompanyContractTypes',
			as: 'contractTypes',
			foreignKey: 'CompanyId'
		})
	}
	return Company
}
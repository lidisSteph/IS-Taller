'use strict'
module.exports = (sequelize, DataTypes) => {
	const CompanyContractType = sequelize.define('CompanyContractType', {
		CompanyId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'Companies',
				key: 'id'
			}
		},
		ContractTypeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ContractTypes',
				key: 'id'
			}
		},
	}, {})
	CompanyContractType.associate = function(models) {
		// associations can be defined here
	}
	return CompanyContractType
}
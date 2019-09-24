'use strict'
module.exports = (sequelize, DataTypes) => {
	const PaymentAdjustmentValue = sequelize.define('PaymentAdjustmentValue', {
		data: DataTypes.JSON,
		startsAt: DataTypes.DATE,
		endsAt: DataTypes.DATE,
		active: DataTypes.BOOLEAN
	}, {})
	PaymentAdjustmentValue.associate = function(models) {
		PaymentAdjustmentValue.belongsTo(models.PaymentAdjustment)
	}
	return PaymentAdjustmentValue
}
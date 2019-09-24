'use strict'
module.exports = (sequelize, DataTypes) => {
	const PaymentAdjustment = sequelize.define('PaymentAdjustment', {
		name: DataTypes.STRING(100),
		/**
		 * IHSS_IVM     IHSS Invalidez, vejez y muerte
		 * IHSS_EM      IHSS Enfermedad y maternidad
		 * RAP          RAP
		 * RAP_SCL      RAP Seguro de cobertura laboral
		 * HORAS_EXTRA  Horas extra
		 * ISR          Impuesto sobre la Renta
		 * INFOP        INFOP
		 */
		type: DataTypes.STRING(50),
		data: DataTypes.JSON,
		/**
		 * deduction - Deducción
		 * addition - Adición
		 */
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
	PaymentAdjustment.associate = function(models) {
		PaymentAdjustment.belongsTo(models.PaymentAdjustmentGroup)
		PaymentAdjustment.hasMany(models.PayrollDetailAdjustment)
		PaymentAdjustment.hasMany(models.PaymentAdjustmentValue)
		PaymentAdjustment.hasMany(models.Loan)
		PaymentAdjustment.hasMany(models.Commission)
	}
	return PaymentAdjustment
}
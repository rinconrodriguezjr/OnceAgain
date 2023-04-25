//migration de users creada por sequelize-cli y editada por nosotros
'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('application_payments', {
        id: {
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.BIGINT,
        },
        application_id:{
          allowNull: false,
          type: Sequelize.UUID,
          foreingKey: true,
          references:{
            model: 'applications',
            key: 'user_id'
          },
          onUpdate: 'CASCADE', 
          onDelete: 'RESTRICT'
        },
        payment_intent:{
          allowNull: false,
          type: Sequelize.STRING,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        }
      }, { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },
  down: async (queryInterface, /*Sequelize*/) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.dropTable('application_payments', { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
}
//migration de users creada por sequelize-cli y editada por nosotros
'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('application_documents', {
        application_id:{
          allowNull: false,
          type: Sequelize.UUID,
          primaryKey: true,
          foreingKey: true,
          references:{
            model: 'applications',
            key: 'id'
          },
          onUpdate: 'CASCADE', 
          onDelete: 'RESTRICT'
        },
        url:{
          allowNull: false,
          type: Sequelize.TEXT,
        },
        order:{
          allowNull: false,
          type: Sequelize.INTEGER,
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
      await queryInterface.dropTable('application_documents', { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
}
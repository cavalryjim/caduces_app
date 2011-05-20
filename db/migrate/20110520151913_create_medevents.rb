class CreateMedevents < ActiveRecord::Migration
  def self.up
    create_table :medevents do |t|
      t.string :title
      t.string :description
      t.integer :importance
      t.date :start_date
      t.date :end_date

      t.timestamps
    end
  end

  def self.down
    drop_table :medevents
  end
end

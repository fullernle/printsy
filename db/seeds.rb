# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 

demo_user = User.create(username: 'demo', email: 'demo@demo.com', password: '123123')
user1 = User.create(username: 'fuller', email: 'ful@ful.com', password: '123123')
user2 = User.create(username: 'john', email: 'john@john.com', password: '123123')
user3 = User.create(username: 'jane', email: 'jane@jane.com', password: '123123')
user4 = User.create(username: 'darren', email: 'darren@darren.com', password: '123123')
user5 = User.create(username: 'lina', email: 'lina@lina.com', password: '123123')
user6 = User.create(username: 'zachary', email: 'zach@zach.com', password: '123123')
user7 = User.create(username: 'spencer', email: 'spencer@spencer.com', password: '123123');
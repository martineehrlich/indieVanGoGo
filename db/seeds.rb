# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


user1 = User.create(email: "user@example.com", name: "John", password: "password")
user2 = User.create(email: "antoher@example.com", name: "Bob", password: "password")
user3 = User.create(email: "water@example.com", name: "Pablo", password: "password")
user4 = User.create(email: "yeyey@example.com", name: "Rudy", password: "password")
user5 = User.create(email: "antohyeyeyer@example.com", name: "Ansel", password: "password")
user6 = User.create(email: "wawawawater@example.com", name: "Alejandro", password: "password")
Art.create(artist_id: user1.id, title: "tree", description: "great", image_file_name: "http://www.johncostanza.com/images/painting_tree.2.jpg")
Art.create(artist_id: user1.id, title: "tree", description: "great", image_file_name: "http://www.johncostanza.com/images/painting_tree.2.jpg")
Art.create(artist_id: user1.id, title: "tree", description: "great", image_file_name: "http://www.johncostanza.com/images/painting_tree.2.jpg")
Art.create(artist_id: user1.id, title: "tree", description: "great", image_file_name: "http://www.johncostanza.com/images/painting_tree.2.jpg")
Art.create(artist_id: user2.id, title: "tree", description: "great", image_file_name: "http://www.johncostanza.com/images/painting_tree.2.jpg")
Art.create(artist_id: user2.id, title: "tree", description: "great", image_file_name: "http://www.johncostanza.com/images/painting_tree.2.jpg")
Art.create(artist_id: user3.id, title: "tree", description: "great", image_file_name: "https://41.media.tumblr.com/cd6535a0f5c952864f91c4a50209f57b/tumblr_inline_nq4cy3UNyz1skc9nk_540.jpg")
Art.create(artist_id: user1.id, title: "tree", description: "great", image_file_name: "http://greatestpainting.com/images/paintings/monalisa.jpg")
Category.create(name: "Paint", image_url: "http://greatestpainting.com/images/paintings/monalisa.jpg")
Category.create(name: "Photography", image_url: "http://greatestpainting.com/images/paintings/monalisa.jpg")
Category.create(name: "Mural", image_url: "http://greatestpainting.com/images/paintings/monalisa.jpg")
Category.create(name: "Fashion", image_url: "http://greatestpainting.com/images/paintings/monalisa.jpg")

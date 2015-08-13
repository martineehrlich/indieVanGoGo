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
Art.create(artist_id: 1, title: "tree", description: "great", image_file_name: "http://www.johncostanza.com/images/painting_tree.2.jpg")
Art.create(artist_id: 2, title: "tree", description: "great", image_file_name: "http://www.johncostanza.com/images/painting_tree.2.jpg")
Art.create(artist_id: 3, title: "tree", description: "great", image_file_name: "http://www.johncostanza.com/images/painting_tree.2.jpg")
Art.create(artist_id: 4, title: "tree", description: "great", image_file_name: "http://www.johncostanza.com/images/painting_tree.2.jpg")
Art.create(artist_id: 5, title: "tree", description: "great", image_file_name: "http://www.johncostanza.com/images/painting_tree.2.jpg")
Art.create(artist_id: 6, title: "tree", description: "great", image_file_name: "http://www.johncostanza.com/images/painting_tree.2.jpg")
Art.create(artist_id: 1, title: "tree", description: "great", image_file_name: "https://41.media.tumblr.com/cd6535a0f5c952864f91c4a50209f57b/tumblr_inline_nq4cy3UNyz1skc9nk_540.jpg")
Art.create(artist_id: 1, title: "tree", description: "great", image_file_name: "http://greatestpainting.com/images/paintings/monalisa.jpg")
Category.create(name: "Paint", image_url: "http://www.scottchristensen.com.au/Images/painting-process.jpg")
Category.create(name: "Photography", image_url: "http://www.fastweb.com/uploads/article_photo/photo/1384613/crop380w_student_photographer_black_and_white.jpg")
Category.create(name: "Mural", image_url: "http://files.livefastmag.com.s3.amazonaws.com/wp-content/uploads/2014/04/IMG_9677.jpg")
Category.create(name: "Fashion", image_url: "http://static1.squarespace.com/static/53331522e4b00ce9525b5aa4/t/53c18473e4b042c138d755e3/1405191290924/?format=750w")

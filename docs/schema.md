# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
first_name      | string    | not null
last_name       | string    | not null
description     | string    |
password_digest | string    | not null
session_token   | string    | not null, unique
image_file_name | string    | for Paperclip Gem

## artworks
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
artist_id       | integer   | not null, foreign key (references users)
title           | string    | not null
description     | string    | not null
image_file_name | string    | not null, for Paperclip Gem

## galleries
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
artwork_id  | integer   | not null, foreign key (references artworks)

## patrons
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
artist_id   | integer   | not null, foreign key (references users)
patron_id   | integer   | not null, foreign key (references users)

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, unique

## categorizings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
category_id | integer   | not null, foreign key (references categories)
artist_id   | integer   | not null, foreign key (references users)

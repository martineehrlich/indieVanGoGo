# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
name            | string    | not null
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
category        | string    | not null
image_file_name | string    | not null, for Paperclip Gem

## patrons
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
artist_id   | integer   | not null, foreign key (references users)
patron_id   | integer   | not null, foreign key (references users)
amount      | integer   | not null
subscription| boolean   | true, false

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, unique

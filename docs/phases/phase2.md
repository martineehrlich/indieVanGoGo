# Phase 2: Viewing Blogs and Posts

## Rails
### Models

### Controllers
Api::ArtworksController (create, destroy, index, show)
Api::ArtistsController (create, destroy, show, update, index)

### Views
* artworks/show.json.jbuilder
* artists/show.json.jbuilder

## Backbone
### Models
* Artist (parses nested `artworks` association)
* Artwork

### Collections
* Artists
* Artworks

### Views
* ArtistForm
* ArtistShow (composite view, contains ArtworksIndex subview)
* ArtworksIndex (composite view, contains ArtworksIndexItem subviews)
* ArtworkIndexItem
* ArtworkShow

## Gems/Libraries

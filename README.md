# IndieVanGogo

[Check it out here.][site]

[site]: http://www.indievangogo.com/

IndieVanGogo is a web application built with Ruby on Rails, PostgreSQL, Backbone.js, Twitter Bootstrap and jQuery, and is modeled on IndieGogo's feel and functionality.

## Main Functionality
* Dynamically search for artists and artwork by name and title
* Filter artists and artwork by category of work
* Upload artwork using Cloudinary API
* View artists galleries through a carousel modal
* Fund artists and view and artists funders

## Additional Features
* Server-side infinite scroll
* Backbone Search collection comprised of multiple rails models using jbuilder
* Backbone.js communicating with a RESTful json API
* Search implements jQuery's animate event to scroll to a particular item on a page
* Hand-rolled authentication via Rails
* Polymorphic 'Categorizable' associations

## Minimum Viable Product
IndieVanGoGo is a clone of IndieGogo built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Create profiles
- [x] Create artworks
- [x] Support artists
- [x] View artist profiles/galleries
- [x] Search for artists by category
- [x] Search for artists by name
- [x] Search for artwork by category
- [x] Search for artwork by title

## Design Docs
* [DB schema][schema]

[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Project Creation (~1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to add artwork
using a simple text form in a Rails view. The most important part of this
phase will be pushing the app to Heroku and ensuring that everything works
before moving on to phase 2.

[Details][phase-one]

### Phase 2: Viewing Artist Profiles and Artworks (~2 days)
I will add API routes to serve artist and artwork data as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of this
phase, users will be able to add information their profiles and artwork
and view both artist profiles and artwork, all inside a single Backbone app.
An artists artwork will be displayed on their artist profile page in a gallery.

[Details][phase-two]

### Phase 3: Editing and Displaying Artists/Artworks (~1 day)
I plan to use a third-party library to add functionality to the `ArtworkForm` and
`ArtistForm` views in this phase. I am going to integrate the Paperclip gem so users
can easily upload images from their computer/facebook/instagram. I will also
add this same functionality so users can upload an avatar to their profiles.

[Details][phase-three]

### Phase 4: Artist Exploration and Supporting Artists (~2 days)
I'll start by adding an `artists` route that shows all artist's. Artists
will be organized into categories by their art form. On the Backbone side,
I'll make an 'ArtistIndex' view which will be the page users see after
logging in. Users will be able to become patrons of artists on an Artist's
profile page.

[Details][phase-four]

### Phase 5: Searching for Artists by category and popularity (~2 days)
I'll need to add `search` routes to the artists controller. On the
Backbone side, there will be a `SearchResults` composite view that has an
`artistIndex` subview. These views will use artists collections, but they
will fetch from the new `search` routes.

[Details][phase-five]

### Bonus Features (TBD)
- [x] Users can explore artwork as well as artists
- [ ] Users can comment on artists profiles
- [ ] Users can comment on individual artworks
- [x] Infinite scroll on artists/artworks explore page
- [ ] Add additional categories that involve video (acting/singing)
- [ ] Multiple sessions/session management

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md

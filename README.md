# The Starving Artist

[Link to Site][site]

[site]: http://www.indievangogo.com/

This is an application modeled after indiegogo, but for artists to post their work and get funded by other users. Users can post artwork that gets added to their galleries. Users can search for artists and artwork by name and also by category. Users can view artists galleries on the main explore page and on each artists site.


## Minimum Viable Product
IndieVanGoGo is a clone of indiegogo built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Create profiles
- [ ] Create artworks
- [ ] Support artists
- [ ] View artist profiles/galleries
- [ ] Search for artists by category
- [ ] Search for artists by name
- [ ] Search for artists by popularity

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
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
- [ ] Users can explore artwork as well as artists
- [ ] Users can comment on artists profiles
- [ ] Users can comment on individual artworks
- [ ] Infinite scroll on actors index page
- [ ] Add additional categories that involve video (acting/singing)
- [ ] Multiple sessions/session management

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md

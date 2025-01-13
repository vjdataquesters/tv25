#### Upcoming works for TV25

- landing page ui change - atleast 4-5 sections - you can use rollout.site or lovable.dev for designs
- events page, and team page modify
- frontend file structure change
- frontend registration form for tv and individual event
- website lo cookie consent, privacy policy, tandc, refund policy, contact page for payments

- take a domain
- payments setup
- admin - shall have ability to stop/start form, see registered users, rsvp, etc
- server setup


<!-- Post registration(after payment of reg fee) -->
db schema for registered participants
{
    name
    email
    phone
    college
    year
    branch
    events: [ event_id1, event_id2, ...]
    paymentId
    orderId
    paymentStatus
    successfullAt
    createdAt
}


db schema for events
{
    name
    description
    date
    time
    venue
    participantsCount
    maxParticipants
    registeredParticipants: [ participant_id1, participant_id2, ...]
}
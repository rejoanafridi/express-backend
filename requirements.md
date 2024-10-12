-- Sell lottery ticket
-- Update lottery ticket
-- delete lottery ticket
-- get all tickets
-- get ticket by id
-- bulk by (user can buy multiple ticket at a time)
-- raffle draw

Ticket
-- number(unique)
-- userName
-- price
-- date
-- timestamp (createdAt, updatedAt)
--

singleton pattern ??

Routes:
-- /tickets/t/:ticketId -find single ticket [GET]
-- /tickets/u/:username
-- /tickets/t/:ticketId - update ticket by id [PATCH]
-- /tickets/t/:ticketId - delete ticket by id [DELETE]
-- /tickets/u/:username - find ticket for a given user [GET]
-- /tickets/u/:username - update tickets for a a given user [PATCH]
-- /tickets/u/:username - delete all tickets for a given user [DELETE]
-- /tickets/sell - create-tickets
-- /tickets/bulk - bull sell ticket
-- /tickets/draw
-- /tickets - find all tickets

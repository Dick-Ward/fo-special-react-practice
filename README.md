## YOUR ASSIGNMENT - TOP SECRET: DO NOT EXPOSE UNDER PENALTY OF EXPLOSION

Greetings Vaul-Tec employee!  You have been assigned with creating the S.P.E.C.I.A.L. Customization Form (SCF) for our upcoming Pip-Boy 3000 Mark V.  We've created a few base elements for you, but it's up to you to make everything functional.

There is a file (special-data.js) that contains the name of each S.P.E.C.I.A.L. category and a default value.  This should populate in the SCF when it is loaded.  

Users have a total of 28 S.P.E.C.I.A.L. points to spread out as they please. No stat is allowed to go lower than 1 or higher than 10.  The indicator on the right should show how many points they have left to spend.  This number should not be allowed to go negative, and a user should not be able to spend more points than they have.

## Recommended Build Order

 - Import Data from special-data.js
 - Render each special category to the page using default data
 - Make the amount of remaining points displayed reflect the amount of points available
 - Make the arrows increment and decrement each category
 - Ensure the user is not able to move past the minimum or maximum points
 - Ensure the user is not able to spend more points than available
 - Show an error message to the user if they try and break the outlined rules

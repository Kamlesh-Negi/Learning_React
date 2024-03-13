

#### Food Ordering site

/**
 * Header
 *  - Logo
 *  - Nav bar
 * Body
 *  - Search
 *  - Restaurant Container
 *      -- Restaurant Card
 *            -- image
 *            -- Name of the Restaurant, Ratings, Cuisine etc, Delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */


# Bug-1
 In body we have a  search bar. To make search input box work we have to bind the input box i.e., we have to give our value the 'searchText' to a local variable of state with empty string.
 So as soon as our input changes, our onChange handler will  update the searchText



 # Bug-2:
 searching the vlaue with exact name(case sensitive)
 -> to make search work for all cases (lower/upper/upper-lower mix) we just need to set all the values ``toLowercase()`` or ``toUpperCase()``

 # Bug-3:
 if we search again after the first search, it will not show any thing if the the result
 ->because when we have searched for the first time then we have updated our listOfRestaurant and now when we are searching once again we are only searching it inside the updated list not the whole listOfRestaurant.

 -> to make it bugfree we'll not modify the  original list, instead we keep another copy of this list in another state variable filteredRestaurant and update setFilterdRestaurant instead of updating setListOfRestaurant and during rendering we will render it from filteredRestaurant

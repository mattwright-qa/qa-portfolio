# Exploratory Testing-Notes

**Game plan:** I will explore the Tumble Kitchen application to discover bugs and inconsistencies in the user experience.<br>
**Time box:** 30 minutes

---

## Notes
- The number of reviews seems to be inconsistent with the number of reviews displayed on the menu item details page. 

- while rating a menu item, i noticed that my low rating was not reflected in the average rating displayed on the menu item details page. I would expect the average rating to update immediately after submitting a review.

---

## Bugs or questions
- **BUG** application allows me to add food dishes to favorites without being signed in, should ask me to sign in or create an account first.

- **BUG** I noticed that clicking apply while leaving the discount code field empty reads "That code is not recognised." I would expect it to read "Please enter a discount code" or similar instead.

- **BUG** while checking out, the phone number field allowed a "." directly at the end of the number. I would expect the field to only allow numbers

---

## What I would explore next
- I would like to explore the checkout process further, specifically testing the payment methods and ensuring that the correct total is displayed after applying discounts and delivery fees. I would also like to test the behavior of the application when entering invalid payment information, such as an expired credit card or incorrect CVV. Additionally, I would like to explore the favorites feature further, testing the behavior when adding and removing items from favorites while signed in and signed out.


---


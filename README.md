# Baking Studio Website

**MERN-Stack Project**

https://baking-class.herokuapp.com/

#Paypal payment API

Card Type: Visa

Card Number: 4032032231876795

Expiration Date: 04/2027

CVV: 825

**Premise**
Customer can 'book' baking class through this website and 'pay' through PayPal API

**User Story**
As a user I want to

• Be able to sign up and login

• As Admin I am able to create/update and delete class

• Be able to check calendar for all classes reservation

• Be able to see order history

• Be able to get email confirmation after paying the class

• Be able to make fake payments through PayPal API

The Wireframes:
• Admin Main Page

![alt text](https://github.com/heysungj/Baking-Class/blob/main/public/photos/homepage.png)

• Add class Component

![alt text](https://github.com/heysungj/Baking-Class/blob/main/public/photos/addclass.png)

• Product Detail Page

![alt text](https://github.com/heysungj/Baking-Class/blob/main/public/photos/productDetail.png)

• Check Out Page

![alt text](https://github.com/heysungj/Baking-Class/blob/main/public/photos/checkout.png)

• Calendar Page

![alt text](https://github.com/heysungj/Baking-Class/blob/main/public/photos/calendar.png)

• Email Confirmation

![alt text](https://github.com/heysungj/Baking-Class/blob/main/public/photos/emailConfirmation.png)

• My Account Page

![alt text](https://github.com/heysungj/Baking-Class/blob/main/public/photos/myaccount.png)

**Route Table:**  
•Index GET /

• GET /products/:ID

• GET /calendar get all orders show on calendar

• GET /api/products/user/myAccount show user's orders

• DELETE /api/products/user/orders/:orderId delete order from a user

• DELETE /api/products/deleteClass/:productId delete class from database

• POST /api/products/cart/new create unpaid order in database

• POST /api/products/cart/checkout

• POST /api/products/newClass post new class into database

• PUT /editClass/:productId update class info

•POST /api/users/

• POST /api/users/login

**Technologies Used:**
React, MongoDB Atlas, Express, Mongoose, Javascript , Node,Bootstrap, Heroku, AWS, PAYPAL API, SENDGRID

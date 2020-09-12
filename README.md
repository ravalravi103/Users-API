# Users-API


     ======================================
          User API Using NodeJs(ExpresJs)
     =========================================
     
       This is User API Project Created with Nodejs and MongoDB. Used Nodejs Framework Expressjs and MongoDB OMR mongoose Library .
       Here we can Create,ReadAll,ReadOne,Update,Delete Users.
       
       ==========================================
          User Field Required to Craete User 
       ==========================================
          1.Name 
          2.mobile
          3.email
          4.flatNumber
          5.buildingName
          6.addressLineOne
          7.city
          8.state
          
          =========================================
           Fetch The User 
          ==========================================
              - we can Fetch List of User as well as Single User
              - For list of User send get() request to /user 
              - For Single User send get() request to /user/id
              
              
          ==============================================
            Update The User
          ===============================================
          
               To Upadte The User we can use put and patch method but here 
               i have Use put method . so To Update The user send put method 
               with all Updated Data.
               - To Upate The user send put request to /user/id
               
           =====================================================
              Delete User
           ===================================================== 
                To Delete the user send the Http DELETE request to /user/id
                
                
             
            -=====================================
               How to Run This Project 
             =======================================
                 1. Downlord or Clone The Project 
                 2.run npm install or npm i to downlord all The Depandancy Packages.
                 3.Set Port Number and Database Connection String 
                 4.if you want to Run This Project Locally Then Install MongoDB Compass from Official MongoDB Website.
                 5.Finally To run The Project run The Script 
                     npm run dev
                     

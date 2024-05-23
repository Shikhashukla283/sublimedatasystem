# Node Project
## Installation

Step-by-step instructions on how to get the development environment set up.

1. Clone the repo

   ```sh
   git clone git@github.com:Shikhashukla283/sublimedatasystem.git
   cd sublimedatasystem

2.  Install NPM packages
    npm install

3.  Set up environment variables
    HOST='0.0.0.0'
    PORT= 3000
    DB_HOST=localhost
    DB_PORT=3306
    DB_NAME=sublime_data_system
    DB_USER=root
    DB_PASSWORD=root
    DB_DIALECT=mysql
    DB_DRIVER=mysql

4.  Update config.json file with your Database Credentials

5. Run Migration
    npm run migrate

6. Start the Server
    npm run start


## Postman Documentation

You can find the Postman documentation for this API [here](https://documenter.getpostman.com/view/26629270/2sA3QpCZWT).

## Database Tables

Below is a list of database tables along with their fields:

1. `customers`
   - `id`: INTEGER (Primary Key)
   - `first_name`: STRING
   - `last_name`: STRING
   - `city`: ENUM ["Ahmedabad", "Baroda", "Bharuch", "Surat", "Vadodara"]
   - `company`: ENUM ["SublimeDataSystems", "TCS", "Wipro", "HCL", "Capegemini"]
   - `created_at`: TIMESTAMP
   - `updated_at`: TIMESTAMP
   - `deleted_at`: TIMESTAMP



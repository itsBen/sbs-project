# ShopBuddy

[![Build Status](https://travis-ci.org/itsBen/sbs-project.svg?branch=master)](https://travis-ci.org/itsBen/sbs-project)

*A project from Software-Business-Startup at Metropolia University of Applied Sciences, Finland*

## Notes about architecture

The project leverages several services to provide its functionality.
The idea behind that is to be fast and as flexible as possible creating a MVP.
Relying on BaaS allows us to focus on our core product.
There's no need to develop a backend on our own with basically common functionality.

#### The *backend* constists of the following components
* `bugsnag.com`: A Backend-as-a-Service to collect errors with production applications
* `contentful.com`: A headless Content-Management-System. Used to manage the productinformation
* `firebase`: A Backend-as-a-Service. Used as real time database to manage orders; For authentication; Storage for user-generated content; Sending Push-Notifications; Collect analytics data
* `Custom Backend`: A self developed backend for custom functions. Used to calculate delivery costs

#### The *frontend* consists of the following components
* `Customer App`: A dedicated app to allow customers to place orders
* `Courier App`: A dedicated app to allow couriers to manage deliveries


## Documentation

* [Customer App](/client/customerApp)
* [Courier App](/client/courierApp)
* [Backend](/server)

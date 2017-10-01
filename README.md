# ShopBuddy

**A project from Software-Business-Startup at Metropolia University of Applied Sciences, Finland**

## Notes about architecture

The project leverages several services to provide its functionality.

#### The *backend* constists of the following components
* `contentful.com`: A headless Content-Management-System. Used to manage the productinformation
* `firebase`: A Backend-As-A-Service. Used as realtimedatabase to manage orders; for authentication; storage for user-generated content; Sending Push-Notifications; Collect analytics data
* `Custom Backend`: A self developed backend for custom functions. Used to calculate delivery costs

#### The *frontend* consists of the following components
* `Customer App`: A dedicated app to allow customers to place orders
* `Courier App`: A dedicated app to allow couriers to manage deliveries


## Documentation

* [Customer App](/client/customerApp)
* [Courier App](/client/courierApp)
* [Backend](/server)

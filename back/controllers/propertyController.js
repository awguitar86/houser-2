module.exports = {
  getAllProperties: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.getAllProperties()
      .then(properties => { res.status(200).send(properties) })
      .catch( err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  getFilteredProperties: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.getFilteredProperties()
      .then(properties => { res.status(200).send(properties) })
      .catch( err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  createNewProperty: (req, res, next) => {
    console.log("Creating new property", req.body);
    const dbInstance = req.app.get('db');
    let {property_name, description, address, city, state, zip, url, mortgage_total, mortgage_monthly, desired_rent, user_id} = req.body;

    dbInstance.createNewProperty({property_name, description, address, city, state, zip, url, mortgage_total, mortgage_monthly, desired_rent, user_id})
      .then((res) => res.status(200).send(res))
      .catch((err) => res.status(500).send(err))
  }


}

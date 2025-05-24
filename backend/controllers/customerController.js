const Customer = require('../models/Customer');

exports.saveCustomerDetails = async (req, res) => {
  try {
    const { userId, fullName, phoneNumber, address1, address2, city, state, pincode } = req.body;

    // Check if customer details already exist for user
    let customer = await Customer.findOne({ userId });

    if (customer) {
      // Update existing details
      customer.fullName = fullName;
      customer.phoneNumber = phoneNumber;
      customer.address1 = address1;
      customer.address2 = address2;
      customer.city = city;
      customer.state = state;
      customer.pincode = pincode;
      await customer.save();
    } else {
      // Create new details
      customer = new Customer({ userId, fullName, phoneNumber, address1, address2, city, state, pincode });
      await customer.save();
    }

    res.status(201).json({ message: 'Customer details saved' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

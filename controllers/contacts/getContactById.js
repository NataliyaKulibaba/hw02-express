const contacts = require("../../models/contacts");

const getContactById = async (req, res) => {
  const { id } = req.params;

  const contact = await contacts.getContactById(id);

  if (!contact) {
    const error = new Error("Not found");
    error.status = 404;
    throw error;
  }
  res.status(200).json(contact);
};

module.exports = getContactById;
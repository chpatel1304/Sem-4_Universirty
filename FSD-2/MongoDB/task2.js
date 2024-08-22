/**
 * Connect to the MongoDB database
 *
 * @returns {Promise} A promise that resolves when the connection is established
 */
mg.connect("mongodb://127.0.0.1:27017/mydbs")
    .then(() => {
        console.log('Success');
    })
    .catch((err) => {
        console.log(err);
    });

/**
 * Pluralize a string using Mongoose's pluralize function
 *
 * @param {string} str The string to pluralize
 * @returns {string} The pluralized string
 */
mg.pluralize(null); // Example: mg.pluralize("cat") => "cats"

/**
 * Define a Mongoose schema for an employee document
 *
 * @typedef {Object} EmployeeSchema
 * @property {string} name - The employee's name
 * @property {number} age - The employee's age
 * @property {string} position - The employee's position
 * @property {number} salary - The employee's salary
 */
const myschema = new mg.Schema({
    name: { type: String, required: true },
    age: Number,
    position: String,
    salary: Number
}, { versionKey: false });

/**
 * Create a Mongoose model for the employee schema
 *
 * @typedef {Model} EmployeeModel
 */
const emp = new mg.model("emp", myschema);

/**
 * Insert a new employee document into the database
 *
 * @param {Object} data The employee data to insert
 * @returns {Promise} A promise that resolves with the inserted document
 */
const insertDoc = async (data) => {
    const result = await emp.create(data);
    console.log(result);
};
// Example usage: insertDoc({name: "John Doe", age: 30, position: "Software Engineer", salary: 100000});

/**
 * Update an existing employee document in the database
 *
 * @param {string} id The ID of the employee document to update
 * @returns {Promise} A promise that resolves with the updated document
 */
const updateDoc = async (i) => {
    const result = await emp.findByIdAndUpdate({ _id: i }, { $set: { age: 0.75 } }, { new: true });
    console.log(result);
};
// Example usage: updateDoc("66c442e2cdd1e1df1220ad9c");

/**
 * Delete an employee document from the database
 *
 * @param {string} id The ID of the employee document to delete
 * @returns {Promise} A promise that resolves with the deleted document
 */
const deleteDoc = async (i) => {
    const result = await emp.findByIdAndDelete({ _id: i });
    console.log(result);
};
// Example usage: deleteDoc("66c442e2cdd1e1df1220ad9c");

/**
 * Retrieve an employee document from the database
 *
 * @param {string} id The ID of the employee document to retrieve
 * @returns {Promise} A promise that resolves with the retrieved document
 */
const viewDoc = async (i) => {
    const result = await emp.findById({ _id: i });
    console.log(result);
};
// Example usage: viewDoc("66c442e2cdd1e1df1220ad9c");
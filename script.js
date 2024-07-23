function getFormvalue() {
    // Prevent the form from submitting the default way
    event.preventDefault();

    // Access the form and its elements
    var form = document.getElementById("form1");
    var fname = form.elements["fname"].value;
    var lname = form.elements["lname"].value;

    // Display an alert with the first name and last name
    alert(fname + " " + lname);
}

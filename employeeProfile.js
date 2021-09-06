function employeeProfile(response) {
    var content =
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Profiles</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    CSS rules to specify families

    font-family: 'Montserrat', sans-serif;
</head>
<body>

    <header>
        Our Company Employee Profiles
    </header>

    <div class="conteiner">
        <div class="job">
            ${response.manager}
        </div>
        <div class="description">Job Description: Manager</div>
        <div class="id">Manager's ID: ${response.managerID}</div>
        <div class="email">Manager's e-mail: ${response.managerEmail}</div>
        <div class="phone">Manager's Phone: ${response.managerPhone}</div>
    </div>

    <div class="conteiner">
        <div class="job">
        ${response.employeeName}
        </div>
        <div class="description">Job Description: ${response.employeeJob}</div>
        <div class="id">Employee's ID: ${response.employeeID}</div>
        <div class="email">Employee's e-mail: <a href="https://gmail.com">${response.employeeEmail}</a></div>
        <div class="phone">Employee's GitHub ID: <a href="https://github.com/${response.employeeHub}">${response.employeeHub}</a></div>
    </div>
    
</body>
</html>`

    return content;
};

module.exports = employeeProfile;
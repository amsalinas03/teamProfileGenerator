const wholeTeam = team => {

    // create the manager html
    const buildManagerCard = manager => {
        return `
    <div>
        <div>
            <h2>${manager.getName()}:${manager.getRole()} </h2>
        </div>
        <div>
            <h4> ID: ${manager.getId()}</h4>
            <h4> Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></h4>
            <h4> Office number: ${manager.getOfficeNumber()}</h4>
        </div>
    </div>
        `;
    };

    const buildEngineerCard = engineer => {
        return `
    <div>
        <div>
            <h2>${engineer.getName()}: ${engineer.getRole()}</h2>
        </div>
    <div>
        <h4>ID: ${engineer.getId()}</h4>
        <h4>Email: ${engineer.getEmail()}</h4>
        <h4>GitHub: ${engineer.getGithub()}</h4>
    </div>
    </div>
        `;
    };

    const buildIntenCard = intern => {
        return `
    <div>
        <div>
        <h2>${intern.getName()}:${intern.getRole()}</h2>
        </div>
        <div>
            <h4>ID: ${intern.getId()}</h4>
            <h4>Email: ${intern.getEmail()}</h4>
            <h4>School: ${intern.getSchool()}</h4>
        </div>
    </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => buildManagerCard(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => buildEngineerCard(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => buildIntenCard(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team Profile Generator</title>
</head>

<body>
    <div class="container">
    ${wholeTeam(team)}
    </div>
</body>
</html>
    `;
};
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

coursesArray.forEach(course => {

    const courseDiv = document.createElement('div');
    courseDiv.classList.add('course');
    courseDiv.style.width = '90wv';

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    titleDiv.innerText = course.title;

    const durationsDiv = document.createElement('div');
    durationsDiv.classList.add('durations');

    durationsDiv.style.display = 'flex';
    durationsDiv.style.gap = '10px';

    const monthDiv = document.createElement('div');
    monthDiv.innerText = `Month duration: ${course.monthDuration}`;

    const hourDiv = document.createElement('div');
    hourDiv.innerText = `Hour duration: ${course.hourDuration}`;

    monthDiv.style.flex = '1';
    hourDiv.style.flex = '3';

    durationsDiv.append(monthDiv, hourDiv);

    const modulesDiv = document.createElement('div');
    modulesDiv.classList.add('modules');


    course.modules.forEach(module => {
        const moduleDiv = document.createElement('div');
        moduleDiv.innerText = module;
        modulesDiv.appendChild(moduleDiv);
    });

    courseDiv.append(titleDiv, durationsDiv, modulesDiv);
    document.body.appendChild(courseDiv);

});
























/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    'name': "Nursultan",
    'role': "Web Developer",
    'contact info': {
        "mobile":  '87455663121',
        "email": "nursalga@gmail.com",
        "location": 'Shymkent'
    },
    'picture': "../images/foto.jpg",
    "skills" :["good learning","work hard"]

};
var education = {
    "school":{
        "school's Number": 9,
        "location": "Shymkent",
        "rating": "1st school in a town"
    },
    "university": 'Almaty radio and telecom university',
    "location": "Almaty",
    "rating": "3-rd university in Kazahstan",
    "specialization" :"Telecommunications and radio",
    "chair": "Radio"
};

var work = {
    "jobs": [
        {   "employer": "Astanatelecom",
            "title": "engineer of Help Desk",
            "location": "Astana",
            "dates" : "2013-09 --- 2014.09",
            "description" : "Fix communication problemes with Internet. ",
            "salary" : 90000
    },
    {
        "employer": "IT'S",
        "title" : "sales manager",
        "location": "Shymkent",
        "dates" : "2014-10 --- 2015-01",
        "description" : "sales manager in Security services company",
        "salary": 20000
    },
    {
       "employer" : "Kaspi Bank",
        "title": "engineer of IT department",
        "location" : "Shymkent",
        "dates" : "2015-02 --- up to mow",
        "description" : "support all kind of IT: computers, communication, some kind of programms etc..",
        "salary": 84000
    }
]
}
var projects = {
    1:{
        "type of project" : "site",
        "project's Name": "Greengo.kz",
        "dates": 2016.06
    }
};
if(bio.skills.length> 0){

    $('#header').append(HTMLskillsStart);
    var formSkills= HTMLskills.replace("%data%", bio.skills[0]);
    $('#skills').append(formSkills);
    formSkills= HTMLskills.replace("%data%",bio.skills[1]);
    $('#skills').append(formSkills);
}
function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedJobEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedJobTitle = formattedJobEmployer + formattedJobTitle;
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location)
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedJobTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
    }
}
displayWork();

$("#main").append(internationalizeButton);








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
            "salary" : 90000
    },
    {
        "employer": "IT'S",
        "title" : "sales manager",
        "location": "Shymkent",
        "salary": 20000
    },
    {
       "employer" : "Kaspi Bank",
        "location" : "Shymkent",
        "title": "engineer of IT department",
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
for(job in work){
    $("#workExperience").append(HTMLworkStart);
    var formattedJobEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].title);
    var formattedJobTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedJobTitle=formattedJobEmployer+formattedJobTitle;

    $(".work-entry:last").append(formattedJobTitle);
}

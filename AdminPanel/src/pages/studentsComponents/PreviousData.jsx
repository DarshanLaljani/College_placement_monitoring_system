// Data.jsx
const previousStudentData = [
    {
        "student_id": 1,
        "name": "John Doe",
        "rollNumber": "21BCP435D",
        "school_id": 1,
        "dep_id": 1,
        "year_of_study": 4,
        "personal_email": "john@example.com",
        "college_email": "john.doe@college.edu",
        "phone_number": "+1234567890",
        "date_of_birth": "2000-01-01",
        "gender": "male",
        "city": "CityName",
        "state": "StateName",
        "tenth_percentage": 85.50,
        "twelfth_percentage": 87.00,
        "diploma_percentage": null,
        "cpi_after_7th_sem": 8.50,
        "cpi_after_8th_sem": 8.70,
        "remark": "Excellent student",
        "category": "General",
        "first_sem_spi": 7.50,
        "second_sem_spi": 7.80,
        "third_sem_spi": 8.00,
        "fourth_fifth_sem_spi": 8.10,
        "sixth_sem_spi": 8.20,
        "seventh_sem_spi": 8.50,
        "eighth_sem_spi": 8.70,
        "no_of_backlog": 0,
        "no_of_active_backlog": 0,
        "optout": false
    },
    {
        "student_id": 2,
        "name": "Jane Smith",
        "rollNumber": "21BCP436D",
        "school_id": 1,
        "dep_id": 2,
        "year_of_study": 4,
        "personal_email": "jane@example.com",
        "college_email": "jane.smith@college.edu",
        "phone_number": "+1234567891",
        "date_of_birth": "2000-02-15",
        "gender": "female",
        "city": "CityName",
        "state": "StateName",
        "tenth_percentage": 90.00,
        "twelfth_percentage": 92.00,
        "diploma_percentage": null,
        "cpi_after_7th_sem": 8.80,
        "cpi_after_8th_sem": 9.00,
        "remark": "Very diligent",
        "category": "OBC",
        "first_sem_spi": 8.00,
        "second_sem_spi": 8.30,
        "third_sem_spi": 8.50,
        "fourth_fifth_sem_spi": 8.60,
        "sixth_sem_spi": 8.70,
        "seventh_sem_spi": 8.80,
        "eighth_sem_spi": 9.00,
        "no_of_backlog": 0,
        "no_of_active_backlog": 0,
        "optout": false
    },
    {
        "student_id": 3,
        "name": "Robert Brown",
        "rollNumber": "21BCP437D",
        "school_id": 1,
        "dep_id": 3,
        "year_of_study": 3,
        "personal_email": "robert@example.com",
        "college_email": "robert.brown@college.edu",
        "phone_number": "+1234567892",
        "date_of_birth": "2001-03-10",
        "gender": "male",
        "city": "CityName",
        "state": "StateName",
        "tenth_percentage": 88.00,
        "twelfth_percentage": 89.50,
        "diploma_percentage": null,
        "cpi_after_7th_sem": null,
        "cpi_after_8th_sem": null,
        "remark": "Strong in technical skills",
        "category": "SC",
        "first_sem_spi": 7.90,
        "second_sem_spi": 8.10,
        "third_sem_spi": 8.20,
        "fourth_fifth_sem_spi": 8.40,
        "sixth_sem_spi": 8.50,
        "seventh_sem_spi": null,
        "eighth_sem_spi": null,
        "no_of_backlog": 1,
        "no_of_active_backlog": 1,
        "optout": false
    },
    {
        "student_id": 4,
        "name": "Emily Davis",
        "rollNumber": "21BCP438D",
        "school_id": 1,
        "dep_id": 2,
        "year_of_study": 2,
        "personal_email": "emily@example.com",
        "college_email": "emily.davis@college.edu",
        "phone_number": "+1234567893",
        "date_of_birth": "2002-04-05",
        "gender": "female",
        "city": "CityName",
        "state": "StateName",
        "tenth_percentage": 92.00,
        "twelfth_percentage": 93.50,
        "diploma_percentage": null,
        "cpi_after_7th_sem": null,
        "cpi_after_8th_sem": null,
        "remark": "Shows great potential",
        "category": "ST",
        "first_sem_spi": 8.50,
        "second_sem_spi": 8.70,
        "third_sem_spi": 8.90,
        "fourth_fifth_sem_spi": null,
        "sixth_sem_spi": null,
        "seventh_sem_spi": null,
        "eighth_sem_spi": null,
        "no_of_backlog": 0,
        "no_of_active_backlog": 0,
        "optout": false
    },
    {
        "student_id": 5,
        "name": "Michael Johnson",
        "rollNumber": "21BCP439D",
        "school_id": 1,
        "dep_id": 3,
        "year_of_study": 4,
        "personal_email": "michael@example.com",
        "college_email": "michael.johnson@college.edu",
        "phone_number": "+1234567894",
        "date_of_birth": "2000-05-20",
        "gender": "male",
        "city": "CityName",
        "state": "StateName",
        "tenth_percentage": 84.00,
        "twelfth_percentage": 86.00,
        "diploma_percentage": null,
        "cpi_after_7th_sem": 8.30,
        "cpi_after_8th_sem": 8.50,
        "remark": "Active in extracurricular activities",
        "category": "General",
        "first_sem_spi": 7.70,
        "second_sem_spi": 7.90,
        "third_sem_spi": 8.10,
        "fourth_fifth_sem_spi": 8.20,
        "sixth_sem_spi": 8.30,
        "seventh_sem_spi": 8.40,
        "eighth_sem_spi": 8.50,
        "no_of_backlog": 2,
        "no_of_active_backlog": 1,
        "optout": false
    },
    {
        "student_id": 6,
        "name": "Sarah Wilson",
        "rollNumber": "21BCP440D",
        "school_id": 1,
        "dep_id": 1,
        "year_of_study": 4,
        "personal_email": "sarah@example.com",
        "college_email": "sarah.wilson@college.edu",
        "phone_number": "+1234567895",
        "date_of_birth": "2000-06-15",
        "gender": "female",
        "city": "CityName",
        "state": "StateName",
        "tenth_percentage": 89.00,
        "twelfth_percentage": 91.00,
        "diploma_percentage": null,
        "cpi_after_7th_sem": 8.70,
        "cpi_after_8th_sem": 8.90,
        "remark": "Excellent communication skills",
        "category": "OBC",
        "first_sem_spi": 8.10,
        "second_sem_spi": 8.30,
        "third_sem_spi": 8.50,
        "fourth_fifth_sem_spi": 8.60,
        "sixth_sem_spi": 8.70,
        "seventh_sem_spi": 8.80,
        "eighth_sem_spi": 8.90,
        "no_of_backlog": 0,
        "no_of_active_backlog": 0,
        "optout": false
    },
    {
        "student_id": 7,
        "name": "David Lee",
        "rollNumber": "21BCP441D",
        "school_id": 1,
        "dep_id": 2,
        "year_of_study": 3,
        "personal_email": "david@example.com",
        "college_email": "david.lee@college.edu",
        "phone_number": "+1234567896",
        "date_of_birth": "2001-07-25",
        "gender": "male",
        "city": "CityName",
        "state": "StateName",
        "tenth_percentage": 86.00,
        "twelfth_percentage": 88.00,
        "diploma_percentage": null,
        "cpi_after_7th_sem": null,
        "cpi_after_8th_sem": null,
        "remark": "Great leadership qualities",
        "category": "General",
        "first_sem_spi": 7.80,
        "second_sem_spi": 8.00,
        "third_sem_spi": 8.20,
        "fourth_fifth_sem_spi": 8.30,
        "sixth_sem_spi": 8.40,
        "seventh_sem_spi": null,
        "eighth_sem_spi": null,
        "no_of_backlog": 1,
        "no_of_active_backlog": 0,
        "optout": false
    },
    {
        "student_id": 8,
        "name": "Laura Martinez",
        "rollNumber": "21BCP442D",
        "school_id": 1,
        "dep_id": 3,
        "year_of_study": 2,
        "personal_email": "laura@example.com",
        "college_email": "laura.martinez@college.edu",
        "phone_number": "+1234567897",
        "date_of_birth": "2002-08-30",
        "gender": "female",
        "city": "CityName",
        "state": "StateName",
        "tenth_percentage": 91.00,
        "twelfth_percentage": 92.50,
        "diploma_percentage": null,
        "cpi_after_7th_sem": null,
        "cpi_after_8th_sem": null,
        "remark": "Strong analytical skills",
        "category": "OBC",
        "first_sem_spi": 8.20,
        "second_sem_spi": 8.40,
        "third_sem_spi": 8.60,
        "fourth_fifth_sem_spi": null,
        "sixth_sem_spi": null,
        "seventh_sem_spi": null,
        "eighth_sem_spi": null,
        "no_of_backlog": 0,
        "no_of_active_backlog": 0,
        "optout": false
    },
    {
        "student_id": 9,
        "name": "James Anderson",
        "rollNumber": "21BCP443D",
        "school_id": 1,
        "dep_id": 1,
        "year_of_study": 4,
        "personal_email": "james@example.com",
        "college_email": "james.anderson@college.edu",
        "phone_number": "+1234567898",
        "date_of_birth": "2000-09-10",
        "gender": "male",
        "city": "CityName",
        "state": "StateName",
        "tenth_percentage": 87.00,
        "twelfth_percentage": 88.50,
        "diploma_percentage": null,
        "cpi_after_7th_sem": 8.60,
        "cpi_after_8th_sem": 8.80,
        "remark": "Proactive and organized",
        "category": "General",
        "first_sem_spi": 8.00,
        "second_sem_spi": 8.20,
        "third_sem_spi": 8.30,
        "fourth_fifth_sem_spi": 8.50,
        "sixth_sem_spi": 8.60,
        "seventh_sem_spi": 8.70,
        "eighth_sem_spi": 8.80,
        "no_of_backlog": 0,
        "no_of_active_backlog": 0,
        "optout": false
    },
    {
        "student_id": 10,
        "name": "Sophia Taylor",
        "rollNumber": "21BCP444D",
        "school_id": 1,
        "dep_id": 2,
        "year_of_study": 3,
        "personal_email": "sophia@example.com",
        "college_email": "sophia.taylor@college.edu",
        "phone_number": "+1234567899",
        "date_of_birth": "2001-10-15",
        "gender": "female",
        "city": "CityName",
        "state": "StateName",
        "tenth_percentage": 93.00,
        "twelfth_percentage": 94.00,
        "diploma_percentage": null,
        "cpi_after_7th_sem": null,
        "cpi_after_8th_sem": null,
        "remark": "Creative thinker",
        "category": "OBC",
        "first_sem_spi": 8.40,
        "second_sem_spi": 8.60,
        "third_sem_spi": 8.70,
        "fourth_fifth_sem_spi": 8.80,
        "sixth_sem_spi": null,
        "seventh_sem_spi": null,
        "eighth_sem_spi": null,
        "no_of_backlog": 0,
        "no_of_active_backlog": 0,
        "optout": false
    },
    {
        "student_id": 11,
        "name": "William Hernandez",
        "rollNumber": "21BCP445D",
        "school_id": 1,
        "dep_id": 1,
        "year_of_study": 4,
        "personal_email": "william@example.com",
        "college_email": "william.hernandez@college.edu",
        "phone_number": "+1234567800",
        "date_of_birth": "2000-11-05",
        "gender": "male",
        "city": "CityName",
        "state": "StateName",
        "tenth_percentage": 82.00,
        "twelfth_percentage": 84.00,
        "diploma_percentage": null,
        "cpi_after_7th_sem": 8.20,
        "cpi_after_8th_sem": 8.40,
        "remark": "Team player",
        "category": "General",
        "first_sem_spi": 7.70,
        "second_sem_spi": 7.90,
        "third_sem_spi": 8.10,
        "fourth_fifth_sem_spi": 8.20,
        "sixth_sem_spi": 8.30,
        "seventh_sem_spi": 8.40,
        "eighth_sem_spi": 8.40,
        "no_of_backlog": 1,
        "no_of_active_backlog": 0,
        "optout": false
    },
    {
        "student_id": 12,
        "name": "Emma Robinson",
        "rollNumber": "21BCP446D",
        "school_id": 1,
        "dep_id": 2,
        "year_of_study": 4,
        "personal_email": "emma@example.com",
        "college_email": "emma.robinson@college.edu",
        "phone_number": "+1234567801",
        "date_of_birth": "2000-12-12",
        "gender": "female",
        "city": "CityName",
        "state": "StateName",
        "tenth_percentage": 90.50,
        "twelfth_percentage": 92.00,
        "diploma_percentage": null,
        "cpi_after_7th_sem": 8.80,
        "cpi_after_8th_sem": 9.00,
        "remark": "Highly motivated",
        "category": "OBC",
        "first_sem_spi": 8.20,
        "second_sem_spi": 8.50,
        "third_sem_spi": 8.70,
        "fourth_fifth_sem_spi": 8.80,
        "sixth_sem_spi": 8.90,
        "seventh_sem_spi": 9.00,
        "eighth_sem_spi": 9.00,
        "no_of_backlog": 0,
        "no_of_active_backlog": 0,
        "optout": false
    },
    {
        "student_id": 13,
        "name": "Lucas Young",
        "rollNumber": "21BCP447D",
        "school_id": 1,
        "dep_id": 3,
        "year_of_study": 3,
        "personal_email": "lucas@example.com",
        "college_email": "lucas.young@college.edu",
        "phone_number": "+1234567802",
        "date_of_birth": "2001-01-18",
        "gender": "male",
        "city": "CityName",
        "state": "StateName",
        "tenth_percentage": 89.00,
        "twelfth_percentage": 90.50,
        "diploma_percentage": null,
        "cpi_after_7th_sem": null,
        "cpi_after_8th_sem": null,
        "remark": "Excellent problem-solver",
        "category": "General",
        "first_sem_spi": 8.00,
        "second_sem_spi": 8.30,
        "third_sem_spi": 8.50,
        "fourth_fifth_sem_spi": 8.60,
        "sixth_sem_spi": 8.70,
        "seventh_sem_spi": null,
        "eighth_sem_spi": null,
        "no_of_backlog": 1,
        "no_of_active_backlog": 0,
        "optout": false
    },
  ];
  
  
  export default previousStudentData;
  
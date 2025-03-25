$(document).ready(function () {
    
    const patientData = {
        name: "John Doe",
        age: 30,
        gender: "Male",
        dob: "1990-12-01",
        patientID: "P12345",
        conditions: ["Cardiology", "Psychiatry", "Endocrinology"],
        nextVisit: {
            date: "2023-09-15",
            description: "Follow-up for routine checkup."
        },
        appointments : [
            { type: "Physical Exam", date: "Sep 15" }
        ],
        upcoming_appointments : [
            { type: "Oral Surgeon", date: "Sep 21" }
        ],
        all_past_appointments : [
            { type: "Physical Exam", date: "Sep 15" },
            { type: "Oral Surgeon", date: "Sep 21" }
        ]

    };
  
    $(".patient-name ").text(patientData.name);
    $(".patient-age ").text(patientData.age);
    $(".patient-gender").text(patientData.gender);
    $(".patient-dob").text(patientData.dob);
    $(".patient-id").text(patientData.patientID);
    $(".patient-condition").html(
        patientData.conditions.map(condition => `<p class="mb-1 bg-dark text-white rounded p-1 ">${condition}</p>`).join("")
    );
    $(".next-visit-date").text(patientData.nextVisit.date);
    $(".small-description").text(patientData.nextVisit.description);

    
    $(".box2 .sub-box1 h6").first().text("Appointment List");
    patientData.appointments.map((appointment) => {
        const listItem = `
            <div class="list p-2 my-3 bg-white shadow-sm rounded d-flex gap-2">
                <i class="bi bi-heartbreak text-dark"></i>
                <p class="text-dark">${appointment.type}</p>
                <p class="fw-bold">${appointment.date}</p>
            </div>
        `;
        $(".appointment-list").append(listItem);
    });

    patientData.upcoming_appointments.forEach((appointment)=>{
        const listItem=`
        <div class="list p-2 my-3 bg-white shadow-sm rounded d-flex gap-2">
                <i class="bi bi-heartbreak text-dark"></i>
                <p class="text-dark">${appointment.type}</p>
                <p class="fw-bold">${appointment.date}</p>
            </div>
        `;
        $(".upcoming-appointment-list").append(listItem);
    });
    patientData.all_past_appointments.forEach((appointment)=>{
        const listItem=`
         <div class="list p-2 my-3 bg-white shadow-sm rounded d-flex gap-2">
                <i class="bi bi-heartbreak text-dark"></i>
                <p class="text-dark">${appointment.type}</p>
                <p class="fw-bold">${appointment.date}</p>
            </div>
        `;
        $(".all-past-appointments-list").append(listItem);
    })
});

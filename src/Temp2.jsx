import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


// import axios from "axios";

const Temp2 = () => {

  const pdfRef=useRef();

  const downloadPdf = () => {
    const input = pdfRef.current;
    html2canvas(input , { scrollY: -window.scrollY }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth + ratio) / 2;
      const imgY = 30;
      pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save("resume.pdf");
    });
  };





  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [college, setCollege] = useState("");
  const [university, setUniversity] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [job1, setJob1] = useState("");
  const [job2, setJob2] = useState("");
  const [job3, setJob3] = useState("");
  const [project1, setProject1] = useState("");
  const [project2, setProject2] = useState("");
  const [project3, setProject3] = useState("");
  const [achievement1, setAchievement1] = useState("");
  const [achievement2, setAchievement2] = useState("");
  const [achievement3, setAchievement3] = useState("");
  const [interest1, setInterest1] = useState("");
  const [interest2, setInterest2] = useState("");
  const [interest3, setInterest3] = useState("");
  const [certification1, setCertification1] = useState("");
  const [certification2, setCertification2] = useState("");
  const [certification3, setCertification3] = useState("");
  const [language1, setLanguage1] = useState("");
  const [language2, setLanguage2] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("in function");

    let data = {
      name: name,
      title: title,
      about:about,
      phoneNumber:phoneNumber,
      email:email,
      school:school,
      college:college,
      university:university,
      skill1:skill1,
      skill2:skill2,
      skill3:skill3,
      job1:job1,
      job2:job2,
      job3:job3,
      project1:project1,
      project2:project2,
      project3:project3,
      achievement1:achievement1,
      achievement2:achievement2,
      achievement3:achievement3,
      interest1:interest1,
      interest2:interest2,
      interest3:interest3,
      certification1:certification1,
      certification2:certification2,
      certification3:certification3,
      language1:language1,
      language2:language2
    }

    fetch("http://localhost:5000/form/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (response.ok) {
          alert("Form data saved successfully!");
        } else {
          throw new Error("Failed to save form data.");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred while saving the form data.");
      });
  };

  return (

<div
      style={{
        backgroundColor: "lightgray",
        padding: "1rem",
        borderRadius: "0.5rem",
      }}
    >




<div style={{ backgroundColor: "#D4E6F1", padding: "1rem", borderRadius: "0.5rem", width: "70%", height: "100%" }} ref={pdfRef}>



    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "80%" }}>
          <div>


          <div
      style={{
        backgroundColor: "#1F618D",
        padding: "1rem",
        borderRadius: "0.5rem",
        width: "100%"
      }}
    >



            <h1 style={{ color: "blue" }}>
              <input
                name="fullname"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                style={{ width: "500px" }}
              />
            </h1>
            <h3>
              <input
                name="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your profession"
                style={{ width: "500px" }}
              />
            </h3>
            <p>
              <textarea
                name="about"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                placeholder="Tell about yourself"
                style={{ width: "645px" }}
              />
            </p>
          </div>

</div>

          <div style={{ display: "flex" }}>
            <div style={{ flex: "1" }}>

            <div style={{ flex: "1" }}>  
              <p>
                <input
                  name="phone"
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your phone number"
                />
              </p>
             </div>


             <div style={{ flex: "1" }}>   
              <p style={{ color: "blue" }}>
                <input
                  name="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </p>

             </div>

             <div style={{ textAlign: "center" }}>
              <h2 style={{ color: "blue" , textDecoration: "underline"}}>Education</h2>
              </div>
              
              <ul>
                <li>
                  <input
                    type="text"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    style={{ width: "570px" }}
                  />
                </li>
                <li>
                  <input
                    type="text"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    style={{ width: "570px" }}
                  />
                </li>
                <li>
                  <input
                    type="text"
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    style={{ width: "570px" }}
                  />
                </li>
              </ul>
              
              <div style={{ textAlign: "center" }}>   
              <h2 style={{ color: "blue", textDecoration: "underline" }}>Skills</h2>
              </div>

              <ul>
                <li>
                  <input
                    type="text"
                    value={skill1}
                    onChange={(e) => setSkill1(e.target.value)}
                    style={{ width: "570px" }}
                  />
                </li>
                <li>
                  <input
                    type="text"
                    value={skill2}
                    onChange={(e) => setSkill2(e.target.value)}
                    style={{ width: "570px" }}
                  />
                </li>
                <li>
                  <input
                    type="text"
                    value={skill3}
                    onChange={(e) => setSkill3(e.target.value)}
                    style={{ width: "570px" }}
                  />
                </li>
              </ul>
               
              <div style={{ textAlign: "center" }}>  
              <h2 style={{ color: "blue" , textDecoration: "underline"}}>Experience</h2>
              </div>

              <ul>
                <li>
                  <input
                    type="text"
                    value={job1}
                    onChange={(e) => setJob1(e.target.value)}
                    style={{ width: "570px" }}
                  />
                </li>
                <li>
                  <input
                    type="text"
                    value={job2}
                    onChange={(e) => setJob2(e.target.value)}
                    style={{ width: "570px" }}
                  />
                </li>
                <li>
                  <input
                    type="text"
                    value={job3}
                    onChange={(e) => setJob3(e.target.value)}
                    style={{ width: "570px" }}
                  />
                </li>
              </ul>
               
              <div style={{ textAlign: "center" }}> 
              <h2 style={{ color: "blue", textDecoration: "underline" }}>Projects</h2>
              </div>


              <ul>
                <li>
                  <input
                    type="text"
                    value={project1}
                    onChange={(e) => setProject1(e.target.value)}
                    style={{ width: "570px" }}
                  />
                </li>
                <li>
                  <input
                    type="text"
                    value={project2}
                    onChange={(e) => setProject2(e.target.value)}
                    style={{ width: "570px" }}
                  />
                </li>
                <li>
                  <input
                    type="text"
                    value={project3}
                    onChange={(e) => setProject3(e.target.value)}
                    style={{ width: "570px" }}
                  />
                </li>
              </ul>
            
             



              <div style={{ textAlign: "center" }}>  
              <h2 style={{ color: "blue", textDecoration: "underline" }}>Achievements</h2>
              </div>
              
              <ul>
                <li>
                  <input
                    type="text"
                    value={achievement1}
                    onChange={(e) => setAchievement1(e.target.value)}
                    style={{ width: "570px" }}
                  />
                </li>
                <li>
                  <input
                    type="text"
                    value={achievement2}
                    onChange={(e) => setAchievement2(e.target.value)}
                    style={{ width: "570px" }}
                  />
                </li>
                <li>
                  <input
                    type="text"
                    value={achievement3}
                    onChange={(e) => setAchievement3(e.target.value)}
                    style={{ width: "570px" }}
                  />
                </li>
              </ul>
              
              <div style={{ textAlign: "center" }}> 
              <h2 style={{ color: "blue" , textDecoration: "underline"}}>Interest</h2>
              </div>

              <ul>
                <li>
                  <input
                    type="text"
                    value={interest1}
                    onChange={(e) => setInterest1(e.target.value)}
                    style={{ width: "570px" }}
                  />
                </li>
                <li>
                  <input
                    type="text"
                    value={interest2}
                    onChange={(e) => setInterest2(e.target.value)}
                    style={{ width: "570px" }}
                  />
                </li>
                <li>
                  <input
                    type="text"
                    value={interest3}
                    onChange={(e) => setInterest3(e.target.value)}
                    style={{ width: "570px" }}
                  />
                </li>
              </ul>
              
              <div style={{ textAlign: "center" }}>  
              <h2 style={{ color: "blue" , textDecoration: "underline"}}>Certification</h2>
              </div>

              <ul>
                <li>
                  <input
                    type="text"
                    value={certification1}
                    onChange={(e) => setCertification1(e.target.value)}
                    style={{ width: "570px" }}
                  />
                </li>
                <li>
                  <input
                    type="text"
                    value={certification2}
                    onChange={(e) => setCertification2(e.target.value)}
                    style={{ width: "570px" }}
                  />
                </li>
                <li>
                  <input
                    type="text"
                    value={certification3}
                    onChange={(e) => setCertification3(e.target.value)}
                    style={{ width: "570px" }}
                  />
                </li>
              </ul>
               
              <div style={{ textAlign: "center" }}> 
              <h2 style={{ color: "blue", textDecoration: "underline" }}>Languages</h2>
              </div>

              <ul>
                <li>
                  <input
                    type="text"
                    value={language1}
                    onChange={(e) => setLanguage1(e.target.value)}
                    style={{ width: "570px" }}
                  />
                </li>
                <li>
                  <input
                    type="text"
                    value={language2}
                    onChange={(e) => setLanguage2(e.target.value)}
                    style={{ width: "570px" }}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <button
        type="submit"
        style={{
          margin: "0 30rem",
          padding: "1rem 2rem",
          border: "2px solid blue",
          borderRadius: "0.5rem",
          fontWeight: "bold",
          color: "red",
        }}
      >
        Submit
      </button>

    </form>

</div>

<button className="btn btn-primary" onClick={downloadPdf}>Download PDF</button>


</div>

      );
  
  };
  


export default Temp2;

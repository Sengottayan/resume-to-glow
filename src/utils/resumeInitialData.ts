
import { 
  setDoc, 
  doc, 
  collection, 
  writeBatch 
} from "firebase/firestore";
import { db } from "@/config/firebase";

// Function to initialize all resume data in Firebase
export const initializeResumeData = async () => {
  try {
    // Initialize personal information
    await setDoc(doc(db, "resume", "personalInfo"), {
      name: "Sengottayan S",
      fathersName: "Mehanasundhari S",
      bloodGroup: "O",
      languages: ["Tamil", "English"],
      phone: "7010946232",
      email: "sengosamsonathan@gmail.com",
      address: "2/156 near water tank, vankadai, perundurai, erode 638052",
      aboutMe: "Looking for a job with MCA degree, to use my skills, gain experience in my job and implement new technology for the development of the company."
    });

    // Initialize education data
    const educationBatch = writeBatch(db);
    const educationData = [
      {
        degree: "BSc Computer Technology - Computer systems and design",
        institution: "Kongu Engineering college",
        period: "2021 - 2024"
      },
      {
        degree: "HSC (Higher Secondary School)",
        institution: "Kongu velalar matriculation higher secondary school",
        period: "2020 - 2021"
      },
      {
        degree: "SSLC (Secondary School Leaving Certificate)",
        institution: "Kongu velalar matriculation higher secondary school",
        period: "2018 - 2019"
      }
    ];

    educationData.forEach((edu, index) => {
      const docRef = doc(collection(db, "resume", "education", "items"));
      educationBatch.set(docRef, { ...edu });
    });
    await educationBatch.commit();

    // Initialize skills data
    const skillsBatch = writeBatch(db);
    const skillsData = [
      {
        name: "App Development",
        icon: "FaLaptopCode"
      },
      {
        name: "Web Development",
        icon: "FaCode"
      },
      {
        name: "Game Development",
        icon: "FaGamepad"
      },
      {
        name: "Problem Solving",
        icon: "FaPuzzlePiece"
      }
    ];

    skillsData.forEach((skill) => {
      const docRef = doc(collection(db, "resume", "skills", "items"));
      skillsBatch.set(docRef, { ...skill });
    });
    await skillsBatch.commit();

    // Initialize languages data
    const languagesBatch = writeBatch(db);
    const languagesData = [
      { name: "C", level: 85 },
      { name: "Java", level: 80 },
      { name: "Dart", level: 75 },
      { name: "Python", level: 70 },
      { name: "Go Lang", level: 65 }
    ];

    languagesData.forEach((lang) => {
      const docRef = doc(collection(db, "resume", "languages", "items"));
      languagesBatch.set(docRef, { ...lang });
    });
    await languagesBatch.commit();

    // Initialize projects data
    const projectsBatch = writeBatch(db);
    const projectsData = [
      {
        title: "Obstacle detector for blinds",
        description: "A device that helps visually impaired people detect obstacles in their path.",
        icon: "FaCode",
        date: "Dec 2022",
        location: "KEC Students"
      },
      {
        title: "Students details management system",
        description: "A system to manage student information and academic records efficiently.",
        icon: "FaDatabase",
        date: "Dec 2022",
        location: "Sustainability Hackathon"
      },
      {
        title: "Learning human anatomy using AR",
        description: "An augmented reality application to help students learn human anatomy interactively.",
        icon: "FaVrCardboard",
        date: "2024",
        location: "Research Project"
      },
      {
        title: "AI Deep learning for emotion detection and baby monitoring",
        description: "AI-based system that detects emotions and monitors babies for safety and care.",
        icon: "FaRobot",
        date: "2024",
        location: "Research Project"
      },
      {
        title: "Emotion detection using YCCB deep learning algorithm",
        description: "Implementation of the YCCB algorithm for accurate emotion detection.",
        icon: "FaRobot",
        date: "2024",
        location: "Research Project"
      }
    ];

    projectsData.forEach((project) => {
      const docRef = doc(collection(db, "resume", "projects", "items"));
      projectsBatch.set(docRef, { ...project });
    });
    await projectsBatch.commit();

    // Initialize certificates data
    const certificatesBatch = writeBatch(db);
    const certificatesData = [
      {
        title: "Project presented at National level event",
        organization: "BITV: PRAYUKIT23",
        date: "Feb 2023",
        icon: "FaAward"
      },
      {
        title: "Visual code hackathon",
        organization: "Visual Code",
        date: "Nov 2022",
        icon: "FaAward"
      },
      {
        title: "KEC Ideathon 2k22",
        organization: "KEC",
        date: "Sep 2022",
        icon: "FaAward"
      },
      {
        title: "Sustainability Hackathon",
        organization: "Sustainability Initiative",
        date: "Dec 2022",
        icon: "FaAward"
      },
      {
        title: "Innovate India Coding championship",
        organization: "Innovate India",
        date: "Jul 2022",
        icon: "FaAward"
      },
      {
        title: "Code bits",
        organization: "Code Organization",
        date: "May 2022",
        icon: "FaAward"
      },
      {
        title: "Best academic award at 2022",
        organization: "Kongu Engineering College",
        date: "2022",
        icon: "FaTrophy"
      },
      {
        title: "Project presented in international level conference",
        organization: "International Conference",
        date: "Feb 2024",
        icon: "FaAward"
      }
    ];

    certificatesData.forEach((cert) => {
      const docRef = doc(collection(db, "resume", "certificates", "items"));
      certificatesBatch.set(docRef, { ...cert });
    });
    await certificatesBatch.commit();

    // Initialize achievements data
    const achievementsBatch = writeBatch(db);
    const achievementsData = [
      {
        title: "Best Academic Award for the year 2022",
        organization: "Kongu Engineering College",
        icon: "FaTrophy"
      },
      {
        title: "First prize in obstacle detector for blinds project",
        organization: "Kongu Engineering College",
        icon: "FaMedal"
      },
      {
        title: "First prize in AR Human Anatomy",
        organization: "Kongu Engineering College",
        icon: "FaMedal"
      }
    ];

    achievementsData.forEach((achievement) => {
      const docRef = doc(collection(db, "resume", "achievements", "items"));
      achievementsBatch.set(docRef, { ...achievement });
    });
    await achievementsBatch.commit();

    // Initialize cocurricular activities data
    const cocurricularBatch = writeBatch(db);
    const cocurricularData = [
      {
        activity: "Go Lang",
        date: "Sep 2022"
      },
      {
        activity: "Pointers in c",
        date: "Jun 2022"
      },
      {
        activity: "Participated in sustainability hackathon in thinkObator",
        date: "Dec 2022"
      },
      {
        activity: "Participated in Visual code hackathon",
        date: "Nov 2022"
      },
      {
        activity: "AR/VR course",
        date: "Sep 2023"
      }
    ];

    cocurricularData.forEach((activity) => {
      const docRef = doc(collection(db, "resume", "cocurricular", "items"));
      cocurricularBatch.set(docRef, { ...activity });
    });
    await cocurricularBatch.commit();

    console.log("Resume data initialized successfully");
    return true;
  } catch (error) {
    console.error("Error initializing resume data:", error);
    return false;
  }
};
